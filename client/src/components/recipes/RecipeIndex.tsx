import React from 'react';
import { Recipe } from '../../models/recipe';
import "./RecipesStyles.css";
import { RecipeForm } from './RecipeForm';

interface Props {
    recipies: Array<Recipe>;
    deleteActionRecipe: (id: number) => void;
    updateActionRecipe: (recipe: Recipe) => void;
}

export const RecipeIndex: React.FC<Props> = (props) => {
    
    return (
        <div className="container-cards">
            { 
                props.recipies.map( (recipe, index) => (
                    <div className="card" key={index}>
                        <div className="img-container" style={{backgroundImage: `url(/food-images/${recipe.mealImg})`}}>    
                            {/* <img src={"/food-images/"+ recipe.mealImg} alt="Rezeptbild"/> */}
                            <p className="caption"><strong>{recipe.foodtype}</strong></p>
                        </div>
                        <div className="container">    
                            <h4>{recipe.titleMeal}</h4>
                            <p><strong>Beschreibung: </strong>{recipe.shortDesc}</p>
                            <p><strong>Anleitung: </strong>{recipe.directions}</p>
                            <p><strong>Vorbereitungszeit: </strong>{recipe.prepTime} Min.</p>
                            <p><strong>Kochzeit: </strong>{recipe.cookTime} Min.</p>
                            <p><strong>Bewertung: </strong>{recipe.rated}</p>
                            <RecipeForm saveRecipe={props.updateActionRecipe} recipe={recipe}/>
                            <button className="red"  onClick={ () => props.deleteActionRecipe(recipe.id)} >Delete</button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )

}