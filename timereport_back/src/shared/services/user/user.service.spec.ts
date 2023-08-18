import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { DbService } from '../db/db.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../utils/constants';

describe('UserService', () => {
  let service: UserService;

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
    service
      .Create({
        email: 'test@admin.com',
        password: 'test',
        first_name: 'test',
        role: 'admin',
        address: 'test',
        avatar: 'test',
        last_name: 'test',
        city: 'test',
        country: 'test',
        identification: 'test',
        phone: 'test',
        state: 'test',
        status: true,
        zip_code: 'test',
      })
      .then((res) => {
        expect(res).toBeDefined();
        expect(res).not.toBeNull();
        expect(res.email).toBe('test@admin.com');
        expect(res.password).toBeDefined();
        expect(res.password).not.toBeNull();
      });
  });

  it('Create() Fail', () => {
    service
      .Create({
        email: 'test@admin.com',
        password: 'test',
        first_name: 'test',
        role: 'admin',
        address: 'test',
        avatar: 'test',
        last_name: 'test',
        city: 'test',
        country: 'test',
        identification: 'test',
        phone: 'test',
        state: 'test',
        status: true,
        zip_code: 'test',
      })
      .then((res) => {
        expect(res).toBeNull();
      })
      .catch((err) => {
        expect(err).rejects.toThrowError('User already exists');
      });
  });
});
