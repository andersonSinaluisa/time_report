/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { RoleRequestDto, RoleResponseDto } from 'src/admin/dto/role.dto';
import { STATUS } from 'src/shared/utils/status';
import { PermissionService } from '../permission/permission.service';

@Injectable()
export class RoleService {

    constructor(private prisma: DbService, private permission:PermissionService) { }

    async createRole(role:RoleRequestDto): Promise<RoleResponseDto> {
        
        const res = await this.prisma.role.create({
            data:{
                name:role.name,
                description:role.description,
                status:STATUS.Active,
            }
        })

        if (!res) {
            throw new Error("Role not created");
        }

        this.permission.asignPermissionToRole(res.id,role.permissions);
        return res;
        
    }

}
