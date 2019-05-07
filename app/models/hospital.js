const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var HospitalSchema = new Schema({
  address: {
    street: {type: String, required: true},
    number: {type: Number, required: true},
    interior: {type: String, required: false},
    location: {type: String, required: true},
    postal_code: {type: Number, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true, default: 'México'}
  },
  phone: [{type: String, required: true}]
});

module.exports = mongoose.model('Hospital', HospitalSchema);
