import { PartialType } from '@nestjs/mapped-types';
import { IsUUID } from 'class-validator';
import { CreateTakeDto } from './create-take.dto.js';

export class UpdateTakeDto extends PartialType(CreateTakeDto) {

  @IsUUID()
  id?: string;
  
}
