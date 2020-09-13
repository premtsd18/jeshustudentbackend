const mongoose = require('mongoose');
const _ = require('lodash');


const Student = mongoose.model('Student');



module.exports.poststudent = async (req, res, next) => {
   // var result = await Result.find({}).sort({ bidid: -1 }).limit(180)
   // return res.status(200).json({ status: true, "result": result });
   
  
   const stud= new Student(req.body)
   stud.save();

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




