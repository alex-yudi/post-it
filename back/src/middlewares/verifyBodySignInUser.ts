import { Request, Response, NextFunction } from 'express'
import { schemaUserSignIn } from '../schemas/user'



export const verifyBodySignInUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, senha: password } = req.body
    try {
        await schemaUserSignIn.validateAsync({
            email,
            password
        })
        return next();
    } catch (error: any) {
        const errorMessage = error.details[0].message
        if (errorMessage) {
            return res.status(400).json(errorMessage)
        }
        return res.status(500).json("Erro interno do servidor.")
    }
}