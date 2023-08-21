/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../../../shared/services/user/user.service';	
import { UserRequest, UserResponseDto } from '../../dto/user.dto';
import { UserAdapter } from '../../adapters/user.adapter';
@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get("/")
    @HttpCode(HttpStatus.OK)
    async getAll(): Promise<UserResponseDto[]> {
        const data = await this.userService.GetAll();
        return UserAdapter.fromUserManyToUserResponseMany(data);
    }


    @Post("/")
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() user: UserRequest): Promise<UserResponseDto> {
        const data = await this.userService.Create(user);
        return UserAdapter.fromUserToUserResponse(data);
    }
    

    @Put("/:id")
    @HttpCode(HttpStatus.OK)
    async update(@Body() user: UserRequest, @Param('id') id: number): Promise<UserResponseDto> {
        const data = await this.userService.Update(user,id);
        return UserAdapter.fromUserToUserResponse(data);
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    async get(@Param('id') id: number): Promise<UserResponseDto> {
        const data = await this.userService.Get(id);
        return UserAdapter.fromUserToUserResponse(data);
    }


    @Delete("/:id")
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: number): Promise<UserResponseDto> {
        const data = await this.userService.Delete(id);
        return UserAdapter.fromUserToUserResponse(data);
    }
}   

