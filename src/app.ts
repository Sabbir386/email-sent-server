import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

const app: Application = express();

// Configure CORS to allow requests from frontend
const corsOptions = {
  origin: ["http://localhost:5173", "https://email-client-forhad.netlify.app"], // Corrected URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow all necessary methods
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Parsers
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world!");
});

export default app;
