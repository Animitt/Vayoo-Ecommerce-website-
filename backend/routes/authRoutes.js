import express from 'express';
import dotenv from 'dotenv';
import { register,login,logout  } from '../controller/authController.js';
const authRoutes = express.Router();

authRoutes.post('/registeration', register);
authRoutes.post('/login', login);
authRoutes.get('/logout', logout);

export default authRoutes;