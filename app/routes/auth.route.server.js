import { Router } from "express";
import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessLoginPage, 
    ProcessLogoutPage, 
    ProcessRegisterPage } from "../controllers/auth.controller.server.js";

const router = Router();

//Display Router
router.get('/login',DisplayLoginPage);
router.post('/login',ProcessLoginPage);


//Turn off register page
// router.get('/register',DisplayRegisterPage);
// router.post('/register',ProcessRegisterPage);

router.get('/logout', ProcessLogoutPage);



export default router;