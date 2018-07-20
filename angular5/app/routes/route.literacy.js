module.exports=(app)=>{
    const literacy=require('../controllers/ctrl.literacy.js')
    console.log("literayc model===>",literacy);
    
    app.get('/literacy',literacy.findAll);

    app.post('/literacy',function(){
        literacy.create
    })

    app.get('/literacy/:state',function(){
        literacy.findOne
    })

};

