import { Request, Response } from "express";
import { schemaUserSignUp } from '../schemas/user'

export const signUpUser = async (req: Request, res: Response) => {
    const { apelido: nickname, email, senha: password, repetirSenha: repeatPassword } = req.body;

    return res.json('ok')
}