import { axiosInstance } from './db_connect';
import { Recipe } from "../models/recipe";

export const indexRecipiesClient = () => {
    return axiosInstance.get<Recipe[]>('recipies');
};

export const createRecipeClient = (recipe: Recipe) => {
    return axiosInstance.post<Recipe>('recipies', recipe);
}

export const updateRecipeClient = (recipe: Recipe) => {
    return axiosInstance.put<Recipe>(`recipies/${recipe.id}`, recipe);
}

export const deleteRecipeClient = (recipe: Recipe) => {
    return axiosInstance.delete<Recipe>(`recipies/${recipe.id}`);
}