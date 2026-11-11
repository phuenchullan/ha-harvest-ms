import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateBlockDto {

 @IsString()
  name: string;

  @IsPositive()
  surface: number;

  @IsString()
  unit: string;

  @IsUUID()
  landId: string;

}
