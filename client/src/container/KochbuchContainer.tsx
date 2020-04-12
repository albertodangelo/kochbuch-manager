import React, {useState, useEffect} from "react";
import { RecipeIndex } from '../components/recipes/RecipeIndex';
import { RecipeForm } from '../components/recipes/RecipeForm';
import { RecipeFormAnt } from '../components/recipes/RecipeFormAnt';
import { Recipe } from "../models/recipe";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { State } from "../models/state";
import { bindActionCreators } from "redux";
import { indexRecipiesAction, updateRecipeAction, crateRecipeAction, deleteRecipeAction } from "../features/kochbuchFeature";


export const KochbuchContainer: React.FC = () => {


    const recipies = useSelector<State, Recipe[]>(state => state.recipies);
    const dispatch = useDispatch();
    const actions = bindActionCreators({indexRecipiesAction, updateRecipeAction, crateRecipeAction, deleteRecipeAction}, dispatch);

    useEffect(() => {
      // request
      actions.indexRecipiesAction();
    }, []);
  
   return (
    <div className="RecipeContainer">
      <RecipeFormAnt saveRecipe={actions.crateRecipeAction} />
      {/* <RecipeForm saveRecipe={createRecipe} /> */}
      <RecipeIndex  recipies={recipies} updateActionRecipe={actions.updateRecipeAction} deleteActionRecipe={actions.deleteRecipeAction}/>
    
    </div>
  );
}