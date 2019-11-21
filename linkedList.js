//example of a linked list
const ali = { name: 'ali', next: null };
const mustafa = { name: 'mustafa', next: ali };
const tim = { name: 'tim', next: mustafa };
const samson = { name: 'samson', next: tim };
const linkedList = { start: samson };

//linked list functions
const initalizeLinkedList = () => {
  return { start: null };
};
const nodeCreator = input => {
  return { value: input, next: null };
};
//add to the front of linked list
const appendLinkedList = (linkedList, input) => {
  const newNode = nodeCreator(input);
  newNode.next = linkedList.start;
  linkedList.start = newNode;
  return linkedList;
};
//add to the back of linkedList
const pushLinkedList = (linkedList, input) => {
  let startingPoint = linkedList.start;

  while (startingPoint.next !== null) {
    console.log(startingPoint.value);
    startingPoint = startingPoint.next;
  }
  console.log(startingPoint.value);
  startingPoint.next = nodeCreator(input);
  return linkedList;
};

const newList = initalizeLinkedList();
appendLinkedList(newList, 'ahmed');
appendLinkedList(newList, 'ali');
appendLinkedList(newList, 'tim');
pushLinkedList(newList, 'samson');
console.dir(newList);
