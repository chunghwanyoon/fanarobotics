import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
/* For Nestjs Swagger Documentation */
import { SwaggerModule } from '@nestjs/swagger';
import { RoboticsAPIBase } from '@api/base';
/* For TYPEORM Transactions */
import 'reflect-metadata';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';

async function bootstrap() {
  const SWAGGER_API_PREFIX = '/api/v1';
  const HOST_PORT = process.env.HOST_PORT ? process.env.HOST_PORT : 7000;
  const NODE_ENV = process.env.NODE_ENV === 'production' ? true : false;

  /* Initialize TYPEORM cls-hooked */
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);

  /* For CORS */
  app.enableCors();
  /* For API global prefix */
  app.setGlobalPrefix(SWAGGER_API_PREFIX);

  /* For mount Swagger */
  const swaggerOptions = new RoboticsAPIBase().initialize();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(SWAGGER_API_PREFIX + '/docs', app, document, {
    swaggerOptions: { defaultModelExpandDepth: -1 },
  });

  /* For global pipeline API request validations */
  /* transform: true let JSON payload to Javascript object */
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: NODE_ENV, transform: true }));

  /* For API server port */

  await app.listen(HOST_PORT);
}

bootstrap();
