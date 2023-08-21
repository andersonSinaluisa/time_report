import { faker } from '@faker-js/faker';
import { User } from '@prisma/client';
import { createFactory } from 'prisma-factory';
import { UserRequest } from 'src/admin/dto/user.dto';

export const UserFactory = ()=> ({
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    avatar: faker.image.avatar(),
    city: faker.location.city(),
    country: faker.location.country(),
    first_name: faker.person.firstName(),
    identification: faker.helpers.fake("(###) ###-####"),
    last_name: faker.person.lastName(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    state: faker.location.state(),
    status: true,
    zip_code: faker.location.zipCode(),

} as UserRequest);

