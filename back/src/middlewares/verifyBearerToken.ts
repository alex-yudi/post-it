import { Response, NextFunction } from "express";
import { RequestWithUserData } from "../utils/typesExpress";
import jwt from "jsonwebtoken";
import authToken from "../services/authToken";

interface TokenInformation {
    userId: number;
    iat: number;
    exp: number
}

export const verifyBearerToken = async (req: RequestWithUserData, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    try {
        if (!authorization) {
            return res.status(406).json("Por favor, forneça o token de autenticação.")
        }

        const token = authorization.split(' ')[1]
        const verifyToken = await jwt.verify(token, authToken) as TokenInformation

        const userIdLogged = verifyToken.userId
        req.userId = userIdLogged

        next()
    } catch (error: any) {
        if (error.message === 'jwt must be provided') {
            return res.status(406).json('Por favor, forneça o token de autenticação.')
        }

        if (error.message === 'invalid signature') {
            return res.status(498).json("Por favor, forneça um token válido.")
        }

        return res.status(500).json('Erro interno no servidor.')
    }
}