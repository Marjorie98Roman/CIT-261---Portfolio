function square(x) {
    return x*x;
}


function sayHello(){
    return `Hello, my name is ${ this.name }`;
}


const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
sayHello.call(clark);
sayHello.call(bruce);


function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}
sayHello.call(clark, 'How do you do');
sayHello.call(bruce);


function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}


(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();


(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();


(function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
}());
(function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());


function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}


function party() {
    console.log('Been there, got the T-Shirt');
}


function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}


function ride(){
    if (window.unicorn) {
        ride = function(){
            // some code that uses the brand new and sparkly unicorn methods
            return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
            // some code that uses the older pony methods
            return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}


function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }
    if (n%2 === 0) {
        n = n/2;
    } else {
        n = 3*n + 1;
    }
    return collatz(n,[...sequence,n]);
}


function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}


function selfDestruct(){
    console.log('BOOOOM!');
}


login(userName, function(error,user) {
    if(error){
        throw error;
    } else {
        getPlayerInfo(user.id, function(error,info){
            if(error){
                throw error;
            } else {
            loadGame(info, function(error,game) {
                if(error){
                    throw error;
                } else {
                    // code to run game
                }
            });
            }
        });
    }
});


const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});


const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}


const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
});


const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log('Before the roll');
const roll = new Promise( (resolve,reject) => {
    const n = dice.roll();
    if(n > 1){
        setTimeout(()=>{resolve(n)},n*200);
    } else {
        setTimeout(()=>reject(n),n*200);
    }
});


async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo (user.id);
        // load the game using the returned info
    }
    catch (error){
        throw error;
    }
}


function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}


function random(a,b,callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
    const result = Math.floor((b-a+1) * Math.random()) + a
    if(callback) {
        result = callback(result);
    }
    return result;
}


function square(n) {
    return n*n;
}


function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}


function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}


const outside = 'In the global scope';
function fn() {
    const inside = 'In the function scope';
}


function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}


function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}


function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}


function counter(start){
    let i = start;
    return function() {
        return i++;
    }
}


function* exampleGenerator() {
    // code for the generator goes here
}


function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}


function reverse(string) {
    return string.split('').reverse().join('');
}


const number = 42;
function pureAdd(x,y) {
    return x + y;
}


function square(x){
    return x*x;
}


function hypotenuse(a,b) {
    return Math.sqrt(square(a) + square(b));
}


function sum(array, callback) {
    if(callback) {
        array = array.map(callback);
    }
    return array.reduce((a,b) => a + b );
}


function mean(array) {
    return sum(array)/array.length;
}


function variance(array) {
    return sum(array,square)/array.length - square(mean(array))
}


function multiplier(x){
    return function(y){
        return x*y;
    }
}


function power(x) {
    return function(power) {
        return Math.pow(x,power);
    }
}


function multiplier(x,y) {
    return x * y;
}


function multiplier(x,y) {
    if (y === undefined) {
        return function(z) {
            return x * z;
        }
    } else {
        return x * y;
    }
}


function curry(func,...oldArgs) {
    return function(...newArgs) {
        const allArgs = [...oldArgs,...newArgs];
        return func(...allArgs);
    }
}



























