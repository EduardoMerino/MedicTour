const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var RegisterSchema = new Schema({
  patient_id: {type: String, required: true},
  medic_id: {type: String, required: true},
  speciality_id: {type: String, required: true},
  treatment: {type: String, required: false},
  requires_concierge: {type: Boolean, required: true},
  user_id: [{type: String, required: true}], //In case the patient requires concierge, the concierge is a user
  hospital_id: {type: String, required: true},
  status: {type: String, enum: ["Awaiting"/*TODO: add status*/, "Finished"]}
});

module.exports = mongoose.model('Register', RegisterSchema);
