import { PartialType } from "@nestjs/mapped-types";
import { CreatePlantationDto } from "./create-plantation.dto.js";
import { IsBoolean, IsOptional, IsUUID } from "class-validator";
import { Type } from "class-transformer";



export class UpdatePlantationDto extends PartialType(CreatePlantationDto){

    @IsOptional()
    @IsUUID()
    id?: string;

    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    active?: boolean;
    
}