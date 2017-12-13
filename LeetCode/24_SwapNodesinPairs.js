/**
  Given a linked list, swap every two adjacent nodes and return its head.
	For example,
	Given 1->2->3->4, you should return the list as 2->1->4->3.
	Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	if (!head || !head.next) {
		return head;
	}

	const tempNode = head.next;
	head.next = swapPairs(tempNode.next);
	tempNode.next = head;
	return tempNode;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
};

var node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);

console.log(JSON.stringify(swapPairs(node)));