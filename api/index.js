import cors from "cors";
import express from "express";
import salesRoutes from "../routes/sales.routes.js";
import budgetsRoutes from "../routes/budgets.routes.js";
import configRoutes from "../routes/config.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", salesRoutes);
app.use("/api", budgetsRoutes);
app.use("/api", configRoutes);

app.listen(3000);
console.log("server started on port 3000");
