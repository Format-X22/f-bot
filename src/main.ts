import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    await NestFactory.createApplicationContext(AppModule);
}
bootstrap().catch((error) => {
    throw new Error('FATAL ON START - ' + error);
});
