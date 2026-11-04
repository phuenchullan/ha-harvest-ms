import { Type } from "class-transformer";
import { IsBoolean, IsOptional, IsPositive, IsString, IsUUID } from "class-validator";


export class CreatePlantationDto {
    
    @IsString()
    fruit: string;
    
    @IsPositive()
    surface: number;

    @IsString()
    unit: string;

    @IsString()
    variety: string;

    @IsOptional()
    @IsUUID()
    blockId: string;

    @IsOptional()
    @IsPositive()
    phonePlantationId?: number;

    @IsOptional()
    @IsString()
    phoneId?: string;

    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    isLoaded?: boolean;

}