/*  */

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  statut: {
    type: String,
    required: true,
    default: "en attente"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ModelProject = mongoose.model('ModelProject', projectSchema);

module.exports = ModelProject;
