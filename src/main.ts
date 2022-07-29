import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672/demo-vhost'],
      queue: 'demo-queue',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1,
      durable: false,
    },
  });

  await app.listen();
}
bootstrap();
