var array = require('./')
var list = []
 
array.add(list, 1)
array.add(list, 4)
array.add(list, 2)
 
console.log(list) // prints out [1, 2, 4]
console.log(array.has(list, 2)) // returns true
console.log(array.has(list, 3)) // returns false
console.log(array.eq(list, 2)) // returns 1 (the index)
console.log(array.gt(list, 2)) // returns 2
console.log(array.gt(list, 4)) // returns -1
