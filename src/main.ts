import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  setTimeout(async () => {
    const app = await NestFactory.createMicroservice(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://john123:123456@localhost:5672/demo-vhost'],
        queue: 'demo-queue',
        // false = manual acknowledgement; true = automatic acknowledgment
        // noAck: false,
        // Get one by one
        // prefetchCount: 1,
        durable: false,
      },
    });
    await app.listen();
  }, 3000);
}
bootstrap();
