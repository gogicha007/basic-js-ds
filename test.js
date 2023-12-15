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

function getSize(l) {
  let size = 0;
  let currNode = l;
  while (currNode) {
    currNode = currNode.next;
    size++;
  }
  return size;
}

function countValue(l, k) {
  let currNode = l;
  let indexes = [];
  let loop = 0;
  while (currNode) {
    if (currNode.value === k) {
      indexes.push(loop);
    }
    currNode = currNode.next;
    loop++;
  }
  return indexes;
}


function removeValue(l,k){
  let currNode = l;
  let loop = 0;
  let prevNode;
  while(currNode) {
    if(currNode.value === k) {
      if(loop === 0) {
        l = currNode.next
      } else {
        prevNode.next = currNode.next
      }
    } else {
      prevNode = currNode;
    }
    currNode = currNode.next
    loop++
  }
  return l;
}

const initial = convertArrayToList([3, 2, 3, 3, 4, 5]);
// console.log(countValue(initial, 3));
// console.log(getSize(initial));
console.log(removeValue(initial, 3))
