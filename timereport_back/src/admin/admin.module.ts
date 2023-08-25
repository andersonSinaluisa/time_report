import { Module } from '@nestjs/common';
import { RoleController } from './controllers/role/role.controller';
import { PermissionsController } from './controllers/permissions/permissions.controller';
import { UserController } from './controllers/user/user.controller';
import { UserService } from '../shared/services/user/user.service';
import { RoleService } from '../shared/services/role/role.service';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from 'src/auth/services/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { ClientService } from './services/client/client.service';
import { MenuService } from './services/menu/menu.service';

@Module({
  providers: [RoleService, UserService, AuthService, ClientService, MenuService],
  imports: [SharedModule, AuthModule],
  controllers: [RoleController, PermissionsController, UserController],
})
export class AdminModule {}
