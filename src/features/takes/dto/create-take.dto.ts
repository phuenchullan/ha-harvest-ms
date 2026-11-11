import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTakeDto {
  
  @IsUUID()
  plantationId: string;

  @IsUUID()
  trayId: string;

  @IsUUID()
  harvesterId: string;

  @IsUUID()
  userId: string;

  @IsPositive()
  @Type(() => Number)
  numberOfTray: number;

  @IsPositive()
  @Type(() => Number)
  brute: number;

  @IsPositive()
  @Type(() => Number)
  neto: number;

  @IsPositive()
  @Type(() => Number)
  price: number;

  @IsPositive()
  @Type(() => Number)
  phoneTakeId: number;

  @IsString()
  phoneId: string;

  @IsDateString()
  takeDate: Date;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isLoaded?: boolean;

}
