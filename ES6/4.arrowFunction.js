/*

Arrow Functions
Terse way to declare a function like param => returnValue
Useful when doing functional stuff like [1, 2].map(x => x * 2)
Several flavors are available, might take you some getting used to
p1 => expr is okay for a single parameter
p1 => expr has an implicit return statement for the provided expr expression
To return an object implicitly, wrap it in parenthesis () => ({ foo: 'bar' }) or you’ll get an error
Parenthesis are demanded when you have zero, two, or more parameters, () => expr or (p1, p2) => expr
Brackets in the right-hand side represent a code block that can have multiple statements, () => {}
When using a code block, there’s no implicit return, you’ll have to provide it – () => { return 'foo' }
You can’t name arrow functions statically, but runtimes are now much better at inferring names for most methods
Arrow functions are bound to their lexical scope
this is the same this context as in the parent scope
this can’t be modified with .call, .apply, or similar “reflection”-type methods

*/
let x=[1, 2, 3].map(num => num * 2)

console.log("result",x);

// <- [2, 4, 6]


//The ES5 equivalent would be as below.

[1, 2, 3].map(function (num) { return num * 2 })
// <- [2, 4, 6]

/////////////////////////////////////////////////////////////////


//If we need to declare more arguments (or no arguments), we’ll have to use parenthesis.


[1, 2, 3, 4].map((num, index) => num * 2 + index)
// <- [2, 5, 8, 11]
/////////////////////////////////////////////////////////


[1, 2, 3, 4].map(num => {
    var multiplier = 2 + num
    return num * multiplier
  })
  // <- [3, 8, 15, 24]


////////////////////////////////////////////////////////////////////////
  //A cool aspect of arrow functions in ES6 is that they’re bound to their lexical scope. That means that you can say goodbye to var self = this and similar hacks – such as using .bind(this) – to preserve the context from within deeply nested methods.

function Timer () {
  this.seconds = 0
  setInterval(() => this.seconds++, 1000)
}
var timer = new Timer()
setTimeout(() => console.log(timer.seconds), 3100)
// <- 3

//when using .map, .filter, or .reduce on collections arrow functions are useful