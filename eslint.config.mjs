// Flat ESLint config. `max-lines` is the guard that keeps the god-file problem
// from coming back once the oversized files are split.
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', 'build/**', '.next/**', 'node_modules/**', 'coverage/**'],
  },
  {
    rules: {
      'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'smart'],
    },
  },
];
