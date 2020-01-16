/**
 * 高阶函数，与后面的promise有关
 * before这就有点像 aop
 * 注：此函数需要出现在挂载函数之前声明书写
 */
Function.prototype.before = function(beforeFn) {
  /**
   * 箭头函数没有this，arguments。
   * this此时的指向为上级作用域查找，也就是调用方；
   */
  return (...args) => {
    beforeFn()
    // 展开运算符
    this(...args)
  }
}

const say = (...args) => {
  // 剩余运算符，与前面的展开运算符形式一致，但是意义不一样
  console.log("hello", args)
}

const newSay = say.before(() => {
  console.log("good year")
})

newSay(1, 2, 3)
