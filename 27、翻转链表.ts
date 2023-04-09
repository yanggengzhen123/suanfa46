class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let slow:ListNode | null = null;
    let fast:ListNode | null = head;
    // 双指针
    while (fast) {
        let temp = fast.next;
        fast.next = slow;
        slow = fast;
        fast = temp;
    }
    return slow;
}
