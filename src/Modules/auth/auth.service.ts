import { Injectable } from '@nestjs/common';
import readList from 'src/utilities/files';

interface user{
    usuario:string
    psw:string
}
interface sesion{
    usuario:user
    id:number
}
const sesiones:sesion[] = new Array
let index:number = 0
@Injectable()
export class AuthService {
    

    constructor(){    }

    open(sesion:user){
        const list = readList('Modules/auth/usuarios');
        for(const i in list){
            const usuario = list[i];
            if(usuario.usuario===sesion.usuario&&usuario.psw===sesion.psw){
                sesiones.push({
                    usuario:sesion,
                    id:index++
                });
                console.log(sesiones)
                return 'Bienvenido'
            }
        }
        return 'Usuario o contraseña incorrectos'
    }

    isActive(user:string){
        console.log(sesiones)
        for(const i in sesiones){
            const sesion = sesiones[i];
            if(sesion.usuario.usuario === user)return true;
        }
        return false
    }
}
