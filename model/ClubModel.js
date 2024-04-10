const mongoose = require("mongoose")

const ClubSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    student: [
        {
          type: mongoose.Schema.Types.ObjectId, // mongoose schema me jao object jiska type id ho use lelo
          ref: "Student", // club wale schema me jana hai
        },
      ],
    });

const ClubModel = mongoose.model("Club",ClubSchema)

module.exports = ClubModel;