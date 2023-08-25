import { Injectable } from '@nestjs/common';
import { DbService } from '../../../shared/services/db/db.service';
import { ClientRequestDto } from '../../dto/client.dto';
import { STATUS } from 'src/shared/utils/status';

@Injectable()
export class ClientService {
    constructor(private prisma:DbService) {}

    async getClients() {
        return await this.prisma.client.findMany({
            where: { status: STATUS.Active }, 
        });
    }

    async getClient(id: number) {
        return await this.prisma.client.findUnique({
            where: { id: id },
        });
    }

    async createClient(data: ClientRequestDto,userId:number) {
        return await this.prisma.client.create({
            data: {
                name: data.name,
                description: data.description,
                identification: data.identification,
                user_id: userId,
                created_at: new Date(),
            },
        });
    }


    async DeleteClient(id: number) {
        return await this.prisma.client.update({
            where: { id: id },
            data: {
                deleted_at: new Date(),
                status: STATUS.Delete,
            },
        });
    }


    async UpdateClient(id: number, data: ClientRequestDto) {
        return await this.prisma.client.update({
            where: { id: id },
            data: {
                name: data.name,
                description: data.description,
                identification: data.identification,
                updated_at: new Date(),
            },
        });
    }

    
}
