// 2->4->3 + 5->6->4 = 7->0->8
var addTwoNumbers_array = function(l1, l2) {
  let x = l1.length;
  let y = l2.length;
  let llength = x > y ? x : y;
  let current = [];
  let up = 0;
  for (var i = 0 ; i < llength || up != 0; i++) {
    let n1 = l1[i] ? l1[i] : 0;
    let n2 = l2[i] ? l2[i] : 0;
    let cur = n1 + n2 + up;
    if (cur >= 10) {
      up = cur / 10;
      current.push(cur % 10);  
    } else {
      up = 0;
      current.push(cur);
    }
  }
  return current;
};

// console.log(addTwoNumbers_array([2, 4, 3], [5, 6, 4]));
// console.log(addTwoNumbers_array([0, 1], [0, 1, 2]));
// console.log(addTwoNumbers_array([], [0, 1]));
// console.log(addTwoNumbers_array([9, 9], [1]));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 2->4->3 + 5->6->4 = 7->0->8
var addTwoNumbers = function(l1, l2) {
  var up = 0;
  var result = new ListNode(0);
  var temp = result;
  while(l1 || l2) {
    var cur = (l1 && l1.val ? l1.val : 0) + (l2 && l2.val ? l2.val : 0) + up;
    if (cur >= 10) {
      cur -= 10;
      up = 1;
    } else {
      up = 0;
    }
    result.next = new ListNode(cur);
    result = result.next;
    l1 = l1 && l1.next ? l1.next : null;
    l2 = l2 && l2.next ? l2.next : null;
  }

  if (up) {
    result.next = new ListNode(1);
  }
  return temp.next;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);


console.log(addTwoNumbers(l1, l2));