import { Request, Response } from "express";

import bcrypt from 'bcrypt';

import knex from '../../connections/connection';
import sendSignUpEmail from "../../utils/sendSignUpEmail";


const signUpUser = async (req: Request, res: Response) => {
    const { apelido: nickname, email, senha: password, repetirSenha: repeatPassword } = req.body;
    try {
        if (password !== repeatPassword) {
            return res.status(400).json('Os campos de senha e verificação de senha não coincidem!')
        }

        const cryptPassword = await bcrypt.hash(password, 10)

        const newUser = {
            apelido: nickname,
            email,
            senha: cryptPassword
        }
        const [responseSignUpUser] = await knex('usuarios').insert(newUser).returning('apelido');

        const userSendEmail = { username: nickname, email }
        sendSignUpEmail(userSendEmail)

        return res.status(201).json(`O usuário ${responseSignUpUser.apelido} foi criado.`)
    } catch (error: any) {
        if (error.constraint === 'usuarios_email_key') {
            return res.status(400).json('E-mail já cadastrado no sistema!')
        }

        return res.status(500).json("Erro interno do servidor.")
    }
}

export default signUpUser