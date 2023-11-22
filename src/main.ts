import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // app.setGlobalPrefix('api/v1');
  // const config = new DocumentBuilder()
  //   .setTitle('Learndispo example')
  //   .setDescription('The Learndispo API description')
  //   .setVersion('1.0')
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api/v1/doc', app, document);

  await app.listen(65000);
}
bootstrap();
