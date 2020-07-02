module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        indent: ['error', 4],
        'arrow-body-style': ['error', 'always'],
        'no-param-reassign': 0,
    },
};
