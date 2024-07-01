import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import router from "./api/routes.js";

dotenv.config();
const PORT = process.env.PORT ;
const app = express();

app.use(cors({
      origin: 'http://localhost:' + PORT,
      credentials: true
}));
app.use(express.json());
app.use("/", router);
// app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
      console.log("Server connected on " + PORT)
  })
