import { PartialType } from "@nestjs/mapped-types";
import { IsUUID } from "class-validator";
import { CreateTrayDto } from "./create-tray.dto.js";

export class UpdateTrayDto extends PartialType(CreateTrayDto) {

    @IsUUID()
    id?: string;
}
