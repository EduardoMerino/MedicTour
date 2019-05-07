const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var MedicSchema = new Schema({
  name: {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true}
  },
  speciality_id: [{type: String, required: true}],
  phone: {type: String, required: false},
  email: {type: String, required: true},
  office: [{
      hospital_id: {type: String, required: true},
      floor: {type: String, required: true},
      number: {type: String, required: true},
      phone: {type: String, required: false}
    }]
});

module.exports = mongoose.model('Medic', MedicSchema);
