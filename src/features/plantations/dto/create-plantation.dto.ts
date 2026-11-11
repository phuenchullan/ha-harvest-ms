import {
  IsDateString,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePlantationDto {

  @IsString()
  fruit: string;

  @IsPositive()
  surface: number;

  @IsString()
  unit: string;

  @IsString()
  variety: string;

  @IsUUID()
  blockId: string;

  @IsDateString()
  startDate: Date;

  @IsOptional()
  @IsDateString()
  endDate?: Date | null;

}
