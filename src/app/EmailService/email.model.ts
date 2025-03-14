import mongoose, { Schema, Document } from "mongoose";
import { IEmail } from "./email.interface";

const EmailSchema = new Schema<IEmail & Document>({
  email: { type: String, required: true }, // ✅ Email can be duplicated
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const EmailModel = mongoose.model<IEmail & Document>("Email", EmailSchema);
