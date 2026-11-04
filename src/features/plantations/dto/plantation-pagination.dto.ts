import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../../common/dto/pagination.dto.js';

export class PlantationPaginationDto extends PaginationDto {
  @IsOptional()
  @IsString()
  blockIds?: string;
}
