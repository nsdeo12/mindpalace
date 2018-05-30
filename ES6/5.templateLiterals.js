"use strict";

/*

Template Literals

You can declare strings with ` (backticks), in addition to " and '
Strings wrapped in backticks are template literals
Template literals can be multiline
Template literals allow interpolation like `ponyfoo.com is ${rating}` where rating is a variable
You can use any valid JavaScript expressions in the interpolation, such as `${2 * 3}` or `${foo()}`
You can use tagged templates to change how expressions are interpolated
Add a fn prefix to fn`foo, ${bar} and ${baz}`
fn is called once with template, ...expressions
template is ['foo, ', ' and ', ''] and expressions is [bar, baz]
The result of fn becomes the value of the template literal
Possible use cases include input sanitization of expressions, parameter parsing, etc.
Template literals are almost strictly better than strings wrapped in single or double quotes

*/
///////////////////////////////////////////////////////////////////////////
//actual interpolation? You can use the ${expression} notation for that.
var host = 'ponyfoo.com'
var text = `this blog lives at ${host}`
console.log(text)
// <- 'this blog lives at ponyfoo.com'

///////////////////////////////////////////////////////////////////////////
var text = `this blog lives at ${'ponyfoo.com'}`        //check the difference
console.log(text)
// <- 'this blog lives at ponyfoo.com'

///////////////////////////////////////////////////////////////////////////
var today = new Date()
var text = `the time and date is ${today.toLocaleString()}`
console.log(text)
// <- 'the time and date is 8/26/2015, 3:15:20 PM'


////////////////////////////////////////////////////////////////////////////////
import moment from 'moment'
var today = new Date()
var text = `today is the ${moment(today).format('Do [of] MMMM')}`
console.log(text)
// <- 'today is the 26th of August'

////////////////////////////////////////////////////////////////////////////////