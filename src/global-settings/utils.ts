import * as crypto from 'crypto';

import { BadRequestException, ParseIntPipe } from '@nestjs/common';

export function md5(str: string) {
    const hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');
}

// 返回一个 ParseIntPipe 对象，用于验证参数是否为数字
export function generateParseIntPipe(name: string) {
    return new ParseIntPipe({
        exceptionFactory() {
            throw new BadRequestException(`${name} 应该传数字`);
        },
    });
}
