import { Type } from "class-transformer";
import { IsBoolean, IsOptional, IsPositive, IsString } from "class-validator";


export class CreateHarvesterDto {
    
    @IsPositive()
    @Type(() => Number)
    rut: number;

    @IsString()
    dv: string;

    @IsString()
    name: string;

    @IsString()
    lastname: string;

    @IsOptional()
    @IsString()
    contrator?: string;

    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    phoneHarvesterId: number;

    @IsOptional()
    @IsString()
    phoneId: string;

    @IsOptional()
    @IsString()
    photoPath?: string;

    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    isLoaded?: boolean;

}