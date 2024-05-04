import express from "express";

// Controllers
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
