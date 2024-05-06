import { Injectable } from '@nestjs/common';
import CRUD from '../crud.interface';
import Producto from 'src/Entities/producto.entity';
import Catch from 'src/utilities/catch';
import CrearProductoDTO from './DTOs/crear.producto.dto';
import Filter from 'src/utilities/filter';

@Injectable()
export class ProductoService implements CRUD<Producto>{
    private productos:Producto[];
    constructor(){
        this.productos = new Array();
    }
    async create(nuevo: CrearProductoDTO){
        const error = Catch(()=>{
            this.productos.forEach(producto=>{
                if(producto.nombre===nuevo.nombre)throw new Error('Producto ya registrado');
            })
            this.productos.push({
                id:this.productos.length,
                ...nuevo
            });
        }, 'Ha ocurrido un error al crear el producto');
        //console.log(error)
        if(error===null)return 'Producto creado con exito';
        else return error;
    }
    async update(filtros: Partial<Producto>, datos: Partial<Producto>){

    }
    async read(filtros: Partial<Producto>){
        return Filter(this.productos, filtros);
    }
    async delete(filtros: Partial<Producto>){

    }
}
