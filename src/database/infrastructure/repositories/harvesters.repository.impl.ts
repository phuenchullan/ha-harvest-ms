import { Injectable } from "@nestjs/common";
import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreateHarvesterDto } from "../../../features/harvesters/dto/create-harvester.dto.js";
import { UpdateHarvesterDto } from "../../../features/harvesters/dto/update-harvester.dto.js";
import { HarvestersDatasource } from "../../domain/datasource/harvesters.datasource.js";
import { Harvester } from "../../domain/entities/harvester.js";
import { HarvestersRepository } from "../../domain/repositories/harvesters.repository.js";


@Injectable()
export class HarvestersRepositoryImpl extends HarvestersRepository {

    constructor(
        private readonly harvestersDatasource: HarvestersDatasource,
    ){
        super();
    }


    create(createHarvesterDto: CreateHarvesterDto): Promise<Partial<Harvester>> {
        return this.harvestersDatasource.create(createHarvesterDto);
    }
    findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Harvester>>> {
        return this.harvestersDatasource.findAll(paginationDto);
    }
    findById(id: string): Promise<Partial<Harvester>> {
        return this.harvestersDatasource.findById(id);
    }
    updateById(id: string, updateHarvesterDto: UpdateHarvesterDto): Promise<Partial<Harvester>> {
        return this.harvestersDatasource.updateById(id, updateHarvesterDto);
    }
    
}