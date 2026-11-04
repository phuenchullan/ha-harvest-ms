import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "../../../common/dto/pagination.dto.js";


export class BlockPaginationDto extends PaginationDto {

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    land?: string;

}