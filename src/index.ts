import express, {Request, Response} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/index";
import bodyParser from "body-parser";
import compression from "compression";

dotenv.config();

const app = express();

mongoose.Promise = Promise;

app.use(bodyParser.json());
app.use(compression());
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