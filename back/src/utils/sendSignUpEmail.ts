import dotenv from 'dotenv';
dotenv.config();

import transporter from '../services/emailSender'

interface NewUser {
    username: string,
    email: string
}

const sendSignUpEmail = (newUser: NewUser) => {
    transporter.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: newUser.email,
        subject: 'Bem-vindo ao Personal Post-it!',
        html: `<h1> Olá ${newUser.username}!</h1>
                <br/>
                <h2> Agradeço muito sua utilização desse aplicativo! </h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>ATENÇÃO! NÃO RESPONDA ESSE E-MAIL!</h1>
            `
    })
}


export default sendSignUpEmail