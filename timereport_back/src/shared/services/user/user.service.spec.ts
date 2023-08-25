import {Test, TestingModule} from '@nestjs/testing';
import {UserService} from './user.service';
import {DbService} from '../db/db.service';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from '../../utils/constants';
import {factoryUser} from '../db/user/user.factory';
import {faker} from '@faker-js/faker';

describe('UserService', () => {
	let service: UserService;
	const user = factoryUser();

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UserService, DbService],
			imports: [
				JwtModule.register({
					global: true,
					secret: jwtConstants.secret,
					signOptions: {expiresIn: '60s'},
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
		const userInfo = {
			email: user.email,
			...factoryUser(),
		};
		service
			.Create(userInfo)
			.then((res) => {
				expect(res).toBeNull();
			})
			.catch((err) => {
				expect(err).toBeDefined();
				expect(err).not.toBeNull();
				expect(err.message).toBe('User already exists');
			});
	});

	it('Delete() Success', async () => {
		const user = await service.Create(factoryUser());
		expect(user).not.toBeNull();
		await service.Delete(user.id).then((res) => {
			expect(res).toBeDefined();
			expect(res).not.toBeFalsy();
		});
	});

	it('Delete() Fail', async () => {
		await service
			.Delete(
				faker.helpers.rangeToNumber({
					max: 20,
					min: 15,
				})
			)
			.then((res) => {
				expect(res).toBeNull();
			})
			.catch((e) => {
				expect(e).not.toBeNull();
			});
	});
});
