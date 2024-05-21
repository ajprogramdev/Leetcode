## #206 Reverse a Linked List.

### Problem

Given the head of a singly linked list, reverse the list, and return the reversed list.

Sample Input:\
([1,2,3,4,5]) => [5,4,3,2,1]\

### Techniques

### Problem solving steps:

1.

### Time Complexity: O(n)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let next = null;
  let current = head;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
```
