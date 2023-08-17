import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) (OK)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('access_token');
      });
  });

  it('/auth/login (POST) (Unauthorized)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test@test.com',
        password: 'test',
      })
      .expect(401)
      .expect((res) => {
        expect(res.body).toHaveProperty('message');
      });
  });

  it('auth/login (POST) (Bad Request)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: '',
        password: 'test',
      })
      .expect(400)
      .expect((res) => {
        console.log(res.body);
        expect(res.body).toHaveProperty('message');
      });
  });
});
