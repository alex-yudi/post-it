require('dotenv').config();
import express from "express";

import { verifyBodySignUpUser } from '../middlewares/verifyBodySignUpUser'
import { verifyBodySignInUser } from "../middlewares/verifyBodySignInUser";

import signUpUser from "../controllers/users/signUpUser";
import signInUser from "../controllers/users/signInUser";

const routes = express();

routes.post('/usuario', verifyBodySignUpUser, signUpUser)
routes.post('/login', verifyBodySignInUser, signInUser)

export default routes