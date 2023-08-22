
const smartphoneList = [
    { brand : 'Samsung', model : 'S21', price : 70000, color : ['Black', 'Blue']},
    { brand : 'Samsung', model : 'S23', price : 86000, color : ['Black', 'Blue']},
    { brand : 'Apple', model : 'iPHONE 12', price : 80000, color : ['White', 'Red', 'Yellow']},
    { brand : 'OnePlus', model : '9 PRO', price : 60000, color : ['Black', 'White']},
    { brand : 'OnePlus', model : 'Nord', price : 50000, color : ['Black', 'Gold']},
    { brand : 'Xiomi', model : 'Mi 11', price : 50000, color : ['Black', 'Gold']},
    { brand : 'Xiomi', model : 'Mi 11', price : 50000, color : ['Black', 'Gold']},
]
// syntax to access price of oneplus 9 pro
console.log(smartphoneList[2].price);

// syntax to add blue color to mi 11
smartphoneList[3].color.push('BLUE');
console.log(smartphoneList[3]);

//
smartphoneList[1].color.splice(1);
console.log(smartphoneList[1].color);

// use filter to get all phones with price less than 70000
const filteredResult = smartphoneList.filter((phone) => { return phone.price < 70000})
console.log(filteredResult);

//
//const filtersmartphone = smartphoneList.filter ((phone) => { return phone.brand === 'Samsung'})
//console.log(filtersmartphone);
//const filtersmartphone = smartphoneList.filter((phone) => {return phone.brand.toLowerCase().includes('mi'.toLowerCase)});

const filtersmartphone = smartphoneList.filter((phone) => {return phone.color.includes('Blue') && phone.price <= 70000});

console.log(filtersmartphone);

const brands = smartphoneList.map((phone) => {return phone.brand})
console.log(new Set(brands));

//




