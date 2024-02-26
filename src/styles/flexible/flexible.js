!(function () {
  const blocks = 100;

  // px 转 rem
  // 因为设定 1rem = 100px，即 0.01rem = 1px
  function px2rem(px) {
    return `${px / blocks}rem`;
  }

  window.$px2rem = px2rem;
})();
