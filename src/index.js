import cors from "cors";
import express from "express";
import salesRoutes from "./routes/sales.routes.js";
import budgetsRoutes from "./routes/budgets.routes.js";
import configRoutes from "./routes/config.routes.js";

const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    'https://beep-system.vercel.app',
    'http://localhost:3000',
    'http://localhost:3001'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api", salesRoutes);
app.use("/api", budgetsRoutes);
app.use("/api", configRoutes);

app.listen(3001);
console.log("server started on port 3001");

export default app;
