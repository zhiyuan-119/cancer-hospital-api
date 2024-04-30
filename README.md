## nest 初始化配置

### 基础配置

- 使用swc替代默认的tsc作为编译器来开发和编译
- 在nest-cli.json里配置generateOptions为false，生成代码的时候不会生成测试代码

### 依赖安装

- class-validator 用于类的验证，主要结合DTO对请求数据进行验证
- class-transformer 序列化响应数据，结合class-validator进行序列化
- @nestjs/swagger nestjs的openapi支持库
- @nestjs/config 配置抽离，方便维护
- typeorm 一个TS编写的node.js ORM
- @nestjs/typeorm Nestjs的TypeOrm整合模块
- mysql2 Node的Mysql操作库
- dayjs 日期函数库
- @sqltools/formatter 复制修改typeorm的迁移命领依赖库
- lodash 一个通用的JS函数工具库


- sanitize-html 过滤html标签,防注入攻击
- deepmerge 用于深度合并对象的一个库

### 功能模块

- 全局启用数据验证 ValidationPipe
- 全局启用修改响应内容拦截器 useGlobalInterceptors
- 全局启用异常响应格式拦截器 CustomExceptionFilter
- 全局启用接口访问记录 InvokeRecordInterceptor
- 配置typeorm、mysql2，实现数据库连接
- 封装redis模块，实现redis连接
- 封装email模块，实现发送邮箱验证码的功能
- 使用jwt进行登录、接口鉴权 
登录鉴权 @RequireLogin()
接口鉴权 @RequirePermission('ddd')
- 通过 swagger 生成接口文档
- 使用multer实现文件上传及保存功能
- 默认用户模块
- 数据迁移功能及命令

### 项目目录

```bash
├── src
│   ├── modules                    # 模块目录
│   │   ├── email                  # 邮箱模块
│   │   ├── redis                  # redis模块
│   │   └── user                   # 用户模块
│   ├── app.module.ts              # 入口模块
│   └── main.ts                    # 入口文件
├── test                           # 测试目录
│   ├── app.e2e-spec.ts            # e2e测试
│   └── jest-e2e.json              # e2e测试
├── typings                        # ts类型目录
│   └── global.d.ts                # 常用的全局类型           
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── nest-cli.json
├── package.json
├── pnpm-lock.yaml
├── tsconfig.build.json
└── tsconfig.json
```













