const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
    static description() {
        return 'A way of choosing random numbers'
    }
}

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

Turtle.prototype.eat = function() {
    return 'Mmm, this ${this.food} tastes great!';
}

class Turtle {
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}

this.setColor = (color) => {
    if(typeof color === 'string'){
        return _color = color;
    } else {
        throw new Error('Color must be a string');
    }
}
raph.setColor(4);

class Turtle {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    swim() {
        return `${this.name} paddles in the water`;
    }
}

class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}!` }
}

class Turtle {
    // other turtle methods here
    toString() {
        return `A turtle called ${this.name}`;
    }
}
raph.toString();

Number.prototype.isEven = function() {
    return this%2 === 0;
}
Number.prototype.isOdd = function() {
    return this%2 === 1;
}

Array.prototype.first = function() {
    return this[0];
}
Array.prototype.last = function() {
    return this[this.length -1];
}

Array.prototype.delete = function(i) {
    return self.splice(i,1);
}

String.prototype.trim = String.prototype.trim || function()
{
    return this.replace(/^\s+|\s+$/,'');
}

class myArray extends Array {
    constructor(...args){
        super(...args);
    }
    delete(i) {
        return this.splice(i,1);
    }
}

me.age = 21;
me.retirementAge = 65;
Object.defineProperty(me, 'yearsToRetirement',{
    get() {
        if(this.age > this.retirementAge) { return 0; }
        else { return this.retirementAge - this.age; }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});

Object.defineProperty(me, 'age', {
    get() {
        return 21;
    },
    set(value) {
        return value;
    }
});

class Dice {
constructor(sides=6){
    Object.defineProperty(this, 'sides', {
    get() {
        return `This dice has ${sides} sides`;
    },
    set(value) {
        if(value > 0) {
            sides = value;
            return sides;
        } else {
            throw new Error('The number of sides must be
            positive');
        }
        }
    });
    this.roll = function() {
    return Math.floor(sides * Math.random() + 1)
    }
    }
}

const Human = {
    arms: 2,
    legs: 2,
    walk() { console.log('Walking'); }
}

const Superhuman = Object.create(Human);
Superhuman.change = function() {
    return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};

Superhuman.init = function(name,realName){
    this.name = name;
    this.realName = realName;
    this.init = undefined; // this line removes the init function, so it can only be called once
    return this;
}

const batman = Object.create(Superhuman);
batman.init('Batman','Bruce Wayne');
batman.change();
    
const a = {};
const b = { name: 'JavaScript' };
Object.assign(a,b);
    
function mixin(target,...objects) {
    for (const object of objects) {
        if(typeof object === 'object') {
            for (const key of Object.keys(object)) {
            if (typeof object[key] === 'object') {
                    target[key] = Array.isArray(object[key]) ? [] : {};
                    mixin(target[key],object[key]);
                } else {
                    Object.assign(target,object);
                }
            }
        }
    }
    return target;
}

function copy(target) {
    const object = Object.create(Object.getPrototypeOf(target));
    mixin(object,target);
    return object;
}

function createSuperhuman(...mixins) {
    const object = copy(Superhuman);
    return mixin(object,...mixins);
}

const flight = {
    fly() {
        console.log(`Up, up and away! ${this.name} soars through the air!`);
        return this;
    }
}
const superSpeed = {
    move() {
        console.log(`${this.name} can move faster than a speeding bullet!`);
        return this;
    }
}
const xRayVision = {
    xray() {
        console.log(`${this.name} can see right through you!`);
        return this;
    }
}

superman.friends = [batman,wonderWoman,aquaman]
superman.findFriends = function(){
    this.friends.forEach(function(friend) {
    console.log(`${friend.name} is friends with ${this.name}`);
});
superman.findFriends()

superman.findFriends = function() {
    this.friends.forEach(function(friend) {
        console.log(`${friend.name} is friends with ${this.name}`);
    }.bind(this);)
}

superman.findFriends = function() {
    for(const friend of this.friends) {
    console.log(`${friend.name} is friends with ${this.name}`);
};

superman.findFriends = function() {
    this.friends.forEach((friend) => {
        console.log(`${friend.name} is friends with ${this.name}`);
    }
);
