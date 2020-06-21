'use strict'

// RETURN NEW, MODIFIED ARRAY
// push and pop
let arr = []
let len = arr.push(4)
len = arr.push(5)
len = arr.push(6)
len = arr.push(7)
console.log(arr)
console.log(len)
let x = arr.pop()
console.log(arr)
console.log(x)


// RETURN NEW, MODIFIED ARRAY
// shift and unshift
arr = []
arr.unshift(1)
console.log(arr)
arr.unshift(2)
console.log(arr)
arr.unshift(3)
console.log(arr)

arr.shift()
console.log(arr)


// RETURN ORIGINAL ARRAY
// concat
arr = [1, 2, 3]
console.log(arr)
arr = arr.concat(4, 5, 6)
console.log(arr)

// slice and splice
console.log(arr.slice(-1))
// args: [start, deletecount, ...extra_things_to_add]
console.log(arr.splice(1, 2, 2, 3))

// fill
arr = [1, 2, 3, 4, 5]
arr.fill('d')
console.log(arr)

// map
arr = [1, 2, 3, 4, 5]
console.log(arr.map(x => x * x))
