/* eslint-disable prettier/prettier */
import { Injectable  } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserRequest } from '../../../admin/dto/user.dto';

@Injectable()
export class UserService {

    constructor(private prisma: DbService, private jwtService: JwtService
    ) { }

    async findOne(email: string): Promise<User> {
        return await this.prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }

    async Create(user: UserRequest): Promise<User> {

        //validate if user already exists
        const userExists = await this.findOne(user.email);
        if (userExists) {
            return Promise.reject("User already exists");
        }

        return await this.prisma.user.create({
            data: user
        })
    }

    async GetAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async Update(user: UserRequest,id:number): Promise<User> {
        return await this.prisma.user.update({
            where: {
                id: id
            },
            data: user
        })
    }

    async Delete(id: number): Promise<User> {
        return await this.prisma.user.delete({
            where: {
                id: id
            }
        })
    }


}
