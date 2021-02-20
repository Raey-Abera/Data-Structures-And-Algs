class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    //This method returns the number of nodes present in the linked list
    size() {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.next
        }
        return count
    }
    //This method empties out the list
    clear() {
        this.head = null
    }
    //This method returns the last node of the linked list.
    getLast() {
        let lastNode = this.head
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    //This method returns the first node of the linked list.
    getFirst() {
        return this.head
    }
    //
    reverse(){
        // swap the head and tail
        // create a variable called node and initialize it to the head property
        let node = this.head
         this.tail = node
         this.head = this.tail
        // create a variable called next
         let next
        // create a variable called prev
        let prev = null
        // loop through list
        for(let i = 0; i < this.length; i++){
          // set next to be the next property on whatever node is
          next = node.next
          // set the next property on the node to be whatever prev is
          node.next = prev
          // set prev to be the value on the node variable
          perv = node
           // set the node variable to be the value of the next variable
           node = next
        }
        return this
      }
}