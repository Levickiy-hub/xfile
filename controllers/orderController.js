const db = require('../db/dbController')
async function postOrder(req,res){
    const{patient,whose,type,message,alertType,creator,mailingAddress} =req.body
    let patientDB=await db.getUserByBankId(patient.PersonNumber)
    if(!patientDB){
        patientDB = await db.createUser(patient.First_name,patient.Last_name,patient.PersonNumber,patient.Phone,patient.Address1,
            patient.Address2,patient.Postcode,patient.Post_town,patient.Email,null,null,null,null)
    }
    if(whose===1){
        res.send({});
    }
    else if(whose===2){
        let creatorDB=await db.getUserByBankId(creator.person.Personal_number)
        if(!creatorDB){
            let organizationDB = await db.getOrganizationByName(creator.Organization_name)
            if(!organizationDB) {
                organizationDB = await db.createOrganization(null,creator.Organization_name,creator.Organization_number,
                    creator.org.Adress1,creator.org.Address1,creator.org.Postcode,creator.org.Post_town, creator.Billing.Address1,
                    creator.Billing.Address1,creator.Billing.Postcode,creator.Billing.Post_town,creator.Billing.Email,creator.org.Phone,
                    creator.Billing.Phone,null,null,null,null)
            }
            creatorDB = await db.createUser(creator.person.First_name,creator.person.Last_name,creator.person.Personal_number,creator.person.Mob_number,null,
                null,null,null,creator.person.Email,null,null,organizationDB.id,creator.person.Position)
        }
        const response = await db.createOrder(creatorDB.id,1,patientDB.id,'','',type.toString(),message,alertType.toString(),'waite',mailingAddress)
        res.send(response);
    }
}
async function getAllOrganization(req,res){
    res.send(await db.getAllOrganization());
}

module.exports={
    postOrder,getAllOrganization
}