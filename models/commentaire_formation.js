/* Schema pour les commentaires sur une formation */
const mongoose = require('mongoose');

const commentFormationSchema = new mongoose.Schema({
  idFormation: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  commentaire: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ModelCommentFormation = mongoose.model('ModelCommentFormation', commentFormationSchema);

module.exports = ModelCommentFormation;
