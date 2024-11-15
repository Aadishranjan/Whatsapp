const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Aadish:0cOLg4tC9DxXG1Ux@cluster0.rzrzpcy.mongodb.net/chatapp')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  dp: {
    type: String,
  },
  chats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

userSchema.methods.comparePassword = function (inputPassword) {
  return this.password === inputPassword; 
};

module.exports = mongoose.model('User', userSchema);
