import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../../common/dto/pagination.dto.js';

export class BlockPaginationDto extends PaginationDto {

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  land?: string;

}
