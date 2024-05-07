import { Injectable } from '@nestjs/common';
import CRUD from '../crud.interface';
import Producto from 'src/Entities/producto.entity';
import Catch from 'src/utilities/catch';
import CrearProductoDTO from './DTOs/crear.producto.dto';
import Filter from 'src/utilities/filter';

@Injectable()
export class ProductoService implements CRUD<Producto>{
    private productos:Producto[];
    private index:number;
    constructor(){
        this.productos = new Array();
        this.index = 0;
    }
    async create(nuevo: CrearProductoDTO){
        const error = await Catch(()=>{
            this.productos.forEach(producto=>{
                if(producto.nombre===nuevo.nombre)throw new Error('Producto ya registrado');
            })
            this.productos.push({
                id:this.index++,
                ...nuevo
            });
        }, 'Ha ocurrido un error al crear el producto');
        //console.log(error)
        if(error===null)return 'Producto creado con exito';
        else return error;
    }
    async read(filtros: Partial<Producto>){
        return Filter(this.productos, filtros);
    }
    async update(id:number, datos: Partial<Producto>){
        let toUpdate:Partial<Producto>
        const error =  await Catch(async ()=>{
            const producto = (await this.read({id}))[0];
            if(producto===undefined)throw new Error('Producto no encontrado')
            else toUpdate = producto;
        }, 'Ha ocurrido un error al actualizar el producto');
        //console.log(error)
        if(error===null){
            const keys = Object.keys(datos);
            for(const i in keys ){
                const key = keys[i]
                if(datos[key]!==undefined)toUpdate[key] = datos[key];
            }
            return 'Producto actualizado con exito'
        }else return error;
    }
    async delete(id:number){
        const error =  await Catch(async ()=>{
            let index = this.productos.findIndex(producto=>{
                return producto.id === id
            });
            if(index===-1)throw new Error('Producto no encontrado')
            else this.productos.splice(index,1)
        }, 'Ha ocurrido un error al eliminar el producto');
        //console.log(error)
        return error===null
            ?'Producto eliminado con exito'
            :error;
        
    }
}
