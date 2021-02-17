// First, we set up a false "prehead" node that allows us to easily return the head of the merged list later. We also maintain a prev pointer, which points to the current node for which we are considering adjusting its next pointer. Then, we do the following until at least one of l1 and l2 points to null: if the value at l1 is less than or equal to the value at l2, then we connect l1 to the previous node and increment l1. Otherwise, we do the same, but for l2. Then, regardless of which list we connected, we increment prev to keep it one step behind one of our list heads.
// After the loop terminates, at most one of l1 and l2 is non-null. Therefore (because the input lists were in sorted order), if either list is non-null, it contains only elements greater than all of the previously-merged elements. This means that we can simply connect the non-null list to the merged list and return it

let mergeTwoLists = function(l1, l2) {

    //set up a false "prehead" node that allows us to easily return the head of the merged list later
    const DummyList = new ListNode(-1)
    let head = DummyList
    while(l1 && l2){
        if(l1.val <= l2.val){
            head.next = new ListNode(l1.val)
            l1 = l1.next
        } else{
            head.next = new ListNode(l2.val)
            l2 = l2.next
        }
        head = head.next
    }

    head.next = l1 || l2
    return DummyList.next
};

// time: O(m + n)
// space: O(1)
// For space complexity I thought this would be O(n + m) because an entire new linked list is being created. Checking the solution however shows it to be O(1)!?! I guess space complexity is only affected by the working memory which would be just the pointers to the head and List variables

//recursive
let mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2
    else if (l2 == null) return l1
    else if (l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else{
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

// time : O(n + m)
// space: O(n + m)