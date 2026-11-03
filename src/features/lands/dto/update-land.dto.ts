import { PartialType } from "@nestjs/mapped-types";
import { CreateLandDto } from "./create-land.dto.js";
import { IsOptional } from "class-validator";



export class UpdateLandDto extends PartialType(CreateLandDto){
    @IsOptional()
    id?: string;
}