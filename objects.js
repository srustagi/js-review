// obkects are mutable
// literal syntax of {}
// add 'properties' within the literal, key = string or Symbol, val can be anyt
const obj = {'lname' : 'rusty'} 
obj.name = 'shiv'
console.log(obj)
delete obj.name
console.log(obj)

// array
// collection of one data type, sequential, indexed from 0 to n
// 0-indexed, nonfixed length, can be objs or primitives
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr1 = [1, 2, 3, null, 4, 'file']

// date
const now = new Date()
const now1 = new Date(2020, 6, 22, 15, 0) // June  22, 2020 @ 15:00

// map, weakmap
const x = new Map()
x.set('y', 'hi')
x.set('z', 'yo')
console.log(x)

// set, weakset
const roles = new Set()
roles.add("user1")
console.log(roles)