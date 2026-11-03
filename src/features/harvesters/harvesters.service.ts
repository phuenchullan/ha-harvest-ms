import { Injectable } from '@nestjs/common';
import { CreateHarvesterDto } from './dto/create-harvester.dto.js';
import { HarvestersRepository } from '../../database/domain/repositories/harvesters.repository.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { UpdateHarvesterDto } from './dto/update-harvester.dto.js';

@Injectable()
export class HarvestersService {

    constructor(
        private readonly harvestersRepository: HarvestersRepository
    ){}

    create(createHarvesterDto: CreateHarvesterDto){
        return this.harvestersRepository.create(createHarvesterDto);
    }

    findAll(paginationDto: PaginationDto){
        return this.harvestersRepository.findAll(paginationDto);
    }

    findById(id: string){
        return this.harvestersRepository.findById(id);
    }

    update(id: string, updateHarvesterDto: UpdateHarvesterDto){
        return this.harvestersRepository.updateById(id, updateHarvesterDto);
    }
}
