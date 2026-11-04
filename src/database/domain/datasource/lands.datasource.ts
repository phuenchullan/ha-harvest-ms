import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreateLandDto } from "../../../features/lands/dto/create-land.dto.js";
import { UpdateLandDto } from "../../../features/lands/dto/update-land.dto.js";
import { Land } from "../entities/land.js";


export abstract class LandsDatasource {

    abstract findById(id: string): Promise<Partial<Land>>;
    abstract findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Land>>>;
    abstract create(createLandDto: CreateLandDto): Promise<Partial<Land>>;
    abstract update(id: string, updateLandDto: UpdateLandDto): Promise<Partial<Land>>;
}