import { Injectable } from "@nestjs/common";
import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreateTrayDto } from "../../../features/trays/dto/create-tray.dto.js";
import { UpdateTrayDto } from "../../../features/trays/dto/update-tray.dto.js";
import { TraysDatasource } from "../../domain/datasource/trays.datasource.js";
import { Tray } from "../../domain/entities/tray.js";
import { TraysRepository } from "../../domain/repositories/trays.repository.js";

@Injectable()
export class TraysRepositoryImpl extends TraysRepository {

    constructor(
        private readonly traysDatasource: TraysDatasource,
    ) {
        super();
    }

    create(createTrayDto: CreateTrayDto): Promise<Partial<Tray>> {
        return this.traysDatasource.create(createTrayDto);
    }

    findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Tray>>> {
        return this.traysDatasource.findAll(paginationDto);
    }

    findById(id: string): Promise<Partial<Tray>> {
        return this.traysDatasource.findById(id);
    }

    updateById(id: string, updateTrayDto: UpdateTrayDto): Promise<Partial<Tray>> {
        return this.traysDatasource.updateById(id, updateTrayDto);
    }
}
