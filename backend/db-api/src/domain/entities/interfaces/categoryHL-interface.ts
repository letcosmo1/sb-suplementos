import { Document } from "mongoose";

export interface ICategoryHL extends Document {
    highlightTitle: string;
    highlightProducts: string[];
    highlightImage: string;
};

export interface ICategoryHLRepository{
    getAllCategoriesHL(): Promise<ICategoryHL[] | null>;
}