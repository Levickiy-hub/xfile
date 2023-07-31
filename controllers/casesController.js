const db = require('../db/dbController')
const {getFilesName} = require('../function/file')
const {sendAlert} = require('../function/cases')

async function postCases(req,res){
    try{
       const { OrderId, filesPdf, fileXray, casesMessage,userId}=req.body
       const data = await db.createCase(
           OrderId,
           getFilesName(filesPdf),
           getFilesName(fileXray),
           casesMessage,
           userId
           );
        const date = new Date();
        await db.updateOrderStatus(OrderId,`Klart ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
        res.send(data);
        sendAlert(OrderId)
    }
    catch (e) {

    }
}

module.exports={
    postCases
}