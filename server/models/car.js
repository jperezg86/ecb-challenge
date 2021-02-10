const mongoose =  require('mongoose');

const CarSchema = mongoose.Schema({
   description : {type : String, required : true},
   make: {type: String, required: true},
   model : {type: String, required: true},
   km : {type: Number, required : false},
   image : {type: String, required: false}
}, { collection : "cars"});

module.exports = mongoose.model('Car', CarSchema);