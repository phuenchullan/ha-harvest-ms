import { InjectDrizzle } from "@nestjs/drizzle";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { LandsDatasource } from "../../domain/datasource/lands.datasource.js";
import { CreateLandDto } from "../../../features/lands/dto/create-land.dto.js";
import { lands } from "../../schemas/lands.schema.js";
import { Land } from "../../domain/entities/land.js";
import { UpdateLandDto } from "../../../features/lands/dto/update-land.dto.js";
import { RpcException } from "@nestjs/microservices";
import { count, eq } from "drizzle-orm";
import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";


export class LandsDatasourceImpl extends LandsDatasource {
    
    constructor(
        @InjectDrizzle()
        private readonly db: NodePgDatabase,
    ){
        super();
    }

    async create(createLandDto: CreateLandDto): Promise<Partial<Land>> {
        try {
            const [newLand] = await this.db.insert(lands).values(createLandDto).returning();
            return newLand;
        } catch (error) {
            throw new RpcException("Error al crear el fundo.");
        }
    }

    async findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Land>>> {

        const { page = 1, limit = 10 } = paginationDto;
        try {
            const [totalRecords] = await this.db.select({count: count()}).from(lands);
            const listLands = await this.db.select().from(lands).offset((page - 1) * limit).limit(limit);
            return {
                meta: {
                    totalRecords: totalRecords.count,
                    page,
                    limit,
                },
                data: listLands,
            };
        } catch (error) {
            throw new RpcException("Error al obtener la lista de fundos.");
        }
    }

    async findById(id: string): Promise<Partial<Land>> {
        try {
            const land = await this.db.select().from(lands).where(eq(lands.id, id));
            return land[0];
        } catch (error) {
            throw new RpcException("Error al obtener el fundo.");
        }
    }

    async update(id: string, updateLandDto: UpdateLandDto): Promise<Partial<Land>> {
        try {
            const updatedLand = await this.db.update(lands).set(updateLandDto).where(eq(lands.id, id)).returning();
            return updatedLand[0];
        } catch (error) {
            throw new RpcException("Error al actualizar fundo.");
        }
    }
    
}

