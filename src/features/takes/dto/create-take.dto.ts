import { Type } from "class-transformer";
import { IsBoolean, IsOptional, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateTakeDto {

    @IsUUID()
    trayId: string;

    @IsUUID()
    harvesterId: string;

    @IsPositive()
    @Type(() => Number)
    numberOfTray: number;

    @IsPositive()
    @Type(() => Number)
    brute: number;

    @IsPositive()
    @Type(() => Number)
    neto: number;

    @IsPositive()
    @Type(() => Number)
    price: number;

    @IsString()
    phoneId: string;

    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    isLoaded?: boolean;
}
