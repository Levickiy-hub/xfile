const db =require('./dbConfig')

async function getAllUsers(){
    return db.Users.findAll()
}
module.exports={getAllUsers}