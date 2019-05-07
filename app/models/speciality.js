const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var SpecialitySchema = new Schema({
  name: {type: String, required: true},
});

module.exports = mongoose.model('Speciality', SpecialitySchema);
