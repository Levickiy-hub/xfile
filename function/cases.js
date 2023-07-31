const db = require('../db/dbController')
const {sendMail} = require('../mailer/mailer')
    //Дописать зависимоти кто заказывал организаия или пациент
async function sendAlert(orderId){
    try {
        const order = await db.getOrdersById(orderId);
        const alertType = order.Alert_Type.split(',');
        const patient = await db.getUsersById(order.PatientID)
        alertType.forEach(type=>{
            if(type==='1'){

            }
            else if( type==='2'){
                sendMail(patient.Email,'re','отправлено')
            }
            else if(type === '3'){

            }
        });
    }
    catch (e){
        console.log(e)
    }


}
module.exports = {
    sendAlert
}