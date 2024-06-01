


import express, { Request, Response } from 'express';
import cors from 'cors';

import "dotenv/config";
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());


app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});


mongoose
  .connect(process.env.MONGOBD_URL as string)
  .then(() => console.log("Connect to MongoDB"));

app.listen(4000, () => {
  console.log(`Server is running on port: 4000`);
});


