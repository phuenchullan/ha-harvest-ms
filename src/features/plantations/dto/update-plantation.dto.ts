import { PartialType } from "@nestjs/mapped-types";
import { CreatePlantationDto } from "./create-plantation.dto.js";
import { IsBoolean, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";



export class UpdatePlantationDto extends PartialType(CreatePlantationDto){

    @IsOptional()
    @IsString()
    id?: string;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    isLoaded?: boolean;
    
}