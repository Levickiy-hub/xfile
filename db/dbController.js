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
async function getUsersById(id){
    return await db.Users.findOne({where: {id:id}})
}
async function createOrganization(Clinic_name,Org_name,Org_number,Email,Address1,Address2,Postcode,Post_town,
                                  Billing_address1,Billing_address2,Billing_postcode,Billing_post_town,Billing_email,Phone,Billing_phone,Type,Payment_plan,Journal_system,Xray_system,Billing_reference){
    return await db.Organizations.create({Clinic_name:Clinic_name,Organization_name:Org_name,Organization_number:Org_number,Email:Email,Address1:Address1,Address2:Address2,Postcode:Postcode,Post_town:Post_town,
        Billing_address1:Billing_address1,Billing_address2:Billing_address2,Billing_postcode:Billing_postcode,Billing_post_town:Billing_post_town,
        Billing_email:Billing_email,Phone:Phone,Billing_Phone:Billing_phone,Type:Type,Payment_plan:Payment_plan,Journal_system:Journal_system,Xray_system:Xray_system,Billing_reference:Billing_reference})
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
async function getOrganizationByType(type){
    return await db.Organizations.findAll({where: {Type: type}})
}
async function createOrder(Creator_UserID,OrganizationID,PatientID,Permission_BankID,Permission_file,Order_docs_list,Order_Message,Order_Message_File,Alert_Type,Status='waite',mallingAddress){
    return await db.Orders.create({Creator_UserID:Creator_UserID,OrganizationID:OrganizationID,PatientID:PatientID,Permission_BankID:Permission_BankID,
        Permission_file:Permission_file,Order_docs_list:Order_docs_list,Order_Message:Order_Message,Order_Message_File:Order_Message_File,Alert_Type:Alert_Type,Status:Status,mailingAddress:mallingAddress})
}
async function getOrdersByUser(userID){
    return await db.Orders.findAll({where: {Creator_UserID:userID}})
}
async function getOrdersById(id){
    return await db.Orders.findOne({where: {id:id}})
}
async function getOrdersByPatient(userID){
    return await db.Orders.findAll({where: {PatientID:userID}})
}
async function getOrdersByClinicAndPatient(clinicId,userID){
    return await db.Orders.findAll({where: {OrganizationID:clinicId,PatientID:userID}})
}
async function getOrdersByOrganization(organizationID){
    return await db.sequelize.query(`select orders.id,patient.First_name,patient.Last_name, patient.Personal_number,orders.createdAt, orders.Status, organizations.Organization_name
    from orders left join users as patient on patient.id = orders.PatientID
    left join users as creator on orders.Creator_UserID = creator.id
    left join organizations on organizations.id = creator.OrganizationID where orders.OrganizationID=${organizationID}`)
}

async function getCreatorOrder(creatorId){
    return await db.sequelize.query(`select users.First_name,users.Last_name,users.Email,users.Position,users.Mob_number,organizations.Organization_name,
organizations.Organization_number,organizations.Email as org_Email, organizations.Address1, organizations.Phone as org_Phone from users join organizations on users.OrganizationID = organizations.id where users.id=${creatorId}`)
}
async function getTemplateByUser(userId){
    return await db.Templates.findAll({where:{UserID:userId}})
}
async function createTemplate(userId,text){
    return await db.Templates.create({UserID:userId,Templates: text})
}
async function createCase(orderId,filePdf,fileXray,message,userId){
    return await db.Cases.create({ OrderID:orderId,
        Files_pdf:filePdf,
        Files_xray:fileXray,
        Case_Message:message,
        UserID:userId
    });
}

async function updateOrderStatus(orderId,status){
    return await db.Orders.update( { Status: status},
        { where: { id: orderId } })
}

module.exports={getAllUsers,createUser,createOrganization,getAllOrganization,createOrder,
    getOrdersByOrganization,getOrdersByPatient,getOrdersByUser,
    getOrdersByClinicAndPatient,getUserByBankId,getOrganizationByName,
    getOrganizationById,getOrganizationByType,
    getOrdersById,getUsersById,getCreatorOrder,
    getTemplateByUser,createTemplate,
    createCase,updateOrderStatus}