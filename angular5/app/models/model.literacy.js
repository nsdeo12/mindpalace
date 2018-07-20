var mongoose = require('mongoose');

const literacySchema = mongoose.Schema({


    region_type: String,
    region_name: String,
    survey_details:
    {
        year_of_survey: Number,
        literacy_percentage: Number,
        
    }   

}
// , {
//     timestamps: true
// }
)

// var Literacy=mongoose.model("Literacy",literacySchema);
// module.exports=Literacy;
 module.exports = mongoose.model('literacy', literacySchema);