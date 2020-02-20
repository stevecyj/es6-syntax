module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'no-unexpected-multiline': [0, 'always'] //行尾缺少分號可能導致一些意外情況
    }
}
