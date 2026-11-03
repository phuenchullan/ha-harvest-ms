import { Injectable } from "@nestjs/common";
import { PaginationDto } from "../../common/dto/pagination.dto.js";
import { TakesRepository } from "../../database/domain/repositories/takes.repository.js";
import { CreateTakeDto } from "./dto/create-take.dto.js";
import { UpdateTakeDto } from "./dto/update-take.dto.js";

@Injectable()
export class TakesService {

    constructor(
        private readonly takesRepository: TakesRepository,
    ) {}

    create(createTakeDto: CreateTakeDto) {
        return this.takesRepository.create(createTakeDto);
    }

    findAll(paginationDto: PaginationDto) {
        return this.takesRepository.findAll(paginationDto);
    }

    findById(id: string) {
        return this.takesRepository.findById(id);
    }

    update(id: string, updateTakeDto: UpdateTakeDto) {
        return this.takesRepository.updateById(id, updateTakeDto);
    }
}
