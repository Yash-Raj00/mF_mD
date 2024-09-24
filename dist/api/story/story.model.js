"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Story = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const storySchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.Story = mongoose_1.default.model("Story", storySchema);
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
