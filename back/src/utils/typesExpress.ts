import { Request } from 'express'

export interface RequireWithUserData extends Request {
    userId: number
}