import * as path from 'path';
import { Module } from '@nestjs/common';
// 配置抽离
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './modules/redis/redis.module';
// jwt鉴权
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PermissionGuard } from './modules/user/guards/permission.guard'
// TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';

// 功能模块
import { DrugResistanceModule } from './modules/drug-resistance/drug-resistance.module';

// 全局接口
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: path.resolve(__dirname, 'global-settings/.env'),
    }),
    JwtModule.registerAsync({
        global: true,
        useFactory(configService: ConfigService) {
            return {
                secret: configService.get('jwt_secret'),
                signOptions: {
                    expiresIn: configService.get('jwt_access_token_expires_time'), // 默认 30 分钟
                },
            };
        },
        inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
        useFactory(configService: ConfigService) {
            return {
                type: 'mysql',
                host: configService.get('mysql_server_host'),
                port: configService.get('mysql_server_port'),
                username: configService.get('mysql_server_username'),
                password: configService.get('mysql_server_password'),
                database: configService.get('mysql_server_database'),
                // host: 'localhost',
                // port: '3306',
                // username: 'root',
                // password: 'xgw',
                // database: 'cancer_hospital',
                synchronize: true,
                logging: true,
                entities: ['dist/**/*.entity{.ts,.js}'],
                poolSize: 10,
                connectorPackage: 'mysql2',
                extra: {
                    authPlugin: 'sha256_password',
                },
            };
        },
        inject: [ConfigService],
    }),
    RedisModule,
    DrugResistanceModule,
  ],
  controllers: [AppController],
  providers: [
    {
        // 全局启用接口鉴权
        provide: APP_GUARD,
        useClass: PermissionGuard,
    },
    AppService],
})
export class AppModule {}
