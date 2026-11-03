import { Type } from "class-transformer";
import { IsBoolean, IsPositive, IsString, IsUUID } from "class-validator";


export class CreateBlockDto {

    @IsString()
    name: string;

    @IsPositive()
    surface: number;

    @IsString()
    unit: string;

    @IsUUID()
    landId: string;

    @IsPositive()
    phoneBlockId: number;

    @IsString()
    phoneId: string;

    @IsBoolean()
    @Type(() => Boolean)
    isLoaded: boolean;

}