console.log(`while`)
// while
let count = 0
while(count < 10) {
	console.log(count)
	count++
}

console.log(`do-while`)
// do while
count = 0
do {
	console.log(count)
	count++
} while(count < 10)

console.log(`if`)
// if
if(count == 10) {
	console.log('beast')
}

console.log(`switch`)
// switch
let ans = 1
switch(ans) {
	case 1:
		console.log('1')
		break
	case 2:
		console.log('2')
		break
	default:
		break
}

console.log(`for`)
// for
let n = 10
for(let i = 0; i < n; i++) {
	console.log(i)
}

console.log(`for-in`)
// for-in returns keys
let x = [1, 2, 3, 4, 5]
for(let i in x) {
	console.log(`i: ${i}, x[i]: ${x[i]}`)
}

console.log(`for-of`)
// for-of returns vals
x = [1, 2, 3, 4, 5]
for(let i of x) {
	console.log(`i: ${i}`)
}