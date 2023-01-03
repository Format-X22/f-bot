import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { StorageModule } from './storage/storage.module';
import { GameModule } from './game/game.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (cs: ConfigService) => {
                return {
                    dialect: 'postgres',
                    host: cs.get('F_DB_HOST'),
                    port: cs.get('F_DB_PORT'),
                    username: cs.get('F_DB_USERNAME'),
                    password: cs.get('F_DB_PASSWORD'),
                    database: cs.get('F_DB_DATABASE_NAME'),
                    models: [],
                    autoLoadModels: true,
                    synchronize: true,
                    logging: false,
                    idleTimeoutMillis: 0,
                    connectionTimeoutMillis: 0,
                };
            },
        }),
        StorageModule,
        TelegramModule,
        GameModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
