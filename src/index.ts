import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

dotenv.config();

const port: number = 3000 || parseInt(process.env.PORT);
const app: express.Application = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  const fullUrl: string =
    req.protocol + "://" + req.get("host") + req.originalUrl;
  res.status(200).send(`Server running at ${fullUrl}`);
});

app.listen(port, () => {
  console.log("Running successfully");
});
