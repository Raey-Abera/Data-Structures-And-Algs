//Implement a Queue including it's helper methods:  add(enqueue), remove(dequeue), first, last, and size

class Queue {
  constructor() {
    this._storage = {}
    this._length = 0
    this._headIndex = 0
  }

  enqueue(value) {
    this._storage[this._length + this._headIndex] = value
    this._length++
  }

  deQueue() {
    let firstIndex = this._storage[this._headIndex]
    delete this._storage[this._headIndex]
    this._length--
    this._headIndex++
    return firstIndex
  }

  first() {
    return this._storage[this._headIndex]
  }

  last() {
    return this._storage[this._length -1]
  }

  size() {
    if (this._length < 0) return 0
    return this._length
  }
}

const myQ = new Queue()
myQ.enqueue('stuff')
myQ.enqueue('stuffTwo')
myQ.enqueue('stuffThree') 
console.log('this is dequeue', myQ.deQueue())
console.log('this is first', myQ.first())
console.log('this is last', myQ.last())
console.log('this is size', myQ.size())



