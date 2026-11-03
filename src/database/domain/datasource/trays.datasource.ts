import { PaginationDto } from "../../../common/dto/pagination.dto.js";
import { ResponseDto } from "../../../common/dto/response.dto.js";
import { CreateTrayDto } from "../../../features/trays/dto/create-tray.dto.js";
import { UpdateTrayDto } from "../../../features/trays/dto/update-tray.dto.js";
import { Tray } from "../entities/tray.js";

export abstract class TraysDatasource {

    abstract create(createTrayDto: CreateTrayDto): Promise<Partial<Tray>>;
    abstract findAll(paginationDto: PaginationDto): Promise<ResponseDto<Partial<Tray>>>;
    abstract findById(id: string): Promise<Partial<Tray>>;
    abstract updateById(id: string, updateTrayDto: UpdateTrayDto): Promise<Partial<Tray>>;
}
