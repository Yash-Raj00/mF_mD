import mongoose from "mongoose";

export interface GetStoryResponse {
    id: number;
    title: string;
    content: string;
    date: string;
    emojis: string[];
    tags: string[];
    isSpecial: boolean;
}