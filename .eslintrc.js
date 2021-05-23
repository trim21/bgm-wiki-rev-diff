module.exports = {
  extends: [
    'standard',
    'standard-with-typescript',
    // 'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
  ],
  plugins: ['import', 'promise', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts'],
      globals: {
        JQuery: true,
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaVersion: 6,
  },
  env: {
    jquery: true,
    browser: true,
    node: true,
  },
  rules: {
    indent: ['error', 2],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', 'consistent'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/semi': ['error', 'always'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-unused-modules': [
      1,
      {
        unusedExports: true,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          ['index', 'sibling', 'parent'],
          'internal',
          'object',
        ],
      },
    ],
  },
};
