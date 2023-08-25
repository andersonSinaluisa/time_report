/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class PermissionService {
    constructor(private prisma: DbService) { }

    async asignPermissionToRole(roleId: number, permissions: { id: number }[]): Promise<boolean> {
        try {
            const res = await this.prisma.role.update({
                where: {
                    id: roleId
                },
                data: {
                    permissions: {
                        connect: permissions.map(p => {
                            return {
                                id: p.id
                            }
                        })
                    }
                }
            })
            if (!res) {
                throw new Error("Role not created");
            }
            return true;

        } catch (e) {
            throw new Error("Role not created");
        }
    }
}
