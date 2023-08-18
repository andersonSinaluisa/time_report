import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { SharedModule } from '../../shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../shared/utils/constants';

describe('ServicesService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
      imports: [
        SharedModule,
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      exports: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
