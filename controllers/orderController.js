const db = require('../db/dbController')
const {sendMail} = require("../mailer/mailer");
const {getOrCreatePatient,
    getOrCreateOrganization,
    getOrCreateUser,
    createOrder} = require('../function/order')
async function postOrder(req,res) {
    try {
        const {patient, whose, type, message, messageFile, alertType, creator, mailingAddress,proxy} = req.body;
        const patientDB = await getOrCreatePatient(patient)
        let creatorDB = {}
        if(whose===2) {
            // Get or create organization and user
            const organizationDB = await getOrCreateOrganization(creator);
            creatorDB = await getOrCreateUser(creator, organizationDB);
        }
        // Create order
        const response = await createOrder(creatorDB, patientDB, type,proxy,messageFile, message, alertType, mailingAddress);
        sendMail(patientDB.Email,'re','123456')
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
async function getAllOrganization(req,res){
    res.send(await db.getAllOrganization());
}

module.exports={
    postOrder,getAllOrganization
}