import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockDto } from './create-block.dto.js';
import { IsOptional } from 'class-validator';

export class UpdateBlockDto extends PartialType(CreateBlockDto) {
  @IsOptional()
  id?: string;
}
