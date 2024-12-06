const { name } = require("ejs");
const StudentModel = require("../models/StudentSchema.js");

const homecontroller = (req, res) => {
    res.render('index');
};

const CreateController = async (req, res) => {
// console.log(req.body);
const record= await StudentModel({
    name: req.body.name,
    city: req.body.city,
    email: req.body.email,
    contact: req.body.contact

})

if(record){
    await record.save()
    console.log("data Saved");
    
}else{
console.log("Data not saved");

}
res.render('index')


}
module.exports = { homecontroller, CreateController };
