class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

function removeKFromList(l,k){
  let currNode = l;
  let prevNode = null;
  while(currNode.next !== null){
    if(currNode.value === k){
      prevNode = currNode.next;
      break
    } else {
        while(currNode.next !== null) {
          prevNode = currNode;
          currNode = currNode.next;
        }
        prevNode.next = currNode.next;
    }
  }
  return l
}


const initial = convertArrayToList([1,2, 3, 3, 4, 5]);
console.log(removeKFromList(initial, 3))
console.log(initial)

