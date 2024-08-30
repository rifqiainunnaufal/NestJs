import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Controller('User')
export class UserController {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}


    @Get('/')
    ping(){
        return "hello";
    }

    @Post('/signup')
    async signup( @Body() body: CreateUserDto){
        const user = new User();
        user.nama = body.nama;
        user.email = body.email;
        user.password = body.password;


        const savedUser = await this.userRepository.save(user);
        return savedUser;
    }

    @Post('/Signout')
    signout(){}

    @Post('/Login')
    login(){}

}
