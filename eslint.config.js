// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  ...pluginVue.configs['flat/recommended'],
  // Базовые настройки
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '**/build',
      'out/',
      'coverage/',
      '*.min.js'
    ]
  },

  // JavaScript конфиг
  js.configs.recommended,

  // TypeScript конфиг
  ...ts.configs.recommended,

  // Vue конфиг
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: ts.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      pluginVue
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': 'off'
    }
  },

  // Для JS/TS файлов
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error'
    }
  }
];