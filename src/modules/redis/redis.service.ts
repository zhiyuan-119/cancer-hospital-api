import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
    @Inject('REDIS_CLIENT') // 注入令牌
    private redisClient: RedisClientType; // 注入类型

    //
    async get(key: string) {
        const redisKey = await this.redisClient.get(key);
        return redisKey;
    }

    // 支持指定过期时间
    async set(key: string, value: string | number, ttl?: number) {
        await this.redisClient.set(key, value);

        if (ttl) {
            await this.redisClient.expire(key, ttl);
        }
    }
}
