import express from "express";
import { createLetter } from "../controllers/letterController";

const router = express.Router();

router.post("/create", createLetter);

export default router;
