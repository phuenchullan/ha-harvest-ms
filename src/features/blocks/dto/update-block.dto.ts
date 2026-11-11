import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockDto } from './create-block.dto.js';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateBlockDto extends PartialType(CreateBlockDto) {

  @IsOptional()
  @IsUUID()
  id?: string;

}
