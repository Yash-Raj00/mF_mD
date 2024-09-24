import { Router } from "express";
import { getStories, addStory, deleteStory, updateStory, getStory } from "./story.controller";

const getStoriesRouter = Router();

getStoriesRouter.get("/stories", getStories);   // get all stories
getStoriesRouter.post("/story/add", addStory);  // add a story
getStoriesRouter.get("/story/:id", getStory);  // get single story
getStoriesRouter.put("/story/update", updateStory);  // update a story
getStoriesRouter.delete("/story/delete", deleteStory);  // delete a story


export default getStoriesRouter;