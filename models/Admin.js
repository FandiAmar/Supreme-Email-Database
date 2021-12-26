const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    Uid: {
      type: String,
      required : true,
    },
    username: {
        type: String,
        required : true,
      },
    Email: {
      type: String,
      required : true,
    },
    Password: {
      type: String,
      required : true,
    },    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
