import { Queue } from "bullmq";
import { redis } from "../config/redis";

export const letterQueue = new Queue("letterQueue", {
  connection: redis,
});
