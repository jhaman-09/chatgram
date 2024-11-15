import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const server = http.createServer(app);

const PORT = process.env.port || 4000;

app.use(
  cors({
    credentials: true,
  })
);

if (!process.env.MONGOOSE_URI) {
  throw new Error("MONGOOSE_URI is not defined");
}

mongoose.connect(process.env.MONGOOSE_URI);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to Database..");
  server.listen(PORT, () => {
    console.log("Server is running on " + PORT);
  });
});
