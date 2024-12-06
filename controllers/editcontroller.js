const StudentModel = require("../models/StudentSchema.js");

const editcontroller=async(req,res)=>{
    
try{
const record= await StudentModel.findById({'_id': req.params._id})
    if(record){
res.render('edit', {'record': record})
}else{
    res.render('edit')
}
}catch(err){
    console.log(err.message);
    
}
}

const updatecontroller=async(req,res)=>{
try{
const update= await StudentModel.findByIdAndUpdate(req.params._id, req.body)
if(update){
res.redirect('/')
}else{
    res.redirect('read')
}
}catch(err){
console.log(error.message);

}
}



const deletecontroller=async(req,res)=>{
    try{
        const deleterecord=await StudentModel.findByIdAndDelete(req.params._id)
        if(deleterecord){
            res.redirect('read')
        }else{
            res.redirect('/')
        }
    }catch(err){

    }
}


module.exports={editcontroller,updatecontroller, deletecontroller}
