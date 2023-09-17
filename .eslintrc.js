module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/button-has-type': 'error',
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
    'react/no-array-index-key': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/jsx-uses-react': 'error',
    'react/display-name': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/jsx-no-bind': 'error',
  },
}
