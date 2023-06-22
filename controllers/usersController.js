const db = require('../db/dbController')
async function postUser(req,res){
    const {First_name,Last_name,Personal_number,Mob_number,Address1,Address2,Postcode,Post_town,Email,Role,OrganizationID,Position} = req.body
    res.send(await db.createUser(First_name,Last_name,Personal_number,Mob_number,Address1,Address2,Postcode,Post_town,Email,Role,OrganizationID,Position));
}
async function getAllUsers(req,res){
    res.send(await db.getAllUsers());
}
async function getUser(req,res){
    const {number}=req.query
    res.send(await db.getUserByBankId(number)|| null );
}
async function getTemplates(req,res){
    const {id} = req.params
    res.send(await db.getTemplateByUser(id));
}
async function createTemplates(req,res){
    const {id} = req.params
    const {templates} = req.body
    res.send(await db.createTemplate(id,templates));
}
module.exports={
    postUser,getAllUsers,getUser,getTemplates,createTemplates
}