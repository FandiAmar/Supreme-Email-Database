const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    Uid: {
      type: String,
      required : true,
    },
    Username: {
      type: String,
      required : true,
    },
    info:{
      type: Object,
    },
    Email: {
      type: String,
      required : true,
    },
    Password: {
      type: String,
      required : true,
    },  
    HWID: {
      type: Array,
      required : true,
    },  
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
