const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: String
  }
});

const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;