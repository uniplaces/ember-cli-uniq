module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  rules: {
    'camelcase': [0, { 'properties': 'never' }],
    'ember-suave/no-const-outside-module-scope': 'off'
  }
  env: {
    browser: true
  },
  overrides: [
    // node files
    {
      files: [
        'index.js',
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'app/**',
        'addon/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {})
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dumm y/**/*.js'],
      env: {
        embertest: true
      }
    }
  ]
};
