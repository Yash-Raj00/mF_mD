"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStories = getStories;
exports.getStory = getStory;
exports.addStory = addStory;
exports.deleteStory = deleteStory;
exports.updateStory = updateStory;
const story_model_1 = require("./story.model");
const connectToDB_1 = __importDefault(require("../../utils/connectToDB"));
function getStories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, connectToDB_1.default)();
            const stories = yield story_model_1.Story.find();
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
        }
        catch (error) {
            res.status(500).json({
                status: "error",
                message: "Error occurred while fetching stories",
                error: error.message,
            });
        }
    });
}
function getStory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, connectToDB_1.default)();
            const id = req.params.id;
            const storyFound = yield story_model_1.Story.find({ id });
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
        }
        catch (error) {
            res.status(500).json({
                status: "error",
                message: "Error occurred while adding story",
                error: error.message,
            });
        }
    });
}
function addStory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, connectToDB_1.default)();
            const newStory = new story_model_1.Story(req.body);
            console.log(newStory);
            const addedResponse = yield newStory.save();
            res.status(200).json({
                ok: true,
                status: "success",
                message: "Story added successfully",
                data: newStory,
            });
        }
        catch (error) {
            console.log("erroryy:", error.message);
            res.status(500).json({
                ok: false,
                status: "error",
                message: "Error occurred while adding story",
                error: error.message,
            });
        }
    });
}
function deleteStory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, connectToDB_1.default)();
            const id = req.body.id;
            console.log(id);
            const deletedRes = yield story_model_1.Story.findByIdAndDelete(id);
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
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({
                ok: false,
                status: "error",
                message: "Error occurred while deleting story",
                error: error.message,
            });
        }
    });
}
function updateStory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, connectToDB_1.default)();
            const id = req.body._id;
            const updatedRes = yield story_model_1.Story.findByIdAndUpdate(id, req.body, {
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
        }
        catch (error) {
            console.error(error.message);
            res.status(500).json({
                status: "error",
                message: "Error occurred while updating story",
                error: error.message,
            });
        }
    });
}
