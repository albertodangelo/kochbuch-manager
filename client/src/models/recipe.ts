import { User } from "./user";
import { Foodtype } from "./foodtype";

export interface Recipe {
    id: number,
    mealImg: string
    titleMeal: string,
    shortDesc: string,
    file: string,
    ingredients: Array<string>,
    directions: Array<string>,
    prepTime: string,
    cookTime: string,
    rated: string,
    foodtype: Foodtype
}