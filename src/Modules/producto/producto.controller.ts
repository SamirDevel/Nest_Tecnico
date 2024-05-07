import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import CrearProductoDTO from './DTOs/crear.producto.dto';
import FiltrarProductoDTO from './DTOs/filtros.producto.dto';
import ActualizarProductoDTO from './DTOs/actualizar.producto.dto';
import Catch from 'src/utilities/catch';

@Controller('productos')
export class ProductoController {
    constructor(
        private serviceProducto:ProductoService
    ){}

    @Post('')
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
    @Put(':id')
    async updateFull(@Param('id') id:string, @Body() body:CrearProductoDTO){
        let idNumber:number;
        const error = await Catch(()=>{
            idNumber = parseInt(id);
            if(isNaN(idNumber))throw new Error('El id es incorrecto');
        }, 'El id debe sere un numero a partir del cero')
        return error===null
            ?await this.serviceProducto.update(idNumber, body)
            :error
    }
    @Patch(':id')
    async updatePartial(@Param('id') id:string, @Body() body:ActualizarProductoDTO){
        let idNumber:number;
        const error = await Catch(()=>{
            idNumber = parseInt(id);
            if(isNaN(idNumber))throw new Error('El id es incorrecto');
        }, 'El id debe sere un numero a partir del cero')
        return error===null
            ?await this.serviceProducto.update(idNumber, body)
            :error
    }

    @Delete(':id')
    async deletProducto(@Param('id') id:string){
        let idNumber:number;
        const error = await Catch(()=>{
            idNumber = parseInt(id);
            if(isNaN(idNumber))throw new Error('El id es incorrecto');
        }, 'El id debe sere un numero a partir del cero')
        return error===null
            ?await this.serviceProducto.delete(idNumber)
            :error
    }

}
