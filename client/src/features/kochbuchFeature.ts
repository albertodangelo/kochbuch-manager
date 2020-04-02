import { createAction, ActionType } from 'typesafe-actions';
import { Recipe, defaultRecipe  } from '../models/recipe';
import axios from 'axios';


export const createRecipe = createAction('recipies/CREATE')<Recipe>();
export const updateRecipe = createAction('recipies/UPDATE')<Recipe>();
export const deleteRecipe = createAction('recipies/DELETE')<Recipe>();

type RecipeActions = ActionType<typeof createRecipe | typeof updateRecipe | typeof deleteRecipe>;

export const recipeReducer = (state: Recipe[] = defaultRecipe, action: RecipeActions) => {
   
    switch (action.type) {
        case 'recipies/CREATE':
            
            
            //return [...state, requestFile(action.payload)] ;

 

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


export const requestFile = async ( payload: any) => {
    
    const formData = new FormData();
    formData.append('file', payload.file[0].originFileObj);

    try {
        const res = await axios.post('/upload', formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        });

        const { fileName, filePath} = res.data;
        console.log(fileName);

        return  { ...payload , id: new Date().getTime(), "mealImg": fileName };

    } catch (err) {
        if(err.response.status === 500) {
            console.log("there was an error with the server");
        } else {
            console.log(err.response.data.msg)
        }
    }        
}