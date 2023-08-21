import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { DbService } from '../db/db.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../utils/constants';
import { UserFactory } from './user.factory';
import { faker } from '@faker-js/faker/locale/af_ZA';

describe('UserService', () => {
  let service: UserService;
  const user = UserFactory();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, DbService],
      imports: [
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('FindOne() Success', () => {
    service.findOne('admin@admin.com').then((res) => {
      expect(res).toBeDefined();
      expect(res).not.toBeNull();
      expect(res.email).toBe('admin@admin.com');
      expect(res.password).toBeDefined();
      expect(res.password).not.toBeNull();
    });
  });

  it('FindOne() Fail', () => {
    service.findOne('random@email.com').then((res) => {
      expect(res).toBeNull();
    });
  });

  it('Create() Success', () => {
    service.Create(user).then((res) => {
      expect(res).toBeDefined();
      expect(res).not.toBeNull();
      expect(res.email).toBe(user.email);
      expect(res.password).toBeDefined();
      expect(res.password).not.toBeNull();
    });
  });

  it('Create() Fail', () => {
    service
      .Create(user)
      .then((res) => {
        expect(res).toBeNull();
      })
      .catch((err) => {
        expect(err).toBeDefined();
        expect(err).not.toBeNull();
        expect(err.message).toBe('User already exists');
      });
  });

  it('GetAll() Success', () => {
    service.GetAll().then((res) => {
      expect(res).toBeDefined();
      expect(res).not.toBeNull();
      expect(res.length).toBeGreaterThan(0);
    });
  });

  it('GetAll() Fail', () => {
    service.GetAll().then((res) => {
      expect(res).toBeDefined();
      expect(res).not.toBeNull();
      expect(res.length).toBeGreaterThan(0);
    });
  });

  it('Update() Success', async () => {
    const _user = await service.Create(UserFactory());
    const data = {
      ..._user,
      first_name: 'test2 ',
    };
    service.Update(data, _user.id).then((res) => {
      expect(res).toBeDefined();
      expect(res).not.toBeNull();
      expect(res.first_name).toBe('test2');
    });
  });

  it('Update() Fail', () => {
    service
      .Update(
        UserFactory(),
        faker.helpers.rangeToNumber({
          min: 100,
          max: 1000,
        }),
      )
      .then((res) => {
        expect(res).toBeNull();
      })
      .catch((err) => {
        expect(err).toBeDefined();
        expect(err).not.toBeNull();
        expect(err.message).toBe('User not found');
      });
  });

  it('Delete() Success', async () => {
    const user_ = await service.Create(UserFactory());
    await service.Delete(user_.id).then((res) => {
      expect(res).toBeDefined();
      expect(res).not.toBeNull();
    });
  });

  it('Delete() Fail', () => {
    service
      .Delete(
        faker.helpers.rangeToNumber({
          min: 100,
          max: 1000,
        }),
      )
      .then((res) => {
        expect(res).toBeNull();
      })
      .catch((err) => {
        expect(err).toBeDefined();
        expect(err).not.toBeNull();
        expect(err.message).toBe('User not found');
      });
  });
});
