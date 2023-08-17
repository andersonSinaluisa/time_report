import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { PermissionService } from './shared/services/permission/permission.service';
import { UserService } from './shared/services/user/user.service';
import { RoleService } from './shared/services/role/role.service';
import { DbService } from './shared/services/db/db.service';
import { SharedModule } from './shared/shared.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './shared/utils/validation.pipe';

@Module({
  imports: [AuthModule, AdminModule, SharedModule],
  controllers: [AppController],
  providers: [
    AppService,
    PermissionService,
    UserService,
    RoleService,
    DbService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
