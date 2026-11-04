import { ResponseDto } from '../../../common/dto/response.dto.js';
import { CreatePlantationDto } from '../../../features/plantations/dto/create-plantation.dto.js';
import { UpdatePlantationDto } from '../../../features/plantations/dto/update-plantation.dto.js';
import { Plantation } from '../entities/plantation.js';
import { PlantationPaginationDto } from '../../../features/plantations/dto/plantation-pagination.dto.js';

export abstract class PlantationsRepository {
  abstract create(
    createPlantationDto: CreatePlantationDto,
  ): Promise<Partial<Plantation>>;
  abstract findAll(
    paginationDto: PlantationPaginationDto,
  ): Promise<ResponseDto<Partial<Plantation>>>;
  abstract findById(id: string): Promise<Partial<Plantation>>;
  abstract updateById(
    id: string,
    updatePlantationDto: UpdatePlantationDto,
  ): Promise<Partial<Plantation>>;
}
