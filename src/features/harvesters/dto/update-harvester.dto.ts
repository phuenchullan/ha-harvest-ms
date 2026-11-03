import { PartialType } from "@nestjs/mapped-types";
import { CreateHarvesterDto } from "./create-harvester.dto.js";
import { IsUUID } from "class-validator";



export class UpdateHarvesterDto extends PartialType(CreateHarvesterDto){
    
    @IsUUID()
    id?: string;
}