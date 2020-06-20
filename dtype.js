// primitive type
// primitives are immutable

// can't change
let Age = 24
// returns new variable
Age = 27

// Special values:
const inf = Infinity
const ninf = -Infinity
const nan = NaN

// you can use single or double quotes for strings
let x = true
let y = false

// symbols --> unique tokens, once a symbol is made, no other symbol will match it
const blue = Symbol()
const white = Symbol('Color White')

// false
console.log(blue === white)

// null + undefinded --> doesn't exist. use nulltype to check for existence