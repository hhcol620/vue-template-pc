module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    parserOptions: {
        ecmaVersion: 12, // 支持es6语法，但并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）
        sourceType: 'module' // 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['off', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': [
            'warn',
            { vars: 'all', args: 'none', ignoreRestSiblings: false }
        ]
    }
};
