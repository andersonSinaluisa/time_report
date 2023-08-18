/* eslint-disable prettier/prettier */
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from '../../../shared/services/user/user.service';	
import { UserResponseDto } from '../../dto/user.dto';
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

    

}
