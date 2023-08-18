/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../shared/services/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from '../../shared/utils/encrypt';
import { LoginResponseDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) { }

    
    async signIn(username, pass):Promise<LoginResponseDto> {
        const user = await this.userService.findOne(username);
        if (!user) {
            throw new UnauthorizedException();
        }

        const validate = await compare(pass, user?.password);
        if (!validate) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
