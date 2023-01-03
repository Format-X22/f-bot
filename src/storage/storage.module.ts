import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { User } from './models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [StorageService],
})
export class StorageModule {}
