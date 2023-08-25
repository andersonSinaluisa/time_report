/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus ,Post, Put, UseGuards} from '@nestjs/common';
import { UserService } from '../../../shared/services/user/user.service';	
import { UserRequest, UserResponseDto } from '../../dto/user.dto';
import { UserAdapter } from '../../adapters/user.adapter';
import { ValidationPipe } from '../../../shared/utils/validation.pipe';
import { AuthGuard } from '../../../auth/services/auth.guard';
@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get("/")
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async getAll(): Promise<UserResponseDto[]> {
        const data = await this.userService.GetAll();
        return UserAdapter.fromUserManyToUserResponseMany(data);
    }

    @Post("/")
    @UseGuards(AuthGuard)
    async create(@Body(new ValidationPipe()) createDto:UserRequest): Promise<UserResponseDto> {
        const data = await this.userService.Create(createDto);
        return UserAdapter.fromUserToUserResponse(data);
    }

     
    @Delete("/:id")
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async delete(@Body(new ValidationPipe()) id:number): Promise<boolean> {
        return await this.userService.Delete(id);
    }

    @Put("/update/:id")
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async update(@Body(new ValidationPipe()) updateDto:UserRequest,@Body(new ValidationPipe()) id:number): Promise<UserResponseDto> {
        const data = await this.userService.Update(updateDto,id);
        return UserAdapter.fromUserToUserResponse(data);
    }

    

}
