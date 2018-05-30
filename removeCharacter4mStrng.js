var charactr = "hello world";
//remove first o
function returnSubstring() {
    
    var firstChar = charactr.substring(0, 1);
    console.log("1st character", firstChar);

    var rfirstChar = charactr.substring(1);
    console.log("removed 1st character", rfirstChar);


    var lastChar=charactr.substring(charactr.length,charactr.length-1);
    console.log("last character",lastChar);

    var rlastChar = charactr.slice(0, -1);
    console.log("removed last character", rlastChar);


    var removeFirstLast=charactr.substring(1).slice(0,-1);
    console.log("removed",removeFirstLast);


    



}
returnSubstring();