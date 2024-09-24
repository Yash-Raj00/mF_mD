import { Request, Response } from "express";
import { Story } from "./story.model";
import connectToDB from "../../utils/connectToDB";
import { Error } from "mongoose";

export async function getStories(req: Request, res: Response) {
  try {
    await connectToDB();
    const stories = await Story.find();
    if (!stories.length) {
      res.status(404).json({
        status: "empty",
        message: "No stories found",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Stories found successfully",
      data: stories,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: "Error occurred while fetching stories",
      error: error.message,
    });
  }
}

export async function getStory(req: Request, res: Response) {
  try {
    await connectToDB();
    const id = req.params.id;
    const storyFound = await Story.find({ id });
    if (!storyFound.length) {
      res.status(404).json({
        status: "error",
        message: "Story not found",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Story found successfully",
      data: storyFound,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: "Error occurred while adding story",
      error: error.message,
    });
  }
}

export async function addStory(req: Request, res: Response) {
  try {
    await connectToDB();
    const newStory = new Story(req.body);
    console.log(newStory);
    const addedResponse = await newStory.save();
    res.status(200).json({
      ok: true,
      status: "success",
      message: "Story added successfully",
      data: newStory,
    });
  } catch (error: any) {
    console.log("erroryy:", error.message);
    res.status(500).json({
      ok: false,
      status: "error",
      message: "Error occurred while adding story",
      error: error.message,
    });
  }
}

export async function deleteStory(req: Request, res: Response) {
  try {
    await connectToDB();
    const id = req.body.id;
    console.log(id);
    const deletedRes = await Story.findByIdAndDelete(id);
    if (!deletedRes) {
      res.status(404).json({
        ok: false,
        status: "error",
        message: "Story not found",
      });
      return;
    }
    res.status(200).json({
      ok: true,
      status: "success",
      message: "Story deleted successfully",
      data: deletedRes,
    });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({
      ok: false,
      status: "error",
      message: "Error occurred while deleting story",
      error: error.message,
    });
  }
}

export async function updateStory(req: Request, res: Response) {
  try {
    await connectToDB();
    const id = req.body._id;
    const updatedRes = await Story.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedRes) {
      console.log("not found");
      res.status(404).json({
        status: "error",
        message: "Story not found",
      });
      return;
    }
    console.log("----:", updatedRes);
    res.status(200).json({
      status: "success",
      message: "Story updated successfully",
      data: updatedRes,
    });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({
      status: "error",
      message: "Error occurred while updating story",
      error: error.message,
    });
  }
}
