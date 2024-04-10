const mongoose = require("mongoose");

// Schema
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  rollNumber: {
    type: Number,
    min: 1,
  },
  result: [
    {
      subject: {
        type: String,
        trim: true,
        required: true,
      },
      marks: {
        type: Number,
        min: 1,
      },
    },
  ],
  club: [
    {
      type: mongoose.Schema.Types.ObjectId, // mongoose schema me jao object jiska type id ho use lelo
      ref: "Club", // club wale schema me jana hai
    },
  ],
});

// model
const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
