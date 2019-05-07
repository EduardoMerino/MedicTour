const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var RoleSchema = new Schema({
  name: {type: String, required: true},
  edit_register_state: {type: Boolean, required: true},
  edit_register: {type: Number, required: true},
  edit_medic: {type: Number, required: true},
  edit_patient: {type: Number, required: true},
  edit_hospital: {type: Number, required: true},
  edit_speciality: {type: Number, required: true},
  edit_role: {type: Number, required: true},
  edit_users: {type: Number, required: true}
});

/*
 * Numbers work in a similar way than Linux permission system:
 * Bits are: create, modify and delete. Example:
 * 101 (6): can create and delete, but not modify
 * 000 (0): cannot create, delete nor modify
 * 011 (3): can modify an delete, but not modify
 */
 
module.exports = mongoose.model('Role', RoleSchema);
