import React from 'react';
import { Recipe } from '../../models/recipe';
/* import "./RecipesStyles.css"; */
import { RecipeForm } from './RecipeForm';
import { RecipeFormAnt } from './RecipeFormAnt';

import { Card, Col, Row, Typography, Button } from 'antd';


const { Title } = Typography;

interface Props {
    recipies: Array<Recipe>;
    deleteActionRecipe: (id: number) => void;
    updateActionRecipe: (recipe: Recipe) => void;
}

export const RecipeIndex: React.FC<Props> = (props) => {
    
    return (
<>
        <div  className="container-cards">
        <Row gutter={16}>
            { 
                props.recipies.map( (recipe, index) => (
                    <Col key={index} xs={24} sm={24}  md={8} lg={8} xl={8} style={{marginBottom: "20px"}}>
                    <Card bordered={true}   >

                        
                        <div className="img-container" 
                            style={{backgroundImage: `url(/food-images/${recipe.mealImg})`}}>    
                            {/* <img src={"/food-images/"+ recipe.mealImg} alt="Rezeptbild"/> */}
                            <p className="caption"><strong>{recipe.foodtype}</strong></p>
                        </div>

                        <div className="container" style={{textAlign:"left"}}>    
                            <Title level={3}>{recipe.titleMeal}</Title> 
                            <p><strong>Beschreibung: </strong>{recipe.shortDesc}</p>
                            <p><strong>Zutaten: </strong>{recipe.ingredients}</p>
                            <p><strong>Anleitung: </strong>{recipe.directions}</p>
                            <p><strong>Vorbereitungszeit: </strong>{recipe.prepTime} Min.</p>
                            <p><strong>Kochzeit: </strong>{recipe.cookTime} Min.</p>
                            <p><strong>Bewertung: </strong>{recipe.rated}</p>
                            <RecipeFormAnt saveRecipe={props.updateActionRecipe} recipe={recipe}/>
                            {/* <RecipeForm saveRecipe={props.updateActionRecipe} recipe={recipe}/> */}
                            <Button size="large"  shape="round" type="primary" style={{margin: "20px", width: "100px", background: "red"}} onClick={ () => props.deleteActionRecipe(recipe.id)} >löschen</Button>
                        </div>
                        
                    </Card>
                    </Col>
                ))
            }
            </Row>
        </div>
    </>
    )

}