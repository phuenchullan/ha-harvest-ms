import { IsOptional, IsUUID } from 'class-validator';
import { PaginationDto } from '../../../common/dto/pagination.dto.js';

export class PlantationPaginationDto extends PaginationDto {

  @IsOptional()
  @IsUUID()
  blockIds?: string;
  
}
