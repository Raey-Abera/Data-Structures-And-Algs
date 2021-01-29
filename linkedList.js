class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    //This method returns the number of nodes present in the linked list
    size() { 
        if(!this.head) return null
        let node = this.head
        let counter = 0
        while(node) {
            node = node.next
            counter++
        }
        return counter
    }
    //This method empties out the list
    clear() {
        this.head = null
    }
    //This method returns the last node of the linked list
    getLast() {
        let node = this.head
        while(node) {
            if(!node.next) return node
            node = node.next
        }
        return null
    }
    //This method returns the first node of the linked list
    getFirst() {
        return this.head
    }
}