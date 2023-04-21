const db = require('../db/dbController')
async function postOrder(req,res){
    const{patient,whose,type,message,alertType,creator,mailingAddress} =req.body
    let patientDB=await db.getUserByBankId(patient.personNumber)
    if(!patientDB){
        patientDB = await db.createUser(patient.fornamn,patient.efternamn,patient.personNumber,patient.telNr,patient.gatuadress,
            patient.address2,patient.postnummer,patient.postOrt,patient.ePostAddress,null,null,null,null)
    }
    if(whose===1){
        res.send({});
    }
    else if(whose===2){
        let creatorDB=await db.getUserByBankId(creator.person.personnummer)
        if(!creatorDB){
            let organizationDB = await db.getOrganizationByName(creator.org.organisation)
            if(!organizationDB) {
                organizationDB = await db.createOrganization(null,creator.org.organisation,creator.Faktureringsadress.orgNr,
                    creator.org.orgAdress1,creator.org.orgAdress1,creator.org.orgPostnummer,creator.org.orgOrt, creator.Faktureringsadress.fakturAdress1,
                    creator.Faktureringsadress.fakturAdress1,creator.Faktureringsadress.fakturPostnummer,creator.Faktureringsadress.fakturOrt,creator.Faktureringsadress.fakturEmail,creator.org.orgTel,
                    creator.Faktureringsadress.fakturTel,null,null,null,null)
            }
            creatorDB = await db.createUser(creator.person.fornamn,creator.person.efternamn,creator.person.personnummer,creator.person.telNr,null,
                null,null,null,creator.person.email,null,null,organizationDB.id,creator.person.befattning)
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