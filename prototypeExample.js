/** 
 * ---------------------------------------------------------------------
 * example 1
 * x is still 4 in line 6 and 9
 */
console.log("----------------example 1------------------------------------------------");

function func1(x) {
    return x = 5;

}
var x = 4;
console.log(x);

var t = func1(x);
console.log(t);




/**
 * ---------------------------------------------------------------------
 * example 2
 * changing value with pass by reference
 * 
 */
console.log("----------------example 2------------------------------------------------");

function myobject() {
    this.value = 5;
}
var o = new myobject();
console.log(o.value); // o.value = 5
function objectchanger(fnc) {
    fnc.value = 6;
}
objectchanger(o);
console.log(o.value); // o.value is now equal to 6


/**
 * ---------------------------------------------------------------------
 *example 3
 *  pass in a method of an object
 */
console.log("----------------example 3------------------------------------------------");

function func3() {
    this.val = 5;
}

func3.prototype.add = function() {
    this.val++;
}

var t1 = new func3()
console.log("t1=", t1.val);
t1.add();
console.log("after add prototype function", t1.val);

/**
 * example 4
 * call method
 */
console.log("----------------example 4------------------------------------------------");