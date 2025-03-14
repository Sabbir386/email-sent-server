import express from "express";
import { sendEmailController, getAllEmailsController } from "./email.controller";

const router = express.Router();

router.post("/send", sendEmailController);
router.get("/getAllMails", getAllEmailsController); // New GET route

export const EmailRoutes = router;
