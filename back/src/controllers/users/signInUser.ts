import { Response } from "express";
import { RequestWithUserData } from "../../utils/typesExpress";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import knex from "../../connections/connection";

import authToken from "../../services/authToken";


const signInUser = async (req: RequestWithUserData, res: Response) => {
    const { email, senha: password } = req.body;

    try {

        const locatedUser = await knex('usuarios').where({ email }).first();
        if (!locatedUser) {
            return res.status(400).json("E-mail ou senha incorreto.")
        }

        const isPasswordCorrect = await bcrypt.compare(password, locatedUser.senha)
        if (!isPasswordCorrect) {
            return res.status(400).json("E-mail ou senha incorreto.")
        }

        const token = await jwt.sign({ userId: locatedUser.id }, authToken, { expiresIn: '8h' })

        const { senha: __, ...userLogged } = locatedUser
        const responseWillSend = {
            user: userLogged,
            token
        }

        return res.json(responseWillSend)
    } catch (error: any) {
        return res.status(500).json('Erro interno do servidor.')
    }
}

export default signInUser