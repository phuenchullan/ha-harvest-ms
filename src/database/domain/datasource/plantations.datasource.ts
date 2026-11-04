import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreatePlantationDto } from "../../../features/plantations/dto/create-plantation.dto.js";
import { UpdatePlantationDto } from "../../../features/plantations/dto/update-plantation.dto.js";
import { Plantation } from "../entities/plantation.js";



export abstract class PlantationsDatasource {

    abstract create(createPlantationDto: CreatePlantationDto): Promise<Partial<Plantation>>;
    abstract findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Plantation>>>;
    abstract findById(id: string): Promise<Partial<Plantation>>;
    abstract updateById(id: string, updatePlantationDto: UpdatePlantationDto): Promise<Partial<Plantation>>;
}