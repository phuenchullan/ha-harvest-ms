import { InjectDrizzle } from "@nestjs/drizzle";
import { RpcException } from "@nestjs/microservices";
import { count, eq } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreateTrayDto } from "../../../features/trays/dto/create-tray.dto.js";
import { UpdateTrayDto } from "../../../features/trays/dto/update-tray.dto.js";
import { TraysDatasource } from "../../domain/datasource/trays.datasource.js";
import { Tray } from "../../domain/entities/tray.js";
import { trays } from "../../schemas/trays.schema.js";

export class TraysDatasourceImpl extends TraysDatasource {

    constructor(
        @InjectDrizzle()
        private readonly db: NodePgDatabase,
    ) {
        super();
    }

    async create(createTrayDto: CreateTrayDto): Promise<Partial<Tray>> {
        try {
            const [tray] = await this.db.insert(trays).values(createTrayDto).returning();
            return tray;
        } catch {
            throw new RpcException("Error al crear la bandeja.");
        }
    }

    async findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Tray>>> {
        try {
            const { page = 1, limit = 10 } = paginationDto;
            const [totalRecords] = await this.db.select({ count: count() }).from(trays);
            const listTrays = await this.db
                .select()
                .from(trays)
                .offset((page - 1) * limit)
                .limit(limit);

            return {
                meta: {
                    page,
                    limit,
                    totalRecords: totalRecords.count,
                },
                data: listTrays,
            };
        } catch {
            throw new RpcException("Error al obtener las bandejas.");
        }
    }

    async findById(id: string): Promise<Partial<Tray>> {
        try {
            const [tray] = await this.db.select().from(trays).where(eq(trays.id, id));
            return tray;
        } catch {
            throw new RpcException("Error al obtener la bandeja.");
        }
    }

    async updateById(id: string, updateTrayDto: UpdateTrayDto): Promise<Partial<Tray>> {
        try {
            const [tray] = await this.db
                .update(trays)
                .set(updateTrayDto)
                .where(eq(trays.id, id))
                .returning();
            return tray;
        } catch {
            throw new RpcException("Error al actualizar la bandeja.");
        }
    }
}
