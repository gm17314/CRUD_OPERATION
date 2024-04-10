const express = require("express");
const app = express();
const mongoose = require('mongoose');
const StudentModel = require("./model/StudentModel")
const ClubModel = require("./model/ClubModel")


mongoose.connect('mongodb://127.0.0.1:27017/college',)
.then(()=>console.log("Db connected"))
.catch((err)=>{console.log(err)})

//////<------------ CURD Operation ------------>

//// <----- Create ------>

/// Create type 1
// const s1 = new StudentModel({
//     name:"Gaurav Maurya",
//     rollNumber: 2001331530070,
//     result:[{subject:"Python",marks:80},{subject:"Javascript",marks:70}]
// })
// s1.save()
// .then(()=>{console.log("document saved")})
// .catch((err)=>{console.log(err)})

/// Create type 2
// const data = {
//     name:"Ayush Verma",
//     rollNumber: 2001331530059,
//     result:[{subject:"Python",marks:80},{subject:"Javascript",marks:70}]
// }
// StudentModel.create(data)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>console.log(err))

///Create type 3
// const data1 = [
//     {
//         name:"Bhonu",
//         rollNumber: 20013315300167,
//         result:[{subject:"Python",marks:60},{subject:"Javascript",marks:20}]
//     },
//     {
//         name:"Jayesha Malhotra",
//         rollNumber: 2001331530069,
//         result:[{subject:"Python",marks:50},{subject:"Javascript",marks:10}]
//     }
// ]

// StudentModel.insertMany(data1)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>console.log(err))


////<----- Read ------>

///Read type 1
// StudentModel.find()
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

// StudentModel.find({name:"Raghvi Tiwari"})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

/// Read type 2
// StudentModel.findOne()
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

// StudentModel.findOne({"result.subject":"Python"})  
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

///Read type 3
// StudentModel.findById("660add157c2046eef120b5a8")
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})


////<---------- Update --------->

///Update type 1
// StudentModel.updateOne({name:"Raghvi Tiwari"},{name:"Raghavi Tiwari"})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

// StudentModel.find({rollNumber:2001331530071})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

///Update type 2
// StudentModel.updateMany({"result.subject":"Python"},{$set:{"result.$.subject":"Python3.8"}})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

// StudentModel.findOne({rollNumber:2001331530071})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

///Update type 3
// StudentModel.findOneAndUpdate({rollNumber:20013315300119},{name:"Nishtha Chaudhary Verma"})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

// StudentModel.find({rollNumber:20013315300119})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

///Update type 4
// StudentModel.findByIdAndUpdate("660ae10019d2ea2336a0ad78",{name: "Maurya Nishtha Chaudhary Verma"})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})


////<---------- Delete --------->
///Delete type 1
// StudentModel.deleteOne({name:"Bhonu"})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

///Delete type 2
// StudentModel.deleteMany({name:"Nishtha Chaudhary"})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

///Delete type 3
// StudentModel.findOneAndDelete({name:"Jayesha Malhotra"})
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})

///Delete type 4
// StudentModel.findByIdAndDelete("660adf74dce791a9ebd015a7")
// .then((data)=>{console.log("data is : ",data)})
// .catch((err)=>{console.log(err)})



////// merging two collection
// const data = [{
//     title:"dancing club",
//     description:"mem sahab ka mujrakhana"
// }
// ,{
//     title:"coding club",
//     description:"Yeh hai coding club"
// }]
// ClubModel.insertMany(data)
// .then((data)=>{console.log(data)})
// .catch((err)=>console.log(err))

// async function addClub(clubName,studentName){
//     const club = await ClubModel.findOne({title:clubName})
//     const student = await StudentModel.findOne({name:studentName})
//     if (club && student){
//         student.club.push(club)
//         await student.save()
//     }
// }
// addClub("coding club","Ayush Verma")
// async function addStudent(studentName,clubName){
//     const student = await StudentModel.findOne({name:studentName})
//     const club = await ClubModel.findOne({title:clubName})
//     if (club && student){
//         club.student.push(student)
//         await club.save()
//     }
// }
// addStudent("Gaurav Maurya","coding club")
// addStudent("Ayush Verma","coding club")

// StudentModel.findOne({name:"Gaurav Maurya"})
// .populate("club")   
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>console.log(err))



app.listen(8080,()=>{
    console.log("Server connected at 8080")
})