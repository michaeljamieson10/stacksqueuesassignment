/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val);
    if(this.size === 0){
      this.first = node;
      this.last = node;
    }else{
      this.last.next = node;
      this.last = node;
    }
    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // return this.first.shift();
    if (!this.first) throw new Error("Can't dequeue from an empty queue.");

    let temp = this.first;
    if(this.first == this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    // return this.data.splice(1)[0].value;
    let temp = this.first;
    return temp.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(!this.first && !this.last){
      return true
    }else{
      return false;
    }
    
  }
}

module.exports = Queue;
