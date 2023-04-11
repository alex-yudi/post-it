const transporter = require('../services/emailSender')

interface NewUser {
    username: string,
    email: string
}

const sendSignUpEmail = (newUser: NewUser) => {
    transporter.sendMail({
        from: `${process.env.EMAIL_NAME}`,
        to: newUser.email,
        subject: 'Bem-vindo ao Personal Post-it!',
        html: `<h1> Olá ${newUser.username}!</h1>
                </br>
                <h2> Agradeço muito sua utilização desse aplicativo! </h2>
            `
    })
}


export default sendSignUpEmail