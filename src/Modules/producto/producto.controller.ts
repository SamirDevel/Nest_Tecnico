import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import CrearProductoDTO from './DTOs/crear.producto.dto';
import FiltrarProductoDTO from './DTOs/filtros.producto.dto';

@Controller('productos')
export class ProductoController {
    constructor(
        private serviceProducto:ProductoService
    ){}

    @Post('crear')
    async create(@Body() body:CrearProductoDTO){
        return await this.serviceProducto.create(body)
    }

    @Get('')
    async read(@Query() filtros:FiltrarProductoDTO){
        if(filtros.precio!==undefined)
            filtros.precio =parseInt(filtros.precio.toString())
        if(filtros.id!==undefined)
            filtros.id =parseInt(filtros.id.toString())
        return await this.serviceProducto.read(filtros)
    }
}
