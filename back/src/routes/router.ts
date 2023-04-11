require('dotenv').config();
import express from "express";

import { verifyBodySignUpUser, verifyBodySignInUser } from '../middlewares/authentication'

import signUpUser from "../controllers/users/signUpUser";
import signInUser from "../controllers/users/signInUser";

const routes = express();

routes.post('/usuario', verifyBodySignUpUser, signUpUser)
routes.post('/login', verifyBodySignInUser, signInUser)

export default routes