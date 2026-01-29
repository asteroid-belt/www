import jsPlugin from '@eslint/js'
import prettierPlugin from 'eslint-config-prettier'
import tsPlugin from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import astroPlugin from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'

export default [
  prettierPlugin,
  jsPlugin.configs.recommended,
  reactPlugin.configs.flat.recommended,
  ...astroPlugin.configs.recommended,
  ...tsPlugin.configs.recommended,
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'pnpm-lock.yaml'],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
    },
  },
  {
    settings: { react: { version: 'detect' } },
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['jsx', 'class'],
        },
      ],
    },
  },
]
