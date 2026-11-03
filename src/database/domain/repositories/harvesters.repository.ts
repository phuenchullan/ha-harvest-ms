import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreateHarvesterDto } from "../../../features/harvesters/dto/create-harvester.dto.js";
import { UpdateHarvesterDto } from "../../../features/harvesters/dto/update-harvester.dto.js";
import { Harvester } from "../entities/harvester.js";



export abstract class HarvestersRepository {

    abstract create(createHarvesterDto: CreateHarvesterDto): Promise<Partial<Harvester>>;
    abstract findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Harvester>>>;
    abstract findById(id: string): Promise<Partial<Harvester>>;
    abstract updateById(id: string, updateHarvesterDto: UpdateHarvesterDto): Promise<Partial<Harvester>>;

}