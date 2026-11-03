import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { PlantationsService } from './plantations.service.js';
import { CreatePlantationDto } from './dto/create-plantation.dto.js';
import { UpdatePlantationDto } from './dto/update-plantation.dto.js';

@Controller('plantations')
export class PlantationsController {

    constructor(
        private readonly plantationsService: PlantationsService
    ){}

    @MessagePattern('plantations.create')
    create(@Payload() createPlantationDto: CreatePlantationDto){
        return this.plantationsService.create(createPlantationDto);
    }

    @MessagePattern('plantations.findAll')
    findAll(@Payload() paginationDto: PaginationDto){
        return this.plantationsService.findAll(paginationDto);
    }

    @MessagePattern('plantations.findById')
    findById(@Payload() id: string){
        return this.plantationsService.findById(id);
    }

    @MessagePattern('plantations.updateById')
    updateById(@Payload() updatePlantationDto: UpdatePlantationDto){
        const { id, ...rest } = updatePlantationDto;
        return this.plantationsService.updateById(id!, rest);
    }
}
