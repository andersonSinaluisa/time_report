import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class AuditService {
    
    constructor(private prisma:DbService) {}


    
}
