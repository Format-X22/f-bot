import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class StorageService {
    constructor(@InjectModel(User) userModel: typeof User) {}
}
