import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.join((process.cwd(),'.env'))})
export default {
port:process.env.PORT,
database_url:process.env.DATABASE_URL,
email_user: process.env.EMAIL_USER, // Gmail email
  email_pass: process.env.EMAIL_PASS, // App password for Gmail
}