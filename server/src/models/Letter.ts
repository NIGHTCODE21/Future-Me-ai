import mongoose from "mongoose";

const letterSchema = new mongoose.Schema({
  email: String,
  content: String,
  deliveryDate: Date,
  delivered: { type: Boolean, default: false },
});

export const Letter = mongoose.model("Letter", letterSchema);
