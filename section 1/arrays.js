const arr1 = [343, 'hello', false, console.log];

console.log(arr1);
console.log(typeof arr1);

const movies = ['Bahubali', 'Asur', 'Vampire Diaries', 'Interstellar', 'RRR', 'Avengers'];
console.log(movies.length);

//indexing
console.log(movies[3]);
console.log(movies[10]);
//negative indexing
console.log(movies.at(-4));
//positive indexing
console.log(movies.at(1));

movies[3] = 'Inception';
console.log(movies);

//Slicing
console.log(movies.slice(1, 4));

console.log(movies.slice(1, -1));

console.log(movies.slice(2));

console.log(movies.slice(2,100));

// adding elements in array
movies.push('Flash'); // adds element at the end
movies.unshift('Pathaan'); //adds element at the beginning

console.log(movies);

// removing elements from array
movies.pop(); // removes element from the end
movies.shift(); // removes element from the beginning

console.log(movies);

movies.splice(3, 2); //removes elements from any position

console.log(movies);

console.log( ['ironman', ...movies, 'batman'] );
console.log([...movies.slice(0,3), 'new element', ...movies.slice(3)]);



