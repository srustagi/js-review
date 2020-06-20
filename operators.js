// strict equality
// if two things are same type and same value, or if they refer to the same object
// ===, !==
let x = '10'
let y = 10
console.log(`${x === y}`)

// abstract equality
// if two things are same value, or if they refer to the same object
x = '10'
y = 10
console.log(`${x == y}`)

// bitwise only work on ints, not floats
// & = and
// | = or
// ^ = xor
// ~ = not
// << = shift left
// >> = shift right
// >>> = right shift with zero fill for all shifted bits instead of sign extension

// typeof
console.log(typeof 1)
console.log(typeof 'hi')
console.log(typeof null)
console.log(typeof function() {})

// comma
let a = 40, b = 10

// void (like the javascript void: 0 you see everywhere) void
// just returns undefined so the arg is irrelevant
x = void 0
console.log(x)

// destructuring assignment operator
const obj = { a: 1, b: 2, c: 3, d: 4 }
const { one, two, three, d } = obj
// only works when the vars you destructure to have the same name as obj props
console.log(one)
console.log(d)

let res = [1, 2, 3, 4, 5]
let {...beast} = res
console.log(beast)

// instanceof
console.log(new Date() instanceof Date)

// delete operator
const obj_1 = {x: 1, y: 2, z: 3}
console.log('x' in obj_1)
delete obj_1.x
console.log('x' in obj_1)

// ternary
let value = true ? 'a' : 'b'
console.log(value)