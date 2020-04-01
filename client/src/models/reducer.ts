import { combineReducers } from "redux";
import { usersReducer } from "../features/userFeature";

export const reducer = combineReducers({
    users: usersReducer
});