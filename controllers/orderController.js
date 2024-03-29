const db = require('../db/dbController')
const {sendMail} = require("../mailer/mailer");
const {getOrCreatePatient,
    getOrCreateOrganization,
    getOrCreateUser,
    createOrder} = require('../function/order')
async function postOrder(req,res) {
    try {
        const {clinic,patient, whose, type, message, messageFile, alertType, creator, mailingAddress,proxy} = req.body;
        const patientDB = await getOrCreatePatient(patient)
        let creatorDB = {}
        if(whose===2) {
            // Get or create organization and user
            const organizationDB = await getOrCreateOrganization(creator);
            creatorDB = await getOrCreateUser(creator, organizationDB);
        }
        // Create order
        const response = await createOrder(clinic,creatorDB, patientDB, type,proxy,messageFile, message, alertType, mailingAddress);
        sendMail(patientDB.Email,'re','123456')
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
async function getOrders(req,res){
    const {patientId,clinicId}=req.query;
    if(patientId !==undefined && clinicId !==undefined){
        const orders = await db.getOrdersByClinicAndPatient(clinicId,patientId)
        res.send(orders)
    }
}
async function getOrderById(req,res){
    const {id}=req.params;
    const order = await db.getOrdersById(id)
    const patient = await db.getUsersById(order.PatientID)
    let creator = null;
    if(order.Creator_UserID){
        creator = await db.getCreatorOrder(order.Creator_UserID)
    }
    res.send({order:order,patient:patient,creator: creator[0][0]});
}

module.exports={
    postOrder,getOrderById, getOrders
}