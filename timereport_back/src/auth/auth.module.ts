import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth.service';
import { jwtConstants } from '../shared/utils/constants';
import { SharedModule } from '../shared/shared.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    SharedModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
