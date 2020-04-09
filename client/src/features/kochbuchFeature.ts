import { createAction, ActionType } from 'typesafe-actions';
import { Recipe, defaultRecipe  } from '../models/recipe';


export const createRecipe = createAction('recipies/CREATE')<Recipe>();
export const updateRecipe = createAction('recipies/UPDATE')<Recipe>();
export const deleteRecipe = createAction('recipies/DELETE')<Recipe>();

type RecipeActions = ActionType<typeof createRecipe | typeof updateRecipe | typeof deleteRecipe>;

export const recipeReducer = (state: Recipe[] = defaultRecipe, action: RecipeActions) => {
   
    switch (action.type) {
        
        case 'recipies/CREATE':
        
            return [...state, { ...action.payload, id: new Date().getTime() }];
        
        case 'recipies/UPDATE':
            console.log("recipe update", action.payload)
            return state.map(r => (r.id === action.payload.id ? action.payload : r));

        case 'recipies/DELETE':
            return state.filter(r => r.id !== action.payload.id);

            default:
            return state;
    }
}