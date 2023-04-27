const db =require('./dbConfig')

async function getAllUsers(){
    return await db.Users.findAll()
}
async function getUserByBankId(BankId){
    return await db.Users.findOne({where: {Personal_number:BankId}})
}
async function createUser(First_name,Last_name,Personal_number,Mob_number,Address1,Address2,Postcode,Post_town,Email,Role,OrganizationID,Position){
   return await db.Users.create({First_name:First_name,Last_name:Last_name,Personal_number:Personal_number,Mob_number:Mob_number,Address1:Address1,Address2:Address2,
       Postcode:Postcode,Post_town:Post_town,Email:Email,Role:Role,OrganizationID:OrganizationID,Position:Position})
}
async function createOrganization(Clinic_name,Org_name,Org_number,Email,Address1,Address2,Postcode,Post_town,
                                  Billing_address1,Billing_address2,Billing_postcode,Billing_post_town,Billing_email,Phone,Billing_phone,Type,Payment_plan,Journal_system,Xray_system){
    return await db.Organizations.create({Clinic_name:Clinic_name,Organization_name:Org_name,Organization_number:Org_number,Email:Email,Address1:Address1,Address2:Address2,Postcode:Postcode,Post_town:Post_town,
        Billing_address1:Billing_address1,Billing_address2:Billing_address2,Billing_postcode:Billing_postcode,Billing_post_town:Billing_post_town,
        Billing_email:Billing_email,Phone:Phone,Billing_phone:Billing_phone,Type:Type,Payment_plan:Payment_plan,Journal_system:Journal_system,Xray_system:Xray_system})
}
async function getAllOrganization(){
    return await db.Organizations.findAll()
}
async function getOrganizationByName(name){
    return await db.Organizations.findOne({where: {Organization_name: name}})
}
async function getOrganizationById(id){
    return await db.Organizations.findOne({where: {id: id}})
}
async function createOrder(Creator_UserID,OrganizationID,PatientID,Permission_BankID,Permission_file,Order_docs_list,Order_Message,Alert_Type,Status='waite',mallingAddress){
    return await db.Orders.create({Creator_UserID:Creator_UserID,OrganizationID:OrganizationID,PatientID:PatientID,Permission_BankID:Permission_BankID,
        Permission_file:Permission_file,Order_docs_list:Order_docs_list,Order_Message:Order_Message,Alert_Type:Alert_Type,Status:Status,mallingAddress:mallingAddress})
}
async function getOrdersByUser(userID){
    return await db.Organizations.findAll({where: {Creator_UserID:userID}})
}
async function getOrdersByPatient(userID){
    return await db.Organizations.findAll({where: {PatientID:userID}})
}
async function getOrdersByOrganization(organizationID){
    return await db.Organizations.findAll({where:{OrganizationID:organizationID}})
}

module.exports={getAllUsers,createUser,createOrganization,getAllOrganization,createOrder,
    getOrdersByOrganization,getOrdersByPatient,getOrdersByUser,getUserByBankId,getOrganizationByName,getOrganizationById}