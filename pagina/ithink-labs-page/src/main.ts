import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule) as NestExpressApplication;
  app.use(favicon(path.join(__dirname,'..','public','imagenes','idea.ico')));
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.use(express.static('public'));
  app.enableCors();
  await app.listen(port);
}
bootstrap();
