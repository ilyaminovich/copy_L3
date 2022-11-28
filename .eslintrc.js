module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 170,
      }],
  },
  globals: {
    browser: 'readonly',
    $: 'readonly',
    $$: 'readonly',
    expect: 'readonly',
    it: 'readonly',
    describe: 'readonly',
  },
};
