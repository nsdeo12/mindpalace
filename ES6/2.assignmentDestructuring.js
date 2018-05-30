/*



var {foo} = pony is equivalent to var foo = pony.foo
var {foo: baz} = pony is equivalent to var baz = pony.foo
You can provide default values, var {foo='bar'} = baz yields foo: 'bar' if baz.foo is undefined
You can pull as many properties as you like, aliased or not
var {foo, bar: baz} = {foo: 0, bar: 1} gets you foo: 0 and baz: 1
You can go deeper. var {foo: {bar}} = { foo: { bar: 'baz' } } gets you bar: 'baz'
You can alias that too. var {foo: {bar: deep}} = { foo: { bar: 'baz' } } gets you deep: 'baz'
Properties that aren’t found yield undefined as usual, e.g: var {foo} = {}
Deeply nested properties that aren’t found yield an error, e.g: var {foo: {bar}} = {}
It also works for arrays, [a, b] = [0, 1] yields a: 0 and b: 1
You can skip items in an array, [a, , b] = [0, 1, 2], getting a: 0 and b: 2
You can swap without an “aux” variable, [a, b] = [b, a]
You can also use destructuring in function parameters
Assign default values like function foo (bar=2) {}
Those defaults can be objects, too function foo (bar={ a: 1, b: 2 }) {}
Destructure bar completely, like function foo ({ a=1, b=2 }) {}
Default to an empty object if nothing is provided, like function foo ({ a=1, b=2 } = {}) {}

*/

//dont overboard quickly,rather walk with ES5 and add ES6 coating to improve the code quality

"use strict " ;

var foo = {
    bar: 'pony',
    baz: 3
}
var {
    bar,
    baz
} = foo
console.log(bar)
// <- 'pony'
console.log(baz)
// <- 3

//////////////////////////////////////////////////////////////////////////////
var foo = {
    bar: 'pony',
    baz: 3
}
var {
    bar: a,
    baz: b
} = foo
console.log(a)
// <- 'pony'
console.log(b)
// <- 3
//////////////////////////////////////////////////////////////////////////////
var foo = {
    bar: {
        deep: 'pony',
        dangerouslySetInnerHTML: 'lol'
    }
}
var {
    bar: {
        deep,
        dangerouslySetInnerHTML: sure
    }
} = foo
console.log(deep)
// <- 'pony'
console.log(sure)
// <- 'lol'

//////////////////////////////////////////////////////////////////////////////
var {
    foo
} = {
    bar: 'baz'
}
console.log(foo)
// <- undefined
//////////////////////////////////////////////////////////////////////////////

//swap without auxilary varilable

function es5() {
    var left = 10
    var right = 20
    var aux
    if (right > left) {
        aux = right
        right = left
        left = aux
    }
    console.log("left,right", left, right)
}

function es6() {
    var left = 10
    var right = 20
    if(1){
        [left, right] = [right, left]
    }
    console.log("left,right without aux", left, right)
}
es5()
es6()



//////////////////////////////////////////////////////////////////////////////
//When it comes to Arrays you can conveniently skip over elements that you don’t care about.

var [,,a,b] = [1,2,3,4,5]
console.log(a)
// <- 3
console.log(b)
// <- 4


//////////////////////////////////////////////////////////////////////////////

//You can also use destructuring in a function's parameter list.

function greet ({ age, name:greeting='she' }) {
  console.log(`${greeting} is ${age} years old.`)
}
greet({ name: 'nico', age: 27 })
// <- 'nico is 27 years old'
greet({ age: 24 })
// <- 'she is 24 years old'


//////////////////////////////////////////////////////////////////////////////
//Use Cases for Destructuring
function getCoords () {
    return {
      x: 10,
      y: 22
    }
  }
  var {x, y} = getCoords()
  console.log(x)
  // <- 10
  console.log(y)
  // <- 22

  
//////////////////////////////////////////////////////////////////////////////
//Special Case: import Statements
//Even though import statements don’t follow destructuring rules, they behave a bit similarly. 
//This is probably the “destructuring-like” use case I find myself using the most, even though it’s not actually destructuring. 
//Whenever you’re writing module import statements, you can pull just what you need from a module’s public API. 
//An example using contra:

import {series, concurrent, map } from 'contra'
series(tasks, done)
concurrent(tasks, done)
map(items, mapper, done)
