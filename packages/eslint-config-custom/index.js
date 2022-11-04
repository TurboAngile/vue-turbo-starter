// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    // 'import/order': [
    //   'error',
    //   {
    //     'newlines-between': 'always',
    //     pathGroupsExcludedImportTypes: ['vue'],
    //     groups: [
    //       'builtin',
    //       'external',
    //       'internal',
    //       'parent',
    //       'sibling',
    //       'index',
    //     ],
    //     pathGroups: [
    //       {
    //         pattern: '@ui/**',
    //         group: 'internal',
    //         position: 'before',
    //       },
    //     ],
    //   },
    // ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/no-multiple-template-root': 'off',
    'vue/require-default-prop': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'brace-style': 'off',
    'no-lonely-if': 'off',
    'vue/no-v-html': 'off',
    'vue/no-v-for-template-key': 'off',
    'symbol-description': 'off',
    'import/namespace': 'off',
    'no-console': 'off',
    'import/no-duplicates': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    'import/first': 'off',
  },
  ignorePatterns: ['**/*.json', 'dist', 'node_modules', '.turbo', '.nuxt', 'public', '.output', '!.storybook'],
})
