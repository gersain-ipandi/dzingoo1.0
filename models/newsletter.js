const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
  },
  statut: {
    type: String,
    required: true,
    default: "inscrit"
  },
  dateDesinscription: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ModelNewsletter = mongoose.model('ModelNewsletter', newsletterSchema);

module.exports = ModelNewsletter;
