import { Response } from "express"
import { RequestWithUserData } from "../../utils/typesExpress"

export const createPostIt = async (req: RequestWithUserData, res: Response) => {
    return res.json('ok do create postit')
}