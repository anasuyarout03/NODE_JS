let nodemailer = require('nodemailer');
let dotenv = require('dotenv');
dotenv.config();

let transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'kuttihaha@gmail.com',
        pass:process.env.pass

    }
})

let mailOptions = {
    from: 'kuttihaha@gmail.com',
    to: 'Anasuyarout0000@gmail.com',
    subject:'Send from node feb 2 email',
    text:"Hello Text",
    html:"<b>Hello World?</b>"
}

transport.sendMail(mailOptions,(err,info) => {
    if(err) console.log(err)
    else{
        console.log(`Email Sent: ${info.response}`)
    }
})