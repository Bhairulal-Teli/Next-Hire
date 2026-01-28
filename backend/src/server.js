import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import {serve} from "inngest/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest } from "./lib/inngest.js";

dotenv.config({quiet: true});

const app = express();
const __dirname = path.resolve();

//middleware
app.use(express.json());
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}));

app.use("/api/inngest", serve({client: inngest, functions}))

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from api." });
});

const port = process.env.PORT || 3002;

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log("Server is running on Port:", port);
    });
  } catch (error) {
    console.log("Error starting the server.", error)
  }
};

startServer();
