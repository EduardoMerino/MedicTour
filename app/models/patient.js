const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PatientSchema = new Schema({
  name: {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true}
  },
  email: {type: String, required: true},
  phone: {type: String, required: true},
  birthdate: {type: Date, required: true},
  genre: {type: String, enum: ['Male', 'Female', 'Other'], required: true},
  country: {type: String, required: true}
});

module.exports = mongoose.model('Patient', PatientSchema);
