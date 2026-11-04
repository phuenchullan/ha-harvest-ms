import { Injectable } from "@nestjs/common";
import { PaginationDto } from "../../common/dto/pagination.dto.js";
import { TraysRepository } from "../../database/domain/repositories/trays.repository.js";
import { CreateTrayDto } from "./dto/create-tray.dto.js";
import { UpdateTrayDto } from "./dto/update-tray.dto.js";

@Injectable()
export class TraysService {

    constructor(
        private readonly traysRepository: TraysRepository,
    ) {}

    create(createTrayDto: CreateTrayDto) {
        return this.traysRepository.create(createTrayDto);
    }

    findAll(paginationDto: PaginationDto) {
        return this.traysRepository.findAll(paginationDto);
    }

    findById(id: string) {
        return this.traysRepository.findById(id);
    }

    update(id: string, updateTrayDto: UpdateTrayDto) {
        return this.traysRepository.updateById(id, updateTrayDto);
    }
}
