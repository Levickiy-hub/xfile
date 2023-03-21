const db = require('../db/dbController')
async function getData(req,res){
    res.send(await db.getAllUsers());
}

module.exports={
    getData
}