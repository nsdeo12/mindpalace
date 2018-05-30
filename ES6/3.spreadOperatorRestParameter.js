/*
Rest parameters is a better arguments
You declare it in the method signature like function foo (...everything) {}
everything is an array with all parameters passed to foo
You can name a few parameters before ...everything, like function foo (bar, ...rest) {}
Named parameters are excluded from ...rest
...rest must be the last parameter in the list
Spread operator is better than magic, also denoted with ... syntax
Avoids .apply when calling methods, fn(...[1, 2, 3]) is equivalent to fn(1, 2, 3)
Easier concatenation [1, 2, ...[3, 4, 5], 6, 7]
Casts array-likes or iterables into an array, e.g [...document.querySelectorAll('img')]
Useful when destructuring too, [a, , ...rest] = [1, 2, 3, 4, 5] yields a: 1 and rest: [3, 4, 5]
Makes new + .apply effortless, new Date(...[2015, 31, 8])

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Consider the following method that joins any arguments passed to it as a string.
function concat () {
    return Array.prototype.slice.call(arguments).join(' ')
  }
  var result = concat('this', 'was', 'no', 'fun')
  console.log(result)
  // <- 'this was no fun'


//The rest parameters syntax enables you to pull a real Array out of the function's arguments 
//by adding a parameter name prefixed by ...
function concat (...words) {
    return words.join(' ')
  }
  var result = concat('this', 'is', 'okay')
  console.log(result)
  // <- 'this is okay'
//Note that you can’t actually place parameters to the right: rest parameters can only be the last argument
////////////////////////////////////////////////////////////////////////////////////////////////////// 
/*
Use Case	      ||              ES5	                                ||      ES6
----------------||--------------------------------------------------||------------------------------
Concatenation	  ||    [1, 2].concat(more)	                          ||  [1, 2, ...more]
Push onto list	||    list.push.apply(list, [3, 4])	                ||  list.push(...[3, 4])
Destructuring	  ||    a = list[0], rest = list.slice(1)	            ||  [a, ...rest] = list
new + apply	    ||    new (Date.bind.apply(Date, [null,2015,8,1]))	||  new Date(...[2015,8,1])
*/

