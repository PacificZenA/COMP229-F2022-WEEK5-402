import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLougoutPage, ProcessRegisterPage } from "../controllers/auth.controller.server.js";

const router = Router();

//Display Router
router.get('/login',DisplayLoginPage);
router.post('/login',ProcessLoginPage);

router.get('/register',DisplayRegisterPage);
router.post('/register',ProcessRegisterPage);

router.get('/logout', ProcessLougoutPage);



export default router;