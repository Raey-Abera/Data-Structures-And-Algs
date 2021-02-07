// Building a max heap:

// Create a new node at the beginning (root) of the heap.
// Assign it a value.
// Compare the value of the child node with the parent node.
// Swap nodes if the value of the parent is less than that of either child (to the left or right).
// Repeat until the largest element is at the root parent nodes (then you can say that the heap property holds).

// To remove/delete a root node in a Max Heap:

// Delete the root node.
// Move the last child node of the last level to root.
// Compare the parent node with its children.
// If the value of the parent is less than child nodes, swap them, and repeat until the heap property is satisfied.
// Let’s take a look at what this looks like in code. In the next section, we will implement a max heap using JavaScript.

let MaxHeap = function () {

    let heap = [null]

    this.print = () => heap

    this.insert = function (num) {
        heap.push(num)
        if (heap.length > 2) {
            let idx = heap.length - 1
            while (heap[idx] > heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]]
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2)
                    } else {
                        break
                    }
                }
            }
        }
    }

    this.remove = function () {
        let smallest = heap[1]
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1]
            heap.splice(heap.length - 1)
            if (heap.length == 3) {
                if (heap[1] < heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]]
                }
                return smallest
            }
            let i = 1
            let left = 2 * i
            let right = 2 * i + 1
            while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
                if (heap[left] > heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]]
                    i = 2 * i
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]]
                    i = 2 * i + 1
                }
                left = 2 * i
                right = 2 * i + 1
                if (heap[left] == undefined || heap[right] == undefined) {
                    break
                }
            }
        } else if (heap.length == 2) {
            heap.splice(1, 1)
        } else {
            return null
        }
        return smallest
    }

}


