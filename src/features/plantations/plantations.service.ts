import { Injectable } from '@nestjs/common';
import { PlantationsRepository } from '../../database/domain/repositories/plantations.repository.js';
import { CreatePlantationDto } from './dto/create-plantation.dto.js';
import { UpdatePlantationDto } from './dto/update-plantation.dto.js';
import { PlantationPaginationDto } from './dto/plantation-pagination.dto.js';

@Injectable()
export class PlantationsService {
  constructor(private readonly plantationsRepository: PlantationsRepository) {}

  async create(createPlantationDto: CreatePlantationDto) {
    return await this.plantationsRepository.create(createPlantationDto);
  }

  async findAll(paginationDto: PlantationPaginationDto) {
    return await this.plantationsRepository.findAll(paginationDto);
  }

  async findById(id: string) {
    return await this.plantationsRepository.findById(id);
  }

  async updateById(id: string, updatePlantationDto: UpdatePlantationDto) {
    return await this.plantationsRepository.updateById(id, updatePlantationDto);
  }
}
