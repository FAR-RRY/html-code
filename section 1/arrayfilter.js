//name starting with s

const name = ['Fariha', 'Aamna', 'Saman', 'Saniya', 'Mariya'];
const filtername = name.filter((name) => {return name.startsWith('S')});
console.log(filtername);

//perfect square

const numbers = [1, 2, 4, 9, 16, 18, 25, 36, 42];
const perfectSquare = numbers.filter( (number) => {return Number.isInteger(Math.sqrt(number))});
console.log(perfectSquare);

//check prime number

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrime(n) {
    if ( n <= 1) {
        return false;
    } else {
        for ( let i = 2; i<n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;


}
const filterprime= num.filter(isPrime);
console.log(filterprime);