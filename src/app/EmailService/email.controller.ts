import { Request, Response } from "express";
import { sendVerificationEmail } from "./email.service";
import { EmailModel } from "./email.model";

export const sendEmailController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const verifyLink = `https://skipthgamcz.com/auth/login/614777780`;

    // ✅ Store email in database
    await EmailModel.create({ email, isVerified: false });

    // ✅ Send verification email
    await sendVerificationEmail(email, verifyLink);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
};

// ✅ New Controller to get all emails
export const getAllEmailsController = async (req: Request, res: Response) => {
  try {
    const emails = await EmailModel.find(); 
    res.status(200).json({ emails });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve emails" });
  }
};
