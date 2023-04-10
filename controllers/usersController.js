const db = require('../db/dbController')
async function postUser(req,res){
    const {First_name,Last_name,Personal_number,Mob_number,Address1,Address2,Postcode,Post_town,Email,Role,OrganizationID,Position} = req.body
    res.send(await db.createUser(First_name,Last_name,Personal_number,Mob_number,Address1,Address2,Postcode,Post_town,Email,Role,OrganizationID,Position));
}
async function getAllUsers(req,res){
    res.send(await db.getAllUsers());
}

module.exports={
    postUser,getAllUsers
}