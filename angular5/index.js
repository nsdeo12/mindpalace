const express = require("express");
const app = express()


var methodOverride = require('method-override');
app.use(methodOverride());


//using colored console message
const colors = require('colors');

//handling body of the request
const bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application:vnd.api+json'}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const dbconfig=require('./config/db.config');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

require('./app/routes/route.literacy')(app);

mongoose.connect(dbconfig.url)
.then(()=>{
    console.log("db connected successfully");
    
})
.catch((err)=>{
    console.log("error in connection ",err);
    process.exit();
    
})




app.get('/', function (req, res) {
    

    res.send({
        "message": "Hello rest"
    })
    // res.json({
    //     "message": "Hello rest"
    // })

});



let serverState =
    "//////////////////////////////////////////////////\n" +
    "////////////////////                         /////\n" +
    "/////////Server running at the following port ////\n" +
    "////////////////////         //////////////  /////\n" +
    "////////////////////  3000   //////////////  /////\n" +
    "////  //////////////         /////////////////////\n" +
    "////  //////////////         /////////////////////\n" +
    "////                         /////////////////////\n" +
    "//////////////////////////////////nsdeo12(github)/\n" +
    "//////////////////////////////////////////////////";

app.listen(3000, function () {
    console.log(serverState.yellow)
    //console.log(serverString.red.bgWhite)
});