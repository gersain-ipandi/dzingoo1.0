const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
    categorie_formation: {
    type: String,
    required: true
  },
  niveau: {
    type: Number,
    required: true
  },
  titre_formation: {
    type: String,
    required: true
  },
  libele_desc_formation_1: {
    type: String,
    required: true
  },
  desc_formation_1: {
    type: String,
    required: true
  },
  libele_desc_formation_2: {
    type: String,
   
    default: ""
  },
  desc_formation_2: {
    type: String,
    
    default: ""
  },
  libele_desc_formation_3: {
    type: String,
 
    default: ""
  },
  desc_formation_3: {
    type: String,
   
    default: ""
  },
  libele_desc_formation_4: {
    type: String,
    
    default: ""
  },
  desc_formation_4: {
    type: String,
  
    default: ""
  },
  libele_desc_formation_5: {
    type: String,
   
    default: ""
  },
  desc_formation_5: {
    type: String,
  
    default: ""
  },
  libele_desc_formation_6: {
    type: String,
   
    default: ""
  },
  desc_formation_6: {
    type: String,
  
    default: ""
  },
  libele_desc_formation_7: {
    type: String,
    
    default: ""
  },
  desc_formation_7: {
    type: String,
  
    default: ""
  },
  libele_desc_formation_8: {
    type: String,
  
    default: ""
  },
  desc_formation_8: {
    type: String,
  
    default: ""
  },
  libele_desc_formation_9: {
    type: String,
 
    default: ""
  },
  desc_formation_9: {
    type: String,
  
    default: ""
  },
  libele_desc_formation_10: {
    type: String,
  
    default: ""
  },
  desc_formation_10: {
    type: String,

    default: ""
  },
  details_formation: {
    type: String,
    
    default: ""
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ModelFormation = mongoose.model('ModelFormation', formationSchema);

module.exports = ModelFormation;
