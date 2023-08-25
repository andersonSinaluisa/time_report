import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { DbService } from './services/db/db.service';
import { AuditService } from './services/audit/audit.service';

@Module({
  providers: [UserService, DbService, AuditService],
  exports: [UserService, DbService],
})
export class SharedModule {}
