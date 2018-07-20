const Literacy = require('../models/model.literacy');

exports.create = (req, res) => {
    if (!req.body.literacy) {
        return res.status(400).send({
            message: "literacy record content can not be empty"
        })
        
    }

    const literacy = new Literacy({
        region_type: req.body.region_type,
        region_name:req.body.region_name,
        survey_details: {
            year_of_survey: req.body.survey_details.year_of_survey,
            literacy_percentage:req.body.survey_details.literacy_percentage

        }
        //timestamps:$currentDate

    });

    literacy.save()
    .then((data) => {
        res.send(data);
        
    }).catch((err) => {
        res.status(500).send({
            message:err.message||"error white creaing a record"
        })
    });
};


exports.findAll=(req,res)=>{
    Literacy.find()
    .then(literacies=>{
        console.log("inside literacy findall");
        
        //res.send(literacies);
        res.json({status: true, todo: todos});
    })
    .catch(err=>{
        // res.status(500).send({
        // message:err.message||"error at literacy controller line 39"
        // })
        res.json({status: false, error: "Something went wrong"});
        
    });

}

// exports.findAll = (req, res) => {
//     Note.find()
//     .then(notes => {
//         res.send(notes);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving notes."
//         });
//     });
// };