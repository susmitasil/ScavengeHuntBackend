const mongoose = require("mongoose")

const alertsSchema = new mongoose.Schema(
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
        type: String,
      },
      branch_incharge: {
        type: String,
      },
      pin_covered: {
        type: Array,
      },
    },
    {
      timestamps: {
        createdAt: true,
        updatedAt: true,
      },
    }
  );
  