# Stacks and Queues
<!-- Short summary or background information -->



## Challenge
<!-- Description of the challenge -->



## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->



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
