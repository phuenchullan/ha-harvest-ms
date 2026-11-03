import { InjectDrizzle } from "@nestjs/drizzle";
import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreateHarvesterDto } from "../../../features/harvesters/dto/create-harvester.dto.js";
import { UpdateHarvesterDto } from "../../../features/harvesters/dto/update-harvester.dto.js";
import { HarvestersDatasource } from "../../domain/datasource/harvesters.datasource.js";
import { Harvester } from "../../domain/entities/harvester.js";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { RpcException } from "@nestjs/microservices";
import { harvesters } from "../../schemas/harvesters.schema.js";
import { count, eq } from "drizzle-orm";

export class HarvestersDatasourceImpl extends HarvestersDatasource {


    constructor(
        @InjectDrizzle()
        private readonly db: NodePgDatabase,
    ){
        super();
    }

    async create(createHarvesterDto: CreateHarvesterDto): Promise<Partial<Harvester>> {
        try {
            const [harvester] = await this.db.insert(harvesters).values(createHarvesterDto).returning();
            return harvester;
        } catch (error) {
            console.log(error);
            throw new RpcException("Error al crear el cosechador.");
        }
    }

    async findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Harvester>>> {
        try {
            const { page = 1, limit = 10 } = paginationDto;
            const [totalRecords] = await this.db.select({count: count()}).from(harvesters);
            const listHarvesters = await this.db.select().from(harvesters).offset((page - 1) * limit).limit(limit);
            return {
               meta: {
                page,
                limit,
                totalRecords: totalRecords.count,
               },
               data: listHarvesters,
            };
        } catch (error) {
            throw new RpcException("Error al obtener los cosechadores.");
        }
    }

    async findById(id: string): Promise<Partial<Harvester>> {
        try {
            const [harvester] = await this.db.select().from(harvesters).where(eq(harvesters.id, id));
            return harvester;
        } catch (error) {
            throw new RpcException("Error al obtener el cosechador.");
        }
    }

    async updateById(id: string, updateHarvesterDto: UpdateHarvesterDto): Promise<Partial<Harvester>>{
        try {
            const [harvester] = await this.db.update(harvesters).set(updateHarvesterDto).where(eq(harvesters.id, id)).returning();
            return harvester;
        } catch (error) {
            throw new RpcException("Error al actualizar el cosechador.");
        }
    }
    
}