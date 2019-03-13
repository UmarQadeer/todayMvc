const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Student
let Student = new Schema({
  name: {
    type: String
  },
  standard: {
    type: String
  },
  age: {
    type: String
  }
},{
    collection: 'student'
});



let Register = new Schema({
  name: {
    type: String
  },
  mobile: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'userregister'
});

module.exports = mongoose.model('Student',Student);
module.exports = mongoose.model('Register',Register);
