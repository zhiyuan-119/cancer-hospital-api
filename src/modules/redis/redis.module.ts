import { Global, Module } from '@nestjs/common';

import { ConfigService } from '@nestjs/config'; // 引用配置模块
import { createClient } from 'redis';

import { RedisService } from './redis.service';

@Global() // 声明为全局模块
@Module({
    providers: [
        RedisService,
        {
            provide: 'REDIS_CLIENT', // 令牌
            async useFactory(configService: ConfigService) {
                const client = createClient({
                    socket: {
                        host: configService.get('redis_server_host'),
                        port: configService.get('redis_server_port'),
                    },
                    database: configService.get('redis_server_db'),
                });
                await client.connect();
                return client;
            },
            inject: [ConfigService],
        },
    ],
    exports: [RedisService],
})
export class RedisModule {}
