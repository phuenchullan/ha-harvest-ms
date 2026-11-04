import { Type } from "class-transformer";
import { IsOptional, IsPositive, IsString, IsUUID } from "class-validator";


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
    @Type(() => Number)
    phonePlantationId: number;

    @IsString()
    phoneId: string;

}