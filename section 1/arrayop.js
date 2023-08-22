// Map
const nums = [23453, 46, 23, 39, 3, 8];

const newNums = [];
for(let i of nums){
    console.log(i ** 2);
    newNums.push(1 ** 2);
}
console.log(newNums);

const result = nums.map( (n) => { return n**2 } );
console.log(result);

const prices = [3400, 2347, 99,27 ,494, 989];
const result2 = prices.map( (p) => { return p + p*0.1 } );
console.log(result2);

// use map to get discounted prices - 7.5%
const prices2 = [3400, 2347, 99, 27, 494, 989];
const result3 = prices.map( (p) => { return p - (p*7.5/100) } );
console.log(result3);

// use map to convert all names in array to uppercase
const arr = ['rose', 'lily', 'lotus'];
const upper = arr.map(element => { return element.toUpperCase()});
console.log(upper);

// use map function to get first names from the array of full names
const fullname = ['Fariha Firoz Khan', 'Aamna Khan', 'Saman Khan', 'Mariya Khan'];
const firstname = fullname.map((fullname) => { return fullname.split(' ')[0]});
console.log(firstname);

// use map function to calculate the square roots of numbers in an array
const numbers = [4, 9, 144, 169];
const sqr = numbers.map((numbers) => { return Math.sqrt(numbers) });
console.log(sqr);