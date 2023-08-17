import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '../../services/auth.service';
import { LoginRequestDto, LoginResponseDto } from '../../dto/auth.dto';
import { ValidationPipe } from '../../../shared/utils/validation.pipe';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body(new ValidationPipe()) signInDto:LoginRequestDto) : Promise<LoginResponseDto>{
      return this.authService.signIn(signInDto.email, signInDto.password);
    }
}
