import { IsPositive, IsString } from 'class-validator';

export class CreateLandDto {

    @IsString()
    name: string;

    @IsPositive()
    surface: number;

    @IsString()
    unit: string;

}