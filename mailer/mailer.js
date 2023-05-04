const {LOGIN_MAIL, PASSWORD_MAIL} = require( "../config/configMailer");
//включить разрешение в аккаунте гугла
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:LOGIN_MAIL,
        pass:PASSWORD_MAIL
    }
})

function sendMail(to,subject='',text=''){

    const mailOptions ={
        from:'levickiysyava@gmail.com', //откого
        to:to, //кому
        subject:subject, // тема
        text:text //сообщение
    }
    transporter.sendMail(mailOptions) // второй параметр ф-я для обработки ошибок
}
module.exports={
    sendMail
}