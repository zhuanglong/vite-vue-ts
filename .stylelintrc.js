module.exports = {
  root: true,
  // 继承规则集
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  overrides: [{
    files: ['**/*.scss'],
    customSyntax: 'postcss-scss',
  }, {
    files: ['**/*.vue'],
    customSyntax: 'postcss-html',
  }],
  rules: {
    // https://github.com/ream88/stylelint-config-idiomatic-order
    'font-family-no-missing-generic-family-keyword': null,
    'import-notation': null,
    'comment-empty-line-before': null,
    'function-no-unknown': null, // 禁用未知函数
    'no-invalid-position-at-import-rule': null,
    'declaration-block-no-redundant-longhand-properties': null, // 不允许手写属性,可以组合成一个简写属性
    'no-descending-specificity': null, // 禁止低优先级的选择器出现在高优先级的选择器之后
    'color-function-notation': null,
    'alpha-value-notation': null,
    'property-no-vendor-prefix': null, // 禁止前缀的属性
    'value-no-vendor-prefix': null, // 禁止前缀的属性
    'selector-class-pattern': null,
    'no-empty-source': null,
    'no-duplicate-selectors': null, // 禁止样式表中的重复选择器
    'declaration-empty-line-before': null, // 声明前要求或禁止空行
    'at-rule-empty-line-before': null, // 规则前要求或禁止使用空行
    'at-rule-no-unknown': null, // 禁止使用未知规则
    'selector-pseudo-class-no-unknown': null, // 禁止未知的伪类选择器
    'property-no-unknown': null, // 禁止未知属性
  },
};
