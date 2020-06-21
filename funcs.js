'use strict'
// default vals
function anon(x='default') {
	console.log(x)
}
anon()

// func in obj
const obj = {
	name: 'anon func',
	invoke() {
		return 'called'
	}
}
console.log(obj.invoke())

// arrow function --> always anonymous
const f1 = (x) => x * x
const f2 = (x, y) => {
	return `${x}, ${y}`
}
console.log(`${f1(3)}`)
console.log(`${f2('a', 'b')}`)

// imnmediately invoked function expression
let f= (() => {
	return 'ape'
})();
console.log(f)

// let vs var
for(var i = 0; i < 3; i++) {
	console.log(i)
}
console.log(i)
// Causes error because let is only inside the block, var works outside too
// for(let i = 0; i < 3; i++) {
	// console.log(i)
// }
// console.log(i)

// strict mode prevents implicit globals
// put 'use strict' on top of script