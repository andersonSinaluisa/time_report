/* eslint-disable prettier/prettier */
import { Injectable  } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

    constructor(private prisma: DbService, private jwtService: JwtService
    ) { }

    async findOne(email: string): Promise<any> {
        return await this.prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }

    async Create(user: any): Promise<any> {
        return await this.prisma.user.create({
            data: user
        })
    }

}
