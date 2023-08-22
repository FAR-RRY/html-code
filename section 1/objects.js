const user = {name:'Raju', email:'raju@gmail.com', password:'1234'};
console.log(user.name);
console.log(user['email']);
 
user.address='Lucknow';
console.log(user);

let customkey='email';
console.log(user[customkey]);

let smartphone = {
    brand:'Samsung',
    model:'S21',
    price:75000,
    color:'Black',
}
smartphone.color = ['Black', 'White', 'Blue'];
console.log(smartphone);
console.log(smartphone.color[2]);
smartphone.color.push('Red');
console.log(smartphone);
