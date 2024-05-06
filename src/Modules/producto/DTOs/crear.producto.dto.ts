import { IsNumber, IsString } from "class-validator";
import Producto from "src/Entities/producto.entity";

export default class CrearProductoDTO implements  Partial<Producto>{
    @IsString()
    nombre: string;

    @IsNumber()
    precio: number;

}