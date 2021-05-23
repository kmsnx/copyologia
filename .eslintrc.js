module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
  ],
  plugins: [
    'react',
    'xss',
    'html',
    'sonarjs',
    'unicorn',
    'security',
    'markdown',
    'no-secrets',
    'eslint-comments',
    'simple-import-sort',
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:security/recommended',
    'plugin:markdown/recommended',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/prefer-default-export': 'off',
    'no-secrets/no-secrets': [
      1,
      { additionalRegexes: { 'Basic Auth': 'Authorization: Basic [A-Za-z0-9+/=]*' } },
    ],
    'xss/no-mixed-html': 2,
    'xss/no-location-href-assign': 2,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
  },
};
