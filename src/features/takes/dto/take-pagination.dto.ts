import { IsDate, IsOptional, IsUUID } from 'class-validator';
import { PaginationDto } from '../../../common/dto/pagination.dto.js';

export class TakePaginationDto extends PaginationDto {

  @IsOptional()
  @IsUUID()
  platationId?: string;

  @IsOptional()
  @IsUUID()
  harvesterId?: string;

  @IsOptional()
  @IsUUID()
  userId?: string

  @IsOptional()
  @IsDate()
  startDate: string | Date;

  @IsOptional()
  @IsDate()
  endDate?: string | Date | null;
}
