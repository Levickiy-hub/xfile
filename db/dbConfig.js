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
        name: {type: Sequelize.STRING},
        description: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        address: {type: Sequelize.STRING},
        phone: {type: Sequelize.STRING},
        type: {type: Sequelize.STRING},
        LogSystemType: {type: Sequelize.STRING}
    },
    {
        // Здесь определяются другие настройки модели
    }
);
Organizations.sync({alter: true}).then(r =>console.log('Organizations Create')).catch(err=>console.error(err.message))

const Users = sequelize.define(
    'Users',
    {
        id:{type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey: true
        },
        name: {type: Sequelize.STRING},
        bankId: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        address: {type: Sequelize.STRING},
        phone: {type: Sequelize.STRING},
        role: {type: Sequelize.STRING},
        organizationId: {type: Sequelize.STRING}

    },
    {
        // Здесь определяются другие настройки модели
    }
)
Users.sync({alter: true}).then(r =>console.log('Users Create')).catch(err=>console.error(err.message))
const Requests = sequelize.define(
    'Requests',
    {
        id:{type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey: true
        },
        userId: {type: Sequelize.INTEGER},
        organizationId: {type: Sequelize.INTEGER},
        whom: {type: Sequelize.INTEGER},
        text: {type: Sequelize.STRING},
        description: {type: Sequelize.STRING},
        alertType: {type: Sequelize.STRING},
        status: {type: Sequelize.STRING},
    },
    {
        // Здесь определяются другие настройки модели
    }
)
Requests.sync({alter: true}).then(r =>console.log('Requests Create')).catch(err=>console.error(err.message))
const Answers = sequelize.define(
    'Answers',
    {
        id:{type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey: true
        },
        requestId: {type: Sequelize.INTEGER},
        text: {type: Sequelize.INTEGER},
        file: {type: Sequelize.INTEGER},
        description: {type: Sequelize.STRING},
    },
    {
        // Здесь определяются другие настройки модели
    }
)
Answers.sync({alter: true}).then(r =>console.log('Answers Create')).catch(err=>console.error(err.message))
module.exports = {
    sequelize, Users,Organizations,Requests,Answers
}