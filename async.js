var async=require("async");
async.parallel({
    one : function(callback){
        setTimeout(function(){
            callback(null,1);
        },1000);
    },
    two : function(callback){
        setTimeout(function(){
            callback(null,2);
        },1000);
    }
},function(err,results){
    console.log(results);
});