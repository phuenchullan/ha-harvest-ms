import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HarvestersService } from './harvesters.service.js';
import { CreateHarvesterDto } from './dto/create-harvester.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { UpdateHarvesterDto } from './dto/update-harvester.dto.js';

@Controller('harvesters')
export class HarvestersController {

    constructor(
        private readonly harvestersService: HarvestersService
    ){}

    @MessagePattern('harvesters.create')
    create(@Payload() createHarvesterDto: CreateHarvesterDto){
        return this.harvestersService.create(createHarvesterDto);
    }

    @MessagePattern('harvesters.findAll')
    findAll(@Payload() paginationDto: PaginationDto){
        return this.harvestersService.findAll(paginationDto);
    }

    @MessagePattern('harvesters.findById')
    findById(@Payload() id: string){
        return this.harvestersService.findById(id);
    }

    @MessagePattern('harvesters.update')
    update(@Payload() updateHarvesterDto: UpdateHarvesterDto){
        const { id, ...rest } = updateHarvesterDto;
        return this.harvestersService.update(id!, rest);
    }

}
