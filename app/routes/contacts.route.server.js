import { Router } from "express";

import {  DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    ProcessContactsEditPage, 
    DisplayContactsEditPage, 
    ProcessContactsDelete } from "../controllers/contacts.controller.server.js";
import { AuthGuard } from "../utils/index.js";


const router = Router();

router.get('/contact-list', DisplayContactsList);
router.get('/contact-add',  AuthGuard, DisplayContactsAddPage);
router.post('/contact-add',  AuthGuard, ProcessContactsAddPage);
router.post('/contact-edit/:id',  AuthGuard, ProcessContactsEditPage);
router.get('/contact-edit/:id',  AuthGuard, DisplayContactsEditPage);
router.get('/contact-delete/:id',  AuthGuard, ProcessContactsDelete);

//Remove AuthGuard to make contact-add work

export default router;