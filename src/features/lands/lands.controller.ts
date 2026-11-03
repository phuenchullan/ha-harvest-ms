import { Body, Controller } from '@nestjs/common';
import { CreateLandDto } from './dto/create-land.dto.js';
import { LandsService } from './lands.service.js';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateLandDto } from './dto/update-land.dto.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Controller('lands')
export class LandsController {

  constructor(
    private readonly landsService: LandsService
  ){}

  @MessagePattern('lands.findById')
  findById(@Payload() id: string){
    return this.landsService.findById(id);
  }

  @MessagePattern('lands.findAll')
  findAll(@Payload() paginationDto: PaginationDto){
    return this.landsService.findAll(paginationDto);
  }

  @MessagePattern('lands.create')
  create(@Body() createLandDto: CreateLandDto){
    return this.landsService.create(createLandDto);
  }

  @MessagePattern('lands.update')
  update(@Body() updateLandDto: UpdateLandDto){
    const { id, ...rest } = updateLandDto;
    return this.landsService.update(id!, rest);
  }

}
