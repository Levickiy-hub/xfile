const Sequelize = require("sequelize");
const sequelize = new Sequelize("xfile", "root", "12345", {
    dialect: "mysql",
    host: "localhost"
});

const Organizations = sequelize.define(
    'Organizations',
    {
       id:{type: Sequelize.INTEGER,
           autoIncrement:true,
           allowNull:false,
           primaryKey: true
       },
        Clinic_name: {type: Sequelize.STRING},
        Organization_name: {type: Sequelize.STRING},
        Organization_number: {type: Sequelize.STRING},
        Email: {type: Sequelize.STRING},
        Address1: {type: Sequelize.STRING},
        Address2: {type: Sequelize.STRING},
        Postcode: {type: Sequelize.STRING},
        Post_town: {type: Sequelize.STRING},
        Billing_address1: {type: Sequelize.STRING},
        Billing_address2: {type: Sequelize.STRING},
        Billing_postcode: {type: Sequelize.STRING},
        Billing_post_town: {type: Sequelize.STRING},
        Billing_email: {type: Sequelize.STRING},
        Phone: {type: Sequelize.STRING},
        Billing_Phone: {type: Sequelize.STRING},
        Type: {type: Sequelize.STRING},
        Payment_plan: {type: Sequelize.STRING},
        Journal_system: {type: Sequelize.STRING},
        Xray_system: {type: Sequelize.STRING},
        Billing_reference:{type: Sequelize.STRING},
    },
    {
        // Здесь определяются другие настройки модели
    }
);
Organizations.sync().then(r =>console.log('Organizations Create')).catch(err=>console.error(err.message))

const Users = sequelize.define(
    'Users',
    {
        id:{type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey: true
        },
        First_name: {type: Sequelize.STRING},
        Last_name: {type: Sequelize.STRING},
        Personal_number: {type: Sequelize.STRING},
        Mob_number: {type: Sequelize.STRING},
        Address1: {type: Sequelize.STRING},
        Address2: {type: Sequelize.STRING},
        Postcode: {type: Sequelize.STRING},
        Post_town: {type: Sequelize.STRING},
        Email: {type: Sequelize.STRING},
        Role: {type: Sequelize.STRING},
        Position: {type: Sequelize.STRING},
        OrganizationID: {type: Sequelize.INTEGER}
    },
    {
        // Здесь определяются другие настройки модели
    }
)
Users.sync().then(r =>console.log('Users Create')).catch(err=>console.error(err.message))
const Orders = sequelize.define(
    'Orders',
    {
        id:{type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey: true
        },
        Creator_UserID: {type: Sequelize.INTEGER},
        OrganizationID: {type: Sequelize.INTEGER},
        Creator_OrganizationID: {type: Sequelize.INTEGER},
        PatientID: {type: Sequelize.INTEGER},
        Permission_BankID: {type: Sequelize.STRING},
        Permission_file: {type: Sequelize.STRING},
        Order_docs_list: {type: Sequelize.STRING},
        Order_Message: {type: Sequelize.STRING},
        Alert_Type: {type: Sequelize.STRING},
        Status: {type: Sequelize.STRING},
        mailingAddress: {type: Sequelize.STRING},
    },
    {
        // Здесь определяются другие настройки модели
    }
)
Orders.sync().then(r =>console.log('Orders Create')).catch(err=>console.error(err.message))
const Cases = sequelize.define(
    'Cases',
    {
        id:{type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey: true
        },
        OrderID: {type: Sequelize.INTEGER},
        Files_pdf: {type: Sequelize.STRING},
        Files_xray: {type: Sequelize.STRING},
        Case_Message: {type: Sequelize.STRING},
        UserID: {type: Sequelize.INTEGER},
    },
    {
        // Здесь определяются другие настройки модели
    }
)
Cases.sync().then(r =>console.log('Cases Create')).catch(err=>console.error(err.message))
const Resend = sequelize.define(
    'Resend',
    {
        id:{type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey: true
        },
        CasesID: {type: Sequelize.INTEGER},
        Resend_email: {type: Sequelize.STRING},
        Resend_name: {type: Sequelize.STRING},
        Resend_organization: {type: Sequelize.STRING},
        Resend_message: {type: Sequelize.STRING},
        Recipient_UserID: {type: Sequelize.STRING},
        UserID: {type: Sequelize.INTEGER},
    },
    {
        // Здесь определяются другие настройки модели
    }
)
Resend.sync().then(r =>console.log('Resend Create')).catch(err=>console.error(err.message))
const Logins_BankID = sequelize.define(
    'Logins_BankID',
    {
        id:{type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey: true
        },
        UserID: {type: Sequelize.INTEGER},
        Response: {type: Sequelize.STRING},
    },
    {
        // Здесь определяются другие настройки модели
    }
)
Logins_BankID.sync().then(r =>console.log('Logins_BankID Create')).catch(err=>console.error(err.message))
module.exports = {
    sequelize, Users,Organizations,Orders,Cases,Resend,Logins_BankID
}