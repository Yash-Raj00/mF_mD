"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoriesRouter = void 0;
const story_routes_1 = __importDefault(require("./story/story.routes"));
exports.getStoriesRouter = story_routes_1.default;
