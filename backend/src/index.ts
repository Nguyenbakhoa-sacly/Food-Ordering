


import express, { Request, Response } from 'express';
import cors from 'cors';
import myUserRoute from "./routers/MyUserRoutes"

import "dotenv/config";
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute)


mongoose
  .connect(process.env.MONGOBD_URL as string)
  .then(() => console.log("Connect to MongoDB"));

app.listen(4000, () => {
  console.log(`Server is running on port: 4000`);
});


