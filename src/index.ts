import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import router from "./router/index";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("register", (userId) => {
    socket.join(userId);
    console.log(`User ${userId} joined their room`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

mongoose.Promise = Promise;

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());
app.use("/", router())

mongoose.connection.on("error", (error: Error) => console.log(error));

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
    
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

startServer();

//res.clearCookie('token'); -> logout