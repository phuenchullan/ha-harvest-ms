import { Injectable } from "@nestjs/common";
import { CreateLandDto } from "../../../features/lands/dto/create-land.dto.js";
import { LandsDatasource } from "../../domain/datasource/lands.datasource.js";
import { Land } from "../../domain/entities/land.js";
import { LandsRepository } from "../../domain/repositories/lands.repository.js";
import { UpdateLandDto } from "../../../features/lands/dto/update-land.dto.js";
import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";


@Injectable()
export class LandsRepositoryImpl extends LandsRepository {
    
    constructor(
        private readonly datasource: LandsDatasource
    ){
        super();
    }

    async findById(id: string): Promise<Partial<Land>> {
        return await this.datasource.findById(id);
    }

    async findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Land>>> {
        return await this.datasource.findAll(paginationDto);
    }

    async create(createLandDto: CreateLandDto): Promise<Partial<Land>> {
        return await this.datasource.create(createLandDto);
    }

    async update(id: string, updateLandDto: UpdateLandDto): Promise<Partial<Land>> {
        return await this.datasource.update(id, updateLandDto);
    }

}