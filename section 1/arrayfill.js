const prices =[2000, 3000, 399, 499, 299];
const filteredprice = prices.filter((p) => {return p<500});
console.log(filteredprice);

const names=['raju','kalia','pinki'];
const lengthName = names.filter((p) => {return p.length>=5});
console.log(lengthName);


//nums = [34, 65, 32, 64, 85, 10];
//const res = nums.filter((num) => num%2 == 0);
//console.log(res);

const user = {
    name : 'Harry',
    email : 'harry@mail.com',
    password : 1234
}

console.log(user.name[3]);

const nums = [1,2,3,4,5];
new_nums = nums.map( n => n-1);
console.log(new_nums);

const fun = N => {
    var n = 10;
    return N=2;
}
console.log(n);