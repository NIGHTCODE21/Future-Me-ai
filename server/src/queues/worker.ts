import { Worker } from "bullmq";
import { redis } from "../config/redis";
import { sendEmail } from "../services/emailService";
import { Letter } from "../models/Letter";

new Worker(
  "letterQueue",
  async (job) => {
    const { letterId } = job.data;

    const letter = await Letter.findById(letterId);

    if (letter && !letter.delivered) {
      await sendEmail(letter.email, letter.content);
      letter.delivered = true;
      await letter.save();
    }
  },
  { connection: redis }
);
