import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://john123:123456@localhost:5672/demo-vhost'],
        queue: 'demo-queue',
      },
    },
  );

  await app.listen();
}
bootstrap();
