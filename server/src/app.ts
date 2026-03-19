import express from "express";
import cors from "cors";
import letterRoutes from "./routes/letterRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/letters", letterRoutes);

export default app;
