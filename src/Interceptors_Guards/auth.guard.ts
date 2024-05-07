import { Injectable, Scope } from "@nestjs/common";
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthService } from "src/modules/auth/auth.service";
@Injectable({scope:Scope.REQUEST})
export class AuthGuard implements CanActivate{
    constructor(
        private serviceAuth:AuthService
    ){}
    canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        const user = request.headers.user;
        const response = context.switchToHttp().getResponse();
        if(request.url==='/auth')return true
        if(user===undefined){
            response.json({mensaje:'No hay usuario para realizar la accion'})
            return false
        }
        else {
            if(this.serviceAuth.isActive(user))
                return true
            else{
                response.json({mensaje:'El usuaro no está registrado'})
                return false
            }
        };
    }
}