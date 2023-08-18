import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from '../../../shared/shared.module';
import { jwtConstants } from '../../../shared/utils/constants';
import { AuthService } from '../../services/auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('auth/login (OK)', async () => {
    controller
      .signIn({
        email: 'admin@admin.com',
        password: 'admin',
      })
      .then((res) => {
        expect(res).toBeDefined();
        expect(res).not.toBeNull();
        expect(res.access_token).toBeDefined();
        expect(res.access_token).not.toBeNull();
      });
  });
});
