/* eslint-disable prettier/prettier */
import { Injectable  } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { User } from '@prisma/client';
import { UserRequest } from '../../../admin/dto/user.dto';

@Injectable()
export class UserService {

    constructor(private prisma: DbService
    ) { }

    async findOne(email: string): Promise<User> {
        try{
            return await this.prisma.user.findUnique({
                where: {
                    email: email
                }
            }) 
        }catch(e){
            throw new Error("User not found");
        }
        
    }

    async Get(id: number): Promise<User> {
        try{
            return await this.prisma.user.findUnique({
                where: {
                    id: id
                }
            })
        }catch(e){
            throw new Error("User not found");
        }
    }

    async Create(user: UserRequest): Promise<User> {

        //validate if user already exists
        const userExists = await this.prisma.user.findUnique({
            where: {
                email: user.email
            }
        })
        if (userExists) {
            throw new Error("User already exists");
        }

        return await this.prisma.user.create({
            data: user
        })
    }

    async GetAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async Delete(id:number):Promise<boolean> {

        try{

            this.prisma.user.delete({
                where:{
                    id: id
                }
            });
            return true;
        }catch(e){
            throw new Error("User Not Found")
        }
    }


    async Update(userData:UserRequest,id:number):Promise<User>{
        return await this.prisma.user.update({
            where:{
                id:id
            },
            data:{
                ...userData
            }
        })
    }
}
