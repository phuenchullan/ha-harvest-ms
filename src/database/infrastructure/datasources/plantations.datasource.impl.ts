import { InjectDrizzle } from '@nestjs/drizzle';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { count, eq, inArray, sql } from 'drizzle-orm';
import { ResponseDto } from '../../../common/dto/response.dto.js';
import { CreatePlantationDto } from '../../../features/plantations/dto/create-plantation.dto.js';
import { UpdatePlantationDto } from '../../../features/plantations/dto/update-plantation.dto.js';
import { PlantationsDatasource } from '../../domain/datasource/plantations.datasource.js';
import { Plantation } from '../../domain/entities/plantation.js';
import { plantations } from '../../schemas/plantations.schema.js';
import { blocks } from '../../schemas/blocks.schema.js';
import { RpcException } from '@nestjs/microservices';
import { PlantationPaginationDto } from '../../../features/plantations/dto/plantation-pagination.dto.js';

export class PlantationsDatasourceImpl extends PlantationsDatasource {
  constructor(
    @InjectDrizzle()
    private readonly db: NodePgDatabase,
  ) {
    super();
  }

  async create(
    createPlantationDto: CreatePlantationDto,
  ): Promise<Partial<Plantation>> {
    try {
      const [block] = await this.db
        .select({ id: blocks.id })
        .from(blocks)
        .where(eq(blocks.id, createPlantationDto.blockId))
        .limit(1);

      if (!block) {
        throw new RpcException('El cuartel indicado no existe.');
      }

      const [newPlantation] = await this.db
        .insert(plantations)
        .values(createPlantationDto)
        .returning();
      return newPlantation;
    } catch (error) {
      throw new RpcException('Error al crear la plantacion.');
    }
  }

  async findAll(
    paginationDto: PlantationPaginationDto,
  ): Promise<ResponseDto<Partial<Plantation>>> {
    const { page = 1, limit = 10, blockIds } = paginationDto;
    try {
      const requestedBlockIds = blockIds
        ?.split(',')
        .map((id) => id.trim())
        .filter((id) =>
          /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
            id,
          ),
        );
      const blockFilter = blockIds
        ? requestedBlockIds?.length
          ? inArray(plantations.blockId, requestedBlockIds)
          : sql`false`
        : undefined;
      const [totalRecords] = await this.db
        .select({ count: count() })
        .from(plantations)
        .where(blockFilter);
      const listPlantations = await this.db
        .select()
        .from(plantations)
        .where(blockFilter)
        .offset((page - 1) * limit)
        .limit(limit);
      return {
        meta: {
          totalRecords: totalRecords.count,
          page,
          limit,
        },
        data: listPlantations as Array<Plantation>,
      };
    } catch (error) {
      throw new RpcException('Error al obtener las plantaciones.');
    }
  }

  async findById(id: string): Promise<Partial<Plantation>> {
    try {
      const [plantation] = await this.db
        .select()
        .from(plantations)
        .where(eq(plantations.id, id))
        .limit(1);
      return plantation;
    } catch (error) {
      throw new RpcException('Error al obtener la plantacion.');
    }
  }

  async updateById(
    id: string,
    updatePlantationDto: UpdatePlantationDto,
  ): Promise<Partial<Plantation>> {
    try {
      const [plantation] = await this.db
        .update(plantations)
        .set(updatePlantationDto)
        .where(eq(plantations.id, id))
        .returning();
      return plantation;
    } catch (error) {
      throw new RpcException('Error al actualizar la plantacion.');
    }
  }
}
