export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    // 'stylelint-config-recess-order',
    '@stylistic/stylelint-config',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'property-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-class-pattern': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/no-global-function-names': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null,
    '@stylistic/unit-case': null,
    '@stylistic/max-line-length': null,
    '@stylistic/block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'declaration-property-value-no-unknown': null,
    'no-empty-source': null,
  },
  allowEmptyInput: true,
  ignoreFiles: [
    'node_modules/**/*',
    'dist*/**/*',
  ],
}
