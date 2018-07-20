// In ES6
// var has global scope
// let has block scope

// example 

var stack=[]
function test(){
    for(var i=0;i<9;i++){
        var y=i
        stack.push[i]
        console.log("stack",stack[i]);
        
    }
}
console.log("test",test())