const mongoose = require("mongoose")

const beetleNutSchema = new mongoose.Schema(
    {
      institute: {
        type: String,
      },
      branch_name: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      contact: {
        type: Array,
      },
      branch_incharge: {
        type: String,
      },
      pin_covered: {
        type: Array,
      },
      username: {
        type: String,
      },
      password: {
        type: String,
      },

    },
    {
      timestamps: {
        createdAt: true,
        updatedAt: true,
      },
    }
  );
  
  module.exports = mongoose.model('BeetleNut', beetleNutSchema)