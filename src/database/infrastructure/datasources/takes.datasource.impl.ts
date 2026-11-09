import { InjectDrizzle } from '@nestjs/drizzle';
import { RpcException } from '@nestjs/microservices';
import { and, count, desc, eq, gte, lte } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { TakePaginationDto } from '../../../features/takes/dto/take-pagination.dto.js';
import { ResponseDto } from '../../../common/dto/response.dto.js';
import { CreateTakeDto } from '../../../features/takes/dto/create-take.dto.js';
import { UpdateTakeDto } from '../../../features/takes/dto/update-take.dto.js';
import { TakesDatasource } from '../../domain/datasource/takes.datasource.js';
import { Take } from '../../domain/entities/take.js';
import { harvesters } from '../../schemas/harvesters.schema.js';
import { plantations } from '../../schemas/plantations.schema.js';
import { takes } from '../../schemas/takes.schema.js';
import { trays } from '../../schemas/trays.schema.js';

export class TakesDatasourceImpl extends TakesDatasource {
  constructor(
    @InjectDrizzle()
    private readonly db: NodePgDatabase,
  ) {
    super();
  }

  async create(createTakeDto: CreateTakeDto): Promise<Partial<Take>> {
    try {
      const [tray] = await this.db
        .select({ id: trays.id })
        .from(trays)
        .where(eq(trays.id, createTakeDto.trayId))
        .limit(1);

      if (!tray) {
        throw new RpcException('La bandeja indicada no existe.');
      }

      const [plantation] = await this.db
        .select({ id: plantations.id })
        .from(plantations)
        .where(eq(plantations.id, createTakeDto.plantationId))
        .limit(1);

      if (!plantation) {
        throw new RpcException('La plantación indicada no existe.');
      }

      const [harvester] = await this.db
        .select({ id: harvesters.id })
        .from(harvesters)
        .where(eq(harvesters.id, createTakeDto.harvesterId))
        .limit(1);

      if (!harvester) {
        throw new RpcException('El cosechador indicado no existe.');
      }

      const [take] = await this.db
        .insert(takes)
        .values(createTakeDto)
        .returning();
      return take;
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }

      throw new RpcException('Error al crear la toma.');
    }
  }

  async findAll(
    paginationDto: TakePaginationDto,
  ): Promise<ResponseDto<Partial<Take>>> {
    try {
      const { page = 1, limit = 10, startDate, endDate } = paginationDto;
      const dateFilter = and(
        startDate
          ? gte(takes.createdAt, new Date(`${startDate}T00:00:00.000Z`))
          : undefined,
        endDate
          ? lte(takes.createdAt, new Date(`${endDate}T23:59:59.999Z`))
          : undefined,
      );
      const [totalRecords] = await this.db
        .select({ count: count() })
        .from(takes)
        .where(dateFilter);
      const listTakes = await this.db
        .select()
        .from(takes)
        .where(dateFilter)
        .orderBy(desc(takes.createdAt))
        .offset((page - 1) * limit)
        .limit(limit);

      return {
        meta: {
          page,
          limit,
          totalRecords: totalRecords.count,
        },
        data: listTakes,
      };
    } catch {
      throw new RpcException('Error al obtener las tomas.');
    }
  }

  async findById(id: string): Promise<Partial<Take>> {
    try {
      const [take] = await this.db.select().from(takes).where(eq(takes.id, id));
      return take;
    } catch {
      throw new RpcException('Error al obtener la toma.');
    }
  }

  async updateById(
    id: string,
    updateTakeDto: UpdateTakeDto,
  ): Promise<Partial<Take>> {
    try {
      const [take] = await this.db
        .update(takes)
        .set(updateTakeDto)
        .where(eq(takes.id, id))
        .returning();
      return take;
    } catch {
      throw new RpcException('Error al actualizar la toma.');
    }
  }
}
