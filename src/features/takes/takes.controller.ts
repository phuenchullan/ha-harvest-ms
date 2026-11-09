import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TakePaginationDto } from './dto/take-pagination.dto.js';
import { CreateTakeDto } from './dto/create-take.dto.js';
import { UpdateTakeDto } from './dto/update-take.dto.js';
import { TakesService } from './takes.service.js';

@Controller('takes')
export class TakesController {
  constructor(private readonly takesService: TakesService) {}

  @MessagePattern('takes.create')
  create(@Payload() createTakeDto: CreateTakeDto) {
    return this.takesService.create(createTakeDto);
  }

  @MessagePattern('takes.findAll')
  findAll(@Payload() paginationDto: TakePaginationDto) {
    return this.takesService.findAll(paginationDto);
  }

  @MessagePattern('takes.findById')
  findById(@Payload() id: string) {
    return this.takesService.findById(id);
  }

  @MessagePattern('takes.update')
  update(@Payload() updateTakeDto: UpdateTakeDto) {
    const { id, ...rest } = updateTakeDto;
    return this.takesService.update(id!, rest);
  }
}
