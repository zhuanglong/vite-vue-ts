// https://prettier.io/docs/en/options.html
/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100, // 默认 80
  tabWidth: 2,
  useTabs: false, // 不使用缩进符，而使用空格
  semi: true, // 句末加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  bracketSpacing: true, // 对象数组加空格
  trailingComma: 'all', // 最后一个对象元素加逗号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  vueIndentScriptAndStyle: true,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
};
