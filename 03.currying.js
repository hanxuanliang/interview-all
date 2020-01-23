/**
 * 科里化，将一个大函数拆分成几个小函数
 * 
 * 判断类型，Object.prototype.toString.call()
 */

const checkType = (type, content) => {
  return Object.prototype.toString.call(content) === `[object ${type}]`
}

const isB = checkType("Number", 123)

console.log(isB)

const checkTypeI = type => {
  return content => {
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}

const isString = checkTypeI('String')
const isA = isString('123')
console.log(isA)

const types = ['Number', 'Boolean', 'String']
const checks = {}
types.forEach(type => {
  checks['is' + type] = checkTypeI(type)
})

console.log(checks.isNumber(123))
console.log(checks.isString('345'))

// 定义一个执行函数
const add = (a, b, c, d, e) => a + b + c + d + e;

// curring实现
const curring = (fn, arr=[]) => {
  const len = fn.length
  return (...args) => {
    arr = arr.concat(args)
    if (arr.length < len) {
      return curring(fn, arr)
    }
    return fn(...arr)
  }
}

const res1 = curring(add)(1)(2)(3, 4, 5)
const res2 = curring(add)(1, 2, 3)(4, 5)
console.info("res1: ", res1)
console.info("res2：", res2)

// 改造checkType
const typesI = ['Number', 'Boolean', 'String']
let checksI = {}
typesI.forEach(type => {
  checksI['is' + type] = curring(checkType)(type)
})

console.log(checksI.isNumber('hoping'))
