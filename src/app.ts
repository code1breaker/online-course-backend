require("dotenv").config();
import express from "express";
import { error } from "./middlewares/error.middleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.use(error);
