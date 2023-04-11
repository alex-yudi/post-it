require('dotenv').config();
import express from "express";

import { verifyBodySignUpUser } from '../middlewares/authentication'

import { signUpUser } from "../controllers/users/signUpUser";

const routes = express();

routes.post('/usuario', verifyBodySignUpUser, signUpUser)


export default routes