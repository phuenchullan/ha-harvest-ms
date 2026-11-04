import { BlocksDatasource } from "../../domain/datasource/blocks.datasource.js";
import { CreateBlockDto } from "../../../features/blocks/dto/create-block.dto.js";
import { UpdateBlockDto } from "../../../features/blocks/dto/update-block.dto.js";
import { Block } from "../../domain/entities/block.js";
import { InjectDrizzle } from "@nestjs/drizzle";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { count, eq } from "drizzle-orm";
import { RpcException } from "@nestjs/microservices";
import { blocks } from "../../schemas/blocks.schema.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { BlockPaginationDto } from "../../../features/blocks/dto/block-pagination.dto.js";

export class BlocksDatasourceImpl extends BlocksDatasource {
    
    constructor(
        @InjectDrizzle()
        private readonly db: NodePgDatabase,
    ){
        super();
    }

    async findById(id: string): Promise<Partial<Block>> {
        try {
            const block = await this.db.select().from(blocks).where(eq(blocks.id, id));
            return block[0];
        } catch (error) {
            throw new RpcException("Error al obtener el cuartel.");
        }
    }

    async findAll(paginationDto: BlockPaginationDto): Promise<ResponseDto<Partial<Block>>> {
        try {
            const { page = 1, limit = 10, land } = paginationDto;
            const landFilter = land ? eq(blocks.landId, land) : undefined;
            const listBlocks = await this.db.select().from(blocks).where(landFilter).offset((page - 1) * limit).limit(limit);
            const [totalRecords] = await this.db.select({count: count()}).from(blocks).where(landFilter);
            return {
                meta: {
                    totalRecords: totalRecords.count,
                    page,
                    limit,
                },
                data: listBlocks,
            };
        } catch (error) {
            throw new RpcException("Error al obtener la lista de cuarteles.");
        }
    }

    async create(createBlockDto: CreateBlockDto): Promise<Partial<Block>> {
        try {
            const { name, landId } = createBlockDto;
            const foundBlock = await this.db.select().from(blocks).where(eq(blocks.landId, landId) && eq(blocks.name, name));
            if (foundBlock.length > 0) {
                throw new RpcException("El cuartel ya existe.");
            }
            const newBlock = await this.db.insert(blocks).values(createBlockDto).returning();
            return newBlock[0];
        } catch (error) {
            throw new RpcException({error});
        } 
    }

    async updateById(id: string, updateBlockDto: UpdateBlockDto): Promise<Partial<Block>> {
        try {
            const foundBlock = await this.db.update(blocks).set(updateBlockDto).where(eq(blocks.id, id)).returning();
            return foundBlock[0];
        } catch (error) {
            throw new RpcException("Error al actualizar el cuartel.");
        }   
    } 
    
}