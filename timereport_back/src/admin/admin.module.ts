import { Module } from '@nestjs/common';
import { RoleService } from './services/role/role.service';
import { RoleController } from './controllers/role/role.controller';
import { PermissionsController } from './controllers/permissions/permissions.controller';

@Module({
  providers: [RoleService],
  controllers: [RoleController, PermissionsController]
})
export class AdminModule {}
