import http from "http";
import app from "./app";
import { connectDB } from "./config/db";
import "./queues/worker";

const server = http.createServer(app);

connectDB();

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
