import { Router } from "express";
import { countBudget } from "../controllers/budgets.controller.js";

const router = Router();

router.get("/budget", countBudget);

export default router;
