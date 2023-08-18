import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { RoleService } from '../../../shared/services/role/role.service';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../shared/services/user/user.service';
import { jwtConstants } from '../../../shared/utils/constants';
import { JwtModule } from '@nestjs/jwt';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [RoleService, UserService],
      imports: [
        SharedModule,
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('Get All Users', async () => {
    const res = await controller.getAll();
    expect(res).toBeDefined();
    expect(res.length).toBeGreaterThan(0);
  });
});
