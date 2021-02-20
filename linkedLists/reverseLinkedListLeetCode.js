https://leetcode.com/problems/reverse-linked-list/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// iterative
let reverseList = function (head) {
    if (!head) return head

    let node = head
    let nextNode = head.next

    node.next = null

    while (nextNode) {
        const nextNextNode = nextNode.next
        nextNode.next = node
        node = nextNode
        nextNode = nextNextNode
    }

    return node
}

// recursive
let reverseList = function (head) {
    let newHead = null

    const reverse = (node) => {
        if (!node) return null

        const nextNode = reverse(node.next)

        node.next = null

        if (nextNode) {
            nextNode.next = node
        } else {
            newHead = node
        }

        return node
    }

    reverse(head)

    return newHead
}
