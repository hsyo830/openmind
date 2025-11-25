import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],

    languageOptions: {
      globals: globals.browser
    },

    plugins: {
      react: pluginReact,
      prettier: pluginPrettier
    },

    extends: ['eslint:recommended', 'plugin:react/recommended', prettier],

    rules: {
      'prettier/prettier': 'error'
    }
  }
]);
