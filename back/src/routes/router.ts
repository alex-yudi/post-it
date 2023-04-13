require('dotenv').config();
import express from "express";

import { verifyBodySignUpUser } from '../middlewares/verifyBodySignUpUser'
import { verifyBodySignInUser } from "../middlewares/verifyBodySignInUser";
import { verifyBearerToken } from "../middlewares/verifyBearerToken";

import { createPostIt } from "../controllers/postIts/createPostIt";

import signUpUser from "../controllers/users/signUpUser";
import signInUser from "../controllers/users/signInUser";

const routes = express();

routes.post('/usuario', verifyBodySignUpUser, signUpUser)

routes.post('/login', verifyBodySignInUser, signInUser)

routes.use(verifyBearerToken)
routes.post('/post-it', createPostIt)

export default routes