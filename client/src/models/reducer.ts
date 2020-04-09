import { combineReducers } from "redux";
import { usersReducer } from "../features/userFeature";
import { recipeReducer } from "../features/kochbuchFeature";

export const reducer = combineReducers({
    users: usersReducer,
    recipies: recipeReducer
}); 