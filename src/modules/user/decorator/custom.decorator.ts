import { SetMetadata, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

interface JwtUserData {
    [key: string]: any;
}

// 登录鉴权装饰器
export const RequireLogin = () => SetMetadata('require-login', true);

// 接口鉴权装饰器
export const RequirePermission = (...permissions: string[]) =>
    SetMetadata('require-permission', permissions);

// 参数装饰器  取 user 信息传入 handler 的
export const UserInfo = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    if (!request.user) {
        return null;
    }

    // 使用类型断言
    const userData = request.user as JwtUserData;

    return data ? userData[data] : userData;
});
