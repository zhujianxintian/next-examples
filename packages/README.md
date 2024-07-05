


# 2024-07-04
## next-15
### 使用 Next.js 15 RC 预览版

`npx create-next-app@latest` 安装 Next.js 14, 选完生成的配置之后, 开始安装依赖的时候, `Ctrl + C` 打断安装 (因为安装默认使用的是 npm), 进入创建的项目目录中, 然后运行 `pnpm up next@rc react@rc react-dom@rc eslint-config-next@rc` 即可安装 15 RC 预览版

## next-15-with-tan-stack-query
### 使用 Next.js 15 RC 预览版

与 next-15 的步骤一致

### 然后安装 TanStack Query

TanStack Query 实际是 React Query, 为了可以不专注于 React, 而是可以适用于各大框架, 所以改名为 TanStack Query

这个库可以帮助 Next.js 实现服务端的全局状态管理

`pnpm i @tanstack/react-query`

### 安装 Eslint Plugin Query

可以帮助你减少使用 React Query 时的错误

`pnpm i -D @tanstack/eslint-plugin-query`

## next-15-with-next-auth-5
### 使用 Next.js 15 RC 预览版

与 next-15 的步骤一致

### 然后安装 Next Auth 5

