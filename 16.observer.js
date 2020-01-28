class Subject {
  constructor(name) {
    this.name = name
    this.arr = []
    this.state = 'happy'
  }

  attach(obj) {
    this.arr.push(obj)
  }
  setState(newState) {
    this.state = newState
    this.arr.forEach(o => o.update(newState))
  }
}
/**
 * 观察者模式：
 * 被观察者改变状态，通知观察者改变状态；
 * 媒介实质还是中间数组，但是控制权移交到被观察者，这个和发布订阅模式不同，
 * **观察者模式包含发布订阅模式**
 */
class Observer {
  constructor(name) {
    this.name = name
  }
  update(newState) {
    console.log(this.name + ' baby: ' + newState)
  }
}

let s = new Subject('baby')
let o1 = new Observer('man')
let o2 = new Observer('wife')

s.attach(o1)
s.attach(o2)
s.setState('unhappy')
