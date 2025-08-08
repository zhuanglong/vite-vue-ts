import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'public',
      'dist*',
      'vite.config.ts.timestamp-*',
    ],
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'curly': ['error', 'all'],
      'ts/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
      }],
      'ts/no-empty-object-type': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off',
      'no-console': 'off',
      'no-alert': 'off',
      'no-useless-catch': 'off',
    },
  },
  {
    files: [
      'src/**/*.vue',
    ],
    rules: {
      'vue/attribute-hyphenation': 'off',
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/v-on-event-hyphenation': 'off',
    },
  },
)
