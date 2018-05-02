const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

const spiderman = {};
const spiderman = new Object();

const name = 'Iron Man';
const realName = 'Tony Stark';
// long way
const ironMan = ( name: name, realName: realName };
// short ES6 way
const ironMan = { name, realName };


superman.name
<< 'Superman'
superman['name']
<< 'Superman'


superman.fly()
<< 'Up, up and away!'
superman['fly']()
<< 'Up, up and away!'


'city' in superman;
<< false
superman.city !== undefined;
<< false
superman.hasOwnProperty('city');
<< false
superman.hasOwnProperty('name');
<< true

for(const key in superman) {
console.log(key + ": " + superman[key]);
}
<< "name: Superman"
<< "real name: Clark Kent"
<< "height: 75"
<< "weight: 235"
<< "hero: true"
<< "villain: false"
<< "allies: Batman,Supergirl,Superboy"
<< "fly: function (){
console.log(\"Up, up and away!\");
}"


for(const value of Object.values(superman)) {
console.log(value);
}
<< Superman
Clark Kent
75
235
true
false
[ 'Batman','Supergirl','Superboy' ]
[Function: fly]


superman
<< { name: 'Superman',
'real name': 'Clark Kent',
height: 75,
weight: 235,
hero: true,
villain: false,
allies: [ 'Batman', 'Supergirl', 'Superboy' ],
fly: [Function: fly]
city: 'Metropolis' }


const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince" },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
}


const myMaths = {
square(x) {
    return x * x;
    },
    mean(array,callback) {
        if (callback) {
        array.map( callback );
        }
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }
};


JSON.parse(batman);
<< { name: 'Batman',
'real name': 'Bruce Wayne',
height: 74,
weight: 210,
hero: true,
villain: false,
allies: [ 'Robin', 'Batgirl', 'Superman' ] }


const wonderWoman = {
name: 'Wonder Woman',
'real name': 'Diana Prince',
height: 72,
weight: 165,
hero: true,
villain: false,
allies: ['Wonder Girl','Donna Troy','Superman'],
lasso: function(){
    console.log('You will tell the truth!');
}
}
JSON.stringify(wonderWoman);
<< '{"name":"Wonder Woman","real name":"Diana Prince","height":72,
"weight":165,"hero":true,"villain":false,"allies":["Wonder Girl",


























