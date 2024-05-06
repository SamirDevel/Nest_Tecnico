import { IsNumberString, IsNumber, IsString, IsOptional } from "class-validator";
import Producto from "src/Entities/producto.entity";

export default class FiltrarProductoDTO implements  Producto{
    @IsOptional()
    @IsNumberString()
    id: number;

    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsNumberString()
    precio: number;

}