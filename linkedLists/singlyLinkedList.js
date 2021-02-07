class Node {
    //node class- item
    //takes in a value 
    //and next (pointer) starting as null
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList {
    //class creating + updating list/s
    //keeps track of head, tail, length 
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    //accepts a value
    push(val) {
        //create new node using val
        const newNode = new Node(val)
        //condtion checking it there's no head property
        if (!this.head) {
            //set head to new node
            this.head = newNode
            //set tail to new node
            this.tail = this.head
        } else {
            //set the next property on the tail to be the newly created node
            this.tail.next = newNode
            //set tail proprty to be newly created node
            this.tail = newNode
        }
        //increment 
        this.length++
        //return this
        return this
    }

    pop() {
        //check if list is empty (no head) and return undefined
        if (!this.head) return undefined
        //set current pointer
        let current = this.head
        //set newTail to the current pointer
        let newTail = current
        //loop through the list until you reach the tail (second to last node)
        while (current.next) {
            //set newTail to current pointer
            newTail = current
            //set current to next (second to last node)
            current = current.next
        }
        //set tail as 2nd to last node
        this.tail = newTail
        //set next propert of the 2nd to last node to be null
        this.tail.next = null
        //decrement 
        this.length--
        //check if list is empty
        if (this.length === 0) {
            //and set head and tail to null if empty
            this.tail = null
            this.head = null
        }
        //return value of the node removed
        return current
    }

    shift() {
        //check if list is empty
        //return undefined
        if (!this.head) return undefined
        //store current head property in a variable
        let current = this.head
        //set head property to be the current head's next property 
        this.head = current.next
        //decrement
        this.length--
        //check if empty and set tail to null
        if (this.length === 0) {
            this.tail = null
        }
        //return value of the node removed (from the beginning)
        return current
    }

    //takes in a value
    unshift(val) {
        //create a new node using the value passed to the function
        const newNode = new Node(val)
        //if list is empty...
        if (!this.head) {
            //set head and tail property
            //to be newly created node
            this.head = newNode
            this.tail = this.head
        } else {
            //set the newly created node's next property to be the current head property on the list
            newNode.next = this.head
            //set the head property on the list to be that newly created node
            this.head = newNode
        }
        //increment by 1
        this.length++
        //return linked list
        return this
    }

    //retreives a node by its postion in the linked list
    //fn accpets an index
    get(index) {
        //if the index is < 0 or >= the length of the list, return null
        if (index < 0 || index >= this.length) return null
        //set counter
        let count = 0
        //set variable assineg to head
        let current = this.head
        //loop through the list until you reach the index
        while (count !== index) {
            //and return the node at that specific index 
            current = current.next
            //incerement count
            count++
        }
        return current
    }

    //changing the value of the node based on the position in the linked list 
    //fn accepts 
    set(index, val) {
        //use the get fn to find the specific node
        let findNode = this.get(index)
        //if node is found, set value of that node to be the value passed to the fn 
        //and return true
        if (findNode) {
            findNode.val = val
            return true
        }
        //if node doesn't exist return false
        return false
    }

    //adding a node to the linked list at a specific position
    insert(index, val) {
        //if the index is < 0 or > than the length return false
        if (index < 0 || index > this.length) return false
        //if index is same as length, push new node to the end of the list
        if (index === this.length) return !!this.push(val)
        //if index is 0, unshift new node to the start of the list
        if (index === 0) return !!this.unshift(val)
        //otherwise use get method to access the node at the index -1
        let prev = this.get(index - 1)
        //create new Node
        let newNode = new Node(val)
        //variable holding previous next node
        let temp = prev.next
        //set next property previous node to be the new node
        prev.next = newNode
        //set next proprty on the new node to be the previous next node      
        newNode.next = temp
        //increment
        this.length++
        return true
    }
    //removing a node from the linked list at a specific position
    remove(index) {
        //if the index is < 0 or > than the length, return undefined
        if (index < 0 || index >= this.length) return undefined
        //if the index is the same as the length -1, pop
        if (index === this.length - 1) {
            this.pop()
        }
        //if the index is 0, shift
        if (index === 0) {
            this.shift()
        }
        //otherwise, using the get method, access the node at the index - 1
        let prevNode = this.get(index - 1)
        //set the next property on that node to be the next node of the next node
        let removed = prevNode.next
        prevNode.next = removed.next
        //decermenet the length
        this.length--
        //return the value of the node removed 
        return removed

    }

    reverse() {
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
        for (let i = 0; i < this.length; i++) {
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

// 2 -> 3 -> 4 -> null   

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.remove()
console.log('list', list.pop())







