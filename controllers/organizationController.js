const db = require('../db/dbController')
async function postOrganization(req,res){
    const {Clinic_name,Org_name,Org_number,Address1,Address2,Postcode,Post_town,
        Billing_address1,Billing_address2,Billing_postcode,Billing_post_town,Billing_email,Phone,Mob_number,Type,Payment_plan,Journal_system,Xray_system} = req.body
    res.send(await db.createOrganization(Clinic_name,Org_name,Org_number,Address1,Address2,Postcode,Post_town,Billing_address1,
        Billing_address2,Billing_postcode,Billing_post_town,Billing_email,Phone,Mob_number,Type,Payment_plan,Journal_system,Xray_system));
}
async function getAllOrganization(req,res){
    res.send(await db.getAllOrganization());
}
async function getOrdersByOrganization(req,res){
    const {id}=req.params;
    const orders = await db.getOrdersByOrganization(id)
    console.log(orders)
    const response = orders[0].map(order =>
        order.Organization_name?
            order:
            {...order,Organization_name:'Patient'}
    )
    res.send(response);
}
async function getOrganizationById(req,res){
    const {id}=req.params;
    res.send(await db.getOrganizationById(id));
}
async function getAllOrganizationByType(req,res){
    const {type}=req.query
    res.send(await db.getOrganizationByType(type))
}
module.exports={
    postOrganization,getAllOrganization,getOrganizationById,getAllOrganizationByType,
    getOrdersByOrganization
}