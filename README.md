# 401 data-structures-and-algorithms

## Table of Contents
Data Structure | Challenge
-------------- | ---------------
Stacks/Queue | Implement a Queue using 2 stacks
LinkedList | Merge 2 lists
LinkedList | k-th value from the end
LinkedList | Linked list insertions
<!-- [GitHub](http://github.com) -->
***

# Stacks and Queues

## Challenge
Create a new PseudoQueue class. Do not use an existing Quene. Instead, this PseudoQueue class will implement our standard queue interface, but will internally only utilize 2 stack objects. Ensure that you create your class with these methods:
  - enqueue(value): inserts value into the PseudoQueue.
  - dequeue(): which extracts a value from the PseudoQueue.
  
***

# Merge 2 Linked Lists 
Zip together 2 linked lists.

## Challenge
Use a function that takes in 2 list as arguments. Sip them together so that the node alternate. Then return the zipped list. Try to keep the space to O(1).
Access to: Node class and the linkedList class and methods.

## Approach & Efficiency
I created 2 temporary variables to help reference nodes a I re-assigned the order of the linked lists to they refererenced each other in the order I wanted.
Time: 0(n)
Space: 0(1)

## Solution
![ll-merge.jpg](assets/ll-merge.jpg)

***

# 'k-th' value from end
Return the value of the node which is the 'k-th' from the end of the linked list.

## Challenge
Write a method on the Linked List class which takes a number, k, as a parameter. Retrun the node's value that is k from the end of the linked list.
Given: Node class and Linked List class with all properties and methods.

## Approach & Efficiency
I created 
Time: 0(n)
Space: 0(1)

## Solution
![ll-kth.jpg](assets/ll-kth.jpeg)

***

# Linked List Insertion Methods
Write 3 Insertion Methods on the Linked List class using the Node Class.

- .append();
- .insertBefore();
- .insertAfter();

## Challenge

Extend a linked List Class according to 3 features

1. linkedList.append(value) adds a new node with the given value to the end of the list.
2. linkedList.insertBefore(value, newVal) adds a new node with the new value immediately before the node with the given value.
3. linkedList.insertAfter(value, newVal) adds a new node with the new value immediately after the node with the given value.

## Approach & Efficiency
I used a while loop to traverse the linked list looking for either the end or the given value. When found, I inserted a new node. Depending on the function, I inserted the node at the end, before the value, or after it.
Time: 0(n)
Space: 0(n)

## Solution
![ll-insert.jpg](assets/ll-insert.jpg)

***

Code Fellows - Seattle, WA - Advanced Javascript - 401d32 - 2019