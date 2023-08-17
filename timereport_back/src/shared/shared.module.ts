import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { DbService } from './services/db/db.service';

@Module({
  providers: [UserService, DbService],
  exports: [UserService, DbService],
})
export class SharedModule {}
