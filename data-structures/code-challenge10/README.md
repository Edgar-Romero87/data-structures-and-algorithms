# Stacks and Queues
<!-- Short summary or background information -->
Create a class for Stack and class for Queue with methods for adding, removing, and viewing a stack and a queue.


## Challenge
<!-- Description of the challenge -->
- Create a Node class that has value stored in Node and pointer to next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Should raise exception when called on empty stack
- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
-Should raise exception when called on empty stack
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.



## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Big O for methods will be O(1)


## API
<!-- Description of each method publicly available to your Stack and Queue-->
### Stack
- `push` method which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- `pop` method that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Should raise exception when called on empty stack.
- `peek` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
Should raise exception when called on empty stack.
- `isEmpty` method that takes no argument, and returns a boolean indicating whether or not the stack is empty.

### Queue
- `enqueue` method which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- `dequeue` method that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
Should raise exception when called on empty queue
- `peek` method that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
Should raise exception when called on empty queue
- `isEmpty` that takes no argument, and returns a boolean indicating whether or not the queue is empty.
