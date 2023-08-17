import { PrismaClient } from '@prisma/client';
import { encrypt } from '../src/shared/utils/encrypt';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: await encrypt('admin'),
      role: 'ADMIN',
      address: 'admin address',
      zip_code: '12345',
      avatar: 'https://i.imgur.com/2uVJj9O.png',
      created_at: new Date(),
      updated_at: new Date(),
      city: 'admin city',
      last_name: 'admin last name',
      first_name: 'admin name',
      phone: '123456789',
    },
  });
  console.log({ user });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
