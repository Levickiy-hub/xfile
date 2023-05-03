import {LOGIN_MAIL, PASSWORD_MAIL} from "../config/configMailer";
//включить разрешение в аккаунте гугла
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:LOGIN_MAIL,
        pass:PASSWORD_MAIL
    }
})

const mailOptions ={
    from:'', //откого
    to:'', //кому
    subject:'', // тема
    text:'' //сообщение
}
transporter.sendMail(mailOptions)