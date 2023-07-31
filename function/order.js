const db = require('../db/dbController')
const {getFilesName} = require('../function/file')
// Create patient if it doesn't exist
async function getOrCreatePatient(user){
    let userDB=await db.getUserByBankId(user.PersonNumber)
    if(!userDB){
        userDB = await db.createUser(user.First_name,user.Last_name,user.PersonNumber,user.Phone,user.Address1,
            user.Address2,user.Postcode,user.Post_town,user.Email,null,null,null,null)
    }
    return userDB
}
// Create organization if it doesn't exist
async function getOrCreateOrganization(creator) {
    let organizationDB = await db.getOrganizationByName(creator.Organization_name);
    if (!organizationDB) {
        organizationDB = await db.createOrganization(
            null,
            creator.Organization_name,
            creator.Organization_number,
            creator.org.Email,
            creator.org.Address1,
            creator.org.Ev,
            creator.org.Postcode,
            creator.org.Post_town,
            creator.Billing.Address1,
            creator.Billing.Ev,
            creator.Billing.Postcode,
            creator.Billing.Post_town,
            creator.Billing.Email,
            creator.org.Phone,
            creator.Billing.Phone,
            null,
            null,
            null,
            null,
            creator.Billing.reference,
        );
    }
    return organizationDB;
}

// Create user if it doesn't exist
async function getOrCreateUser(creator, organizationDB) {
    let creatorDB = await db.getUserByBankId(creator.person.Personal_number);
    if (!creatorDB) {
        creatorDB = await db.createUser(
            creator.person.First_name,
            creator.person.Last_name,
            creator.person.Personal_number,
            creator.person.Mob_number,
            null,
            null,
            null,
            null,
            creator.person.Email,
            null,
            organizationDB.id,
            creator.person.Position,
        );
    }
    return creatorDB;
}

    // function getMessageFile(messageFile) {
    //     if (messageFile.length === 0) {
    //         return null;
    //     }
    //     return messageFile.map(file => file.path).join('||');
    // }

// Create order
async function createOrder(clinicId,creatorDB={}, patientDB={}, type,proxy,messageFile, message, alertType, mailingAddress) {
    const response = await db.createOrder(
        creatorDB.id,
        clinicId,
        patientDB.id,
        "",
        getFilesName(proxy),
        type.toString(),
        message,
        getFilesName(messageFile),
        alertType.toString(),
        'wait',
        JSON.stringify(mailingAddress)
    );
    return response;
}




module.exports={
    getOrCreatePatient, getOrCreateOrganization, getOrCreateUser,createOrder
}