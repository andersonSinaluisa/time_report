/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpCode, HttpStatus ,Post} from '@nestjs/common';
import { UserService } from '../../../shared/services/user/user.service';	
import { UserRequest, UserResponseDto } from '../../dto/user.dto';
import { UserAdapter } from '../../adapters/user.adapter';
import { ValidationPipe } from '../../../shared/utils/validation.pipe';
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
    async create(@Body(new ValidationPipe()) createDto:UserRequest): Promise<UserResponseDto> {
        const data = await this.userService.Create(createDto);
        return UserAdapter.fromUserToUserResponse(data);
    }

     

    

}
