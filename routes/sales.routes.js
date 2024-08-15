import { Router } from "express";
import { countSale } from "../controllers/sales.controller.js";

const router = Router();

router.get("/sale", countSale);

export default router;
