import { Injectable } from '@nestjs/common';
import { ResponseDto } from '../../../common/dto/response.dto.js';
import { CreatePlantationDto } from '../../../features/plantations/dto/create-plantation.dto.js';
import { UpdatePlantationDto } from '../../../features/plantations/dto/update-plantation.dto.js';
import { PlantationPaginationDto } from '../../../features/plantations/dto/plantation-pagination.dto.js';
import { PlantationsDatasource } from '../../domain/datasource/plantations.datasource.js';
import { Plantation } from '../../domain/entities/plantation.js';
import { PlantationsRepository } from '../../domain/repositories/plantations.repository.js';

@Injectable()
export class PlantationsRepositoryImpl extends PlantationsRepository {
  constructor(private readonly datasource: PlantationsDatasource) {
    super();
  }

  async create(
    createPlantationDto: CreatePlantationDto,
  ): Promise<Partial<Plantation>> {
    return await this.datasource.create(createPlantationDto);
  }

  async findAll(
    paginationDto: PlantationPaginationDto,
  ): Promise<ResponseDto<Partial<Plantation>>> {
    return await this.datasource.findAll(paginationDto);
  }

  async findById(id: string): Promise<Partial<Plantation>> {
    return await this.datasource.findById(id);
  }

  async updateById(
    id: string,
    updatePlantationDto: UpdatePlantationDto,
  ): Promise<Partial<Plantation>> {
    return await this.datasource.updateById(id, updatePlantationDto);
  }
}
