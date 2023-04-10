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

module.exports={
    postOrganization,getAllOrganization
}