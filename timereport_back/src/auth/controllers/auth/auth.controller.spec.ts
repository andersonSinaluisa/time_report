import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('auth/login (OK)', async () => {
    controller
      .signIn({
        username: 'test',
        password: 'test',
      })
      .then((res) => {
        expect(res.access_token).toBeDefined();
      });
  });
});
