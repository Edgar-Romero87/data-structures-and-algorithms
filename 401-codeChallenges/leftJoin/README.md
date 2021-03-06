# Left Join
### Code Challenge 33
## Challenge
- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

## Approach & Efficiency

- Go through the first table, push every key/value pair into a temp array.
- go through the second table, if key match key from first table push into temp array
- add null as a third element in the temp array when there is no matching key in second array
- push temp array into outputArray
- return outputArray which is an array of arrays

## Whiteboard
![whiteboard](assets/leftJoin.png)


