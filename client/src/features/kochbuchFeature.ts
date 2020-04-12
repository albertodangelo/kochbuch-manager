import { createAction, ActionType } from 'typesafe-actions';
import { Recipe, defaultRecipe  } from '../models/recipe';
import { Dispatch } from 'redux';
import { createRecipeClient, updateRecipeClient, deleteRecipeClient, indexRecipiesClient} from '../data/recipe_data';


export const indexRecipies = createAction('recipies/INDEX')<Recipe[]>();
export const indexRecipiesAction = () => {
    return (dispatch: Dispatch) => {
        indexRecipiesClient().then( res => dispatch( indexRecipies(res.data) ));
    }
}


export const createRecipe = createAction('recipies/CREATE')<Recipe>();
export const crateRecipeAction = (recipe: Recipe) => {
    return (dispatch: Dispatch) => {
        createRecipeClient(recipe).then(res => dispatch(createRecipe(res.data)));
    }
};

export const updateRecipe = createAction('recipies/UPDATE')<Recipe>();
export const updateRecipeAction = (recipe: Recipe) => {
    return (dispatch: Dispatch) => {
        updateRecipeClient(recipe).then(res => dispatch(updateRecipe(res.data)));
    }
};

export const deleteRecipe = createAction('recipies/DELETE')<Recipe>();
export const deleteRecipeAction = (recipe: Recipe) => {
    return (dispatch: Dispatch) => {
       deleteRecipeClient(recipe).then(() => dispatch(deleteRecipe(recipe)));
    }
};

type RecipeActions = ActionType<typeof indexRecipies | typeof createRecipe | typeof updateRecipe | typeof deleteRecipe>;

export const recipeReducer = (state: Recipe[] = defaultRecipe, action: RecipeActions) => {
   
    switch (action.type) {
        case 'recipies/INDEX':
            return action.payload;

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