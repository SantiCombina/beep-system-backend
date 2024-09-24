import { Router } from "express";
import { getConfig, updateConfig } from "../controllers/config.controller.js";

const router = Router();

router.get("/config", getConfig);
router.post("/config", updateConfig);

export default router;
