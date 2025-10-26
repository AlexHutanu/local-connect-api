import express, {Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Local Connect API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});3