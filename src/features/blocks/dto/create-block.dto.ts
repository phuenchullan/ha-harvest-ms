import { Type } from "class-transformer";
import { IsBoolean, IsOptional, IsPositive, IsString, IsUUID } from "class-validator";


export class CreateBlockDto {

    @IsString()
    name: string;

    @IsPositive()
    surface: number;

    @IsString()
    unit: string;

    @IsUUID()
    landId: string;

    @IsOptional()
    @IsPositive()
    phoneBlockId?: number;

    @IsOptional()
    @IsString()
    phoneId?: string;

    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    isLoaded?: boolean;

}