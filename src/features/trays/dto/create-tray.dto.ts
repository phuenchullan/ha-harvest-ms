import { Type } from "class-transformer";
import { IsPositive, IsString } from "class-validator";

export class CreateTrayDto {

    @IsString()
    tag: string;

    @IsString()
    description: string;

    @IsPositive()
    @Type(() => Number)
    weight: number;

    @IsPositive()
    @Type(() => Number)
    weightPerTray: number;
}
