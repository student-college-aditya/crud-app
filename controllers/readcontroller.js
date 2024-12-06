const StudentModel = require("../models/StudentSchema.js")

const readcontroller=async(req,res)=>{
try{

  const records= await StudentModel.find({})
  if(records){
    res.render('read',{'records' :records})
  }else{
res.render('read.ejs')}
}catch(err){
console.log(err.message);

}
}


module.exports=readcontroller