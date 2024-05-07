import { IsString, IsNumber, IsPositive, IsOptional } from "class-validator";
import CrearProductoDTO from "./crear.producto.dto";

export default class ActualizarProductoDTo implements CrearProductoDTO{
    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    precio: number;
} 