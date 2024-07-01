import express from "express";
import { addRecord } from "../controllers/addRecord.js";
import { csvExport } from "../controllers/csvExport.js";
import { csvAdding } from "../controllers/csvAdding.js";

const router = express.Router();

router.post('/record', csvAdding)
router.get('/record', csvExport)

export default router;