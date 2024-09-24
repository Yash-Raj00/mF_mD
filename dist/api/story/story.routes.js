"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const story_controller_1 = require("./story.controller");
const getStoriesRouter = (0, express_1.Router)();
getStoriesRouter.get("/stories", story_controller_1.getStories); // get all stories
getStoriesRouter.post("/story/add", story_controller_1.addStory); // add a story
getStoriesRouter.get("/story/:id", story_controller_1.getStory); // get single story
getStoriesRouter.put("/story/update", story_controller_1.updateStory); // update a story
getStoriesRouter.delete("/story/delete", story_controller_1.deleteStory); // delete a story
exports.default = getStoriesRouter;
