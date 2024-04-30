import { NestFactory } from '@nestjs/core';
// 配置抽离
import { ConfigService } from '@nestjs/config';
// 全局启用
import { ValidationPipe } from '@nestjs/common';
import { FormatResponseInterceptor } from './global-settings/format-response.interceptor';
import { InvokeRecordInterceptor } from './global-settings/invoke-record.interceptor';
import { CustomExceptionFilter } from './global-settings/custom-exception.filter';
// api接口文档
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// 文件保存
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 全局启用数据验证
  app.useGlobalPipes(new ValidationPipe());
  // 全局启用修改响应内容
  app.useGlobalInterceptors(new FormatResponseInterceptor());
  // 全局启用接口访问记录
  app.useGlobalInterceptors(new InvokeRecordInterceptor());
  // 全局启用异常响应格式
  app.useGlobalFilters(new CustomExceptionFilter());
  // 支持跨域
  app.enableCors();
  // 设置api前缀
  app.setGlobalPrefix('api');

  // 生成api接口文档
  const config = new DocumentBuilder()
    .setTitle('肿瘤医院项目')
    .setDescription('api 接口文档')
    .setVersion('1.0')
    .setBasePath('/api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  // 设置静态文件目录
  app.useStaticAssets('uploads', {
    prefix: '/uploads',
  });
  
  // 启动端口
  const configService = app.get(ConfigService);
  await app.listen(configService.get('nest_server_port'));
}
bootstrap();
