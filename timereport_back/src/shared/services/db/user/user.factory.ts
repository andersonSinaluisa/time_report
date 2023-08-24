import { faker } from '@faker-js/faker';
import { User } from '@prisma/client';
import { UserRequest } from 'src/admin/dto/user.dto';
export const factoryUser = () => {

  // This example uses faker to generate random data
  return {
        
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        address: faker.location.street(),
        avatar: faker.image.avatar(),
        city: faker.location.city(),
        country: faker.location.country(),
        email: faker.internet.email(),
        identification: faker.helpers.fromRegExp("/[0-9]/i"),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        zip_code: faker.location.zipCode()
  } as UserRequest
};