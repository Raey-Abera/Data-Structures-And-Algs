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
}