import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import OpenSessionDTO from './DTOs/open.session.dto';
import { UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(
        private serviceAuth:AuthService
    ){}

    @Post('')
    @UseGuards()
    openSession(@Body() body:OpenSessionDTO){
        return this.serviceAuth.open(body)
    }
}
