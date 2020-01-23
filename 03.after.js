// after 等待函数执行次数达到预期值
const after = (times, fn) => {
  return () => {
    console.log('还有：' + times + '次')
    if (--times === 0) fn();
  }
}


const doAfter = after(3, () => {
  console.log('执行ing，3次之后再调用')
})

doAfter()
doAfter()
// doAfter()
