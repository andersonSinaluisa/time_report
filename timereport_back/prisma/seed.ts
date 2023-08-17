import { PrismaClient } from '@prisma/client';
import { encrypt } from '../src/shared/utils/encrypt';
import { ACTIONS, STATUS } from '../src/shared/utils/status';

const prisma = new PrismaClient();

async function main() {
  const validate = await prisma.user.count();
  if (validate === 0) {
    await prisma.user.create({
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
        status: true,
        phone: '123456789',
      },
    });
  }

  const tables: {
    TABLE_NAME: string,
  }[] =
    await prisma.$queryRaw`SELECT TABLE_NAME FROM information_schema.tables Where TABLE_SCHEMA='timereportdb'`;

  const p = [];

  tables.forEach((element) => {
    for (const value of Object.values(ACTIONS)) {
      p.push({
        code: value.toString(),
        description: element.TABLE_NAME,
        status: STATUS.Active,
        created_at: new Date(),
      });
    }
  });

  const permissions = await prisma.permissions.createMany({
    data: p,
  });
  console.log({ tables, permissions });
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
