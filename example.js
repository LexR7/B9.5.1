var array = require('./')
var list = []

array.add(list, 1)
array.add(list, 4)
array.add(list, 2)

console.log("Значения массива добавлялись в следующем порядке [1,4,2]")

console.log("Массив создан со следующими значениями: "+list) // prints out [1, 2, 4]
console.log("array.has(list, 2) - "+array.has(list, 2)) // returns true
console.log("array.has(list, 3) - "+array.has(list, 3)) // returns false
console.log("array.eq(list, 2) - "+array.eq(list, 2)) // returns 1 (the index)
console.log("array.gt(list, 2) - "+array.gt(list, 2)) // returns 2
console.log("array.gt(list, 4) - "+array.gt(list, 4)) // returns -1
