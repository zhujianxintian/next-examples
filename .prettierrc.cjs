// @ts-check

/**
 * @type {import('prettier').Config}
 */
const config = {
    printWidth: 160,
    // 尽可能添加逗号
    trailingComma: 'all',
    // tab 的长度
    tabWidth: 4,
    // 自动添加分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // 结尾换行
    endOfLine: 'lf',
    // 重写部分文件的规则
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
    plugins: [
        // 此插件使用的 Prettier API 每次只能由一个插件使用，因此与以相同方式实现的其他 Prettier 插件不兼容
        // 所以如果需要安装多个插件, 则这个插件必须放在最后加载
        'prettier-plugin-tailwindcss',
    ],
    tailwindFunctions: ['classnames'],
};

module.exports = config;
