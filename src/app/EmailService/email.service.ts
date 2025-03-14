import nodemailer from "nodemailer";

import { emailTemplate } from "../utilis/emailTemplate";

export const sendVerificationEmail = async (email: string, verifyLink: string) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, // SSL Secure SMTP
            secure: true, // Must be true for port 465
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Skipthegames"<${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Verify Your Skipthegames Account",
            html: emailTemplate(verifyLink),
            replyTo: "support@Skipthegames.com", // Helps avoid spam folders
        });

        console.log(`✅ Verification email sent to ${email}`);
    } catch (error) {
        console.error("❌ Email sending failed:", error);
    }
};

