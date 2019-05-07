const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true}
  },
  phone: {type: String, required: false},
  email: {type: String, required: true},
  password: {type: String, required: true},
  //salt: {type: String, required: true},
  hospital: {type: String, required: false},
  role_id: {type: String, required: true},
  register_id: [{type: String, required: false}]
});

module.exports = mongoose.model('User', UserSchema);
