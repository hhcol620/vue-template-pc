module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
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
