import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage } from "../controllers/auth.controller.server.js";

const router = Router();

//Display Router
router.get('/login',DisplayLoginPage);
router.get('/register',DisplayRegisterPage);

export default router;