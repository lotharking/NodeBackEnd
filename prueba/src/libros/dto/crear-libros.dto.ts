import { IsString, IsNotEmpty, IsNumber, IsPositive, Max, Min } from "class-validator";

export class CrearLibroDto{

    @IsString()
    @IsNotEmpty()
    nombre: String;

    @IsString()
    @IsNotEmpty()
    autor: String;

    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(1200)
    @IsNotEmpty()
    pags: number;
}