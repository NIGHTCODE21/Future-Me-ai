import { Request, Response } from "express";
import { Letter } from "../models/Letter";
import { letterQueue } from "../queues/letterQueue";
import { generateMotivation } from "../services/aiService";

export const createLetter = async (req: Request, res: Response) => {
  const { email, content, deliveryDate } = req.body;

  const letter = await Letter.create({
    email,
    content,
    deliveryDate,
  });

  const delay = new Date(deliveryDate).getTime() - Date.now();

  await letterQueue.add(
    "sendLetter",
    { letterId: letter._id },
    { delay }
  );

  const aiMessage = await generateMotivation(content);

  res.json({
    message: "Letter scheduled 🚀",
    aiMessage,
  });
};
