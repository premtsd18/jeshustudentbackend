const mongoose = require('mongoose');
const _ = require('lodash');


const Student = mongoose.model('Student');



module.exports.poststudent = async (req, res, next) => {
   // var result = await Result.find({}).sort({ bidid: -1 }).limit(180)
   // return res.status(200).json({ status: true, "result": result });
   
  
   const stud= new Student(req.body)
   stud.save();

}
module.exports.putStudent=async (req, res, next) => {
 
 try{
   var student= await Student.findOne({_id:req.body._id})
  
  student.name=req.body.name;
  student.mobileNo=req.body.mobileNo;
  student.dob=req.body.dob;
  student.age=req.body.age;
  student.ad1=req.body.ad1;
  student.ad2=req.body.ad2;
  student.state=req.body.state;
  student.city=req.body.city;
  student.pincode=req.body.pincode;
  student.fname=req.body.fname;
  student.mname=req.body.mname;
  student.check=req.body.check;
  student.textboxarea=req.body.textboxarea;
  await student.save()
  return res.status(200).json({ status: true });
 }catch(data){
   console.log(data)
  return res.status(404).json({ status: false });}
 
}

module.exports.getstudents=async (req, res, next) => {
  const students=await Student.find();
  return res.status(200).json({ status: true, "students": students });
}

module.exports.deletestudent=async (req, res, next) => {
  
  try{
    
 await Student.deleteOne({_id:req.body.id});
  }catch{
    return res.status(404).json({ status: false});
  }
 return res.status(200).json({ status: true});
}

module.exports.getstudentdata=async (req, res, next) => {
 
  var student= await Student.findOne({_id :req.params.id})
  if(student){
    return res.status(200).json({ status: true,student:student});
  }
  else
  return res.status(404).json({ status: false});
}



