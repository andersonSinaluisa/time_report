import { Module } from '@nestjs/common';
import { RoleController } from './controllers/role/role.controller';
import { PermissionsController } from './controllers/permissions/permissions.controller';
import { UserController } from './controllers/user/user.controller';
import { UserService } from '../shared/services/user/user.service';
import { RoleService } from '../shared/services/role/role.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  providers: [RoleService, UserService],
  imports: [SharedModule],
  controllers: [RoleController, PermissionsController, UserController],
})
export class AdminModule {}
