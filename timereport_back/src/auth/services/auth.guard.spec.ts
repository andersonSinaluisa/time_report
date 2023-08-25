import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from './auth.guard';
import { SharedModule } from '../../shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../shared/utils/constants';

describe('AuthGuard', () => {
  let service: AuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthGuard],
      imports: [
        SharedModule,
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      exports: [AuthGuard],
    }).compile();

    service = module.get<AuthGuard>(AuthGuard);
  });
});
