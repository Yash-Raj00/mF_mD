import mongoose, { Schema } from "mongoose";

const storySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    emojis: {
      type: [String],
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    isSpecial: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const Story = mongoose.model("Story", storySchema);

/*
    id: 0,
    title: "First blog",
    content:
      "This is my first blog. I am so excited to write my first blog. I hope you enjoy reading it.This is my first blog. I am so excited to write my first blog. I hope you enjoy reading it.This is my first blog. I am so excited to write my first blog. I hope you enjoy reading it.",
    date: "17-09-2024",
    emojis: ["🚀", "🎉", " 🥳"],
    tags: ["first", "blog"],
    isSpecial: false,
*/
