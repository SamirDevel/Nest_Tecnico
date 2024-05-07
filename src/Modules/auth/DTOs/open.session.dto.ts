import { IsString } from "class-validator";

export default class OpenSessionDTO{
    @IsString()
    usuario:string

    @IsString()
    psw:string
}