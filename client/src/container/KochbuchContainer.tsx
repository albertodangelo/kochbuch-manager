import React, {useState} from "react";
import { RecipeIndex } from '../components/recipes/RecipeIndex';
import { RecipeForm } from '../components/recipes/RecipeForm';
import { RecipeFormAnt } from '../components/recipes/RecipeFormAnt';
import { Recipe } from "../models/recipe";
import { Foodtype } from '../models/foodtype';

export const KochbuchContainer: React.FC = () => {


    /**
   * recipies
   */
  const defaultRecipe: Recipe[] = [
    {
        id: 0,
        mealImg: "apfelkuchen.png",
        titleMeal: "Saftiger Apfelkuchen mit Streusel",
        shortDesc: "Dieser saftige Apfelkuchen überzeugt mit einem wunderbaren Mürbeteig-Boden, saftigen Äpfeln und traumhaft leckeren Streuseln. Mit Videoanleitung!",
        ingredients:  "125g Butter , 100g Zucker, 1 Pck. Vanillezucker, 1 Ei, 250g Mehl, ½ Pck Backpulver, 1 Prise Salz, für den Belag, 800 g Äpfel, 1 Prise Zimt, 1 TL Zitronensaft",
        directions: [
            "Für den Teig Butter, Zucker, Vanillezucker, Eier, Mehl, Backpulver und Salz miteinander verkneten. Den Teig in Frischhaltefolie wickeln und 60 Min kaltstellen. ", 
            "Den Ofen auf 180 Grad (Umluft: 160 Grad) vorheizen. Eine Springform (Ø 26 cm) gut einfetten. Den Teig aus dem Kühlschrank nehmen. Auf leicht bemehlter Arbeitsfläche rund ausrollen bis er etwas größer als die Springform ist. Den Teig in die Form legen und mit den Fingern zurecht drücken, bis ein etwa 3cm hoher Rand entstanden ist."
        ],
        file: '',
         prepTime: '35',
        cookTime: '60',
        rated: '3',
        foodtype: Foodtype.VEGETARIAN
    },
    {
        id: 1,
        mealImg: "apfelkuchen.png",
        titleMeal: "Saftiger Apfelkuchen mit Streusel",
        shortDesc: "Dieser saftige Apfelkuchen überzeugt mit einem wunderbaren Mürbeteig-Boden, saftigen Äpfeln und traumhaft leckeren Streuseln. Mit Videoanleitung!",
        ingredients:  "125g Butter , 100g Zucker, 1 Pck. Vanillezucker, 1 Ei, 250g Mehl, ½ Pck Backpulver, 1 Prise Salz, für den Belag, 800 g Äpfel, 1 Prise Zimt, 1 TL Zitronensaft",
        directions: [
            "Für den Teig Butter, Zucker, Vanillezucker, Eier, Mehl, Backpulver und Salz miteinander verkneten. Den Teig in Frischhaltefolie wickeln und 60 Min kaltstellen. ", 
            "Den Ofen auf 180 Grad (Umluft: 160 Grad) vorheizen. Eine Springform (Ø 26 cm) gut einfetten. Den Teig aus dem Kühlschrank nehmen. Auf leicht bemehlter Arbeitsfläche rund ausrollen bis er etwas größer als die Springform ist. Den Teig in die Form legen und mit den Fingern zurecht drücken, bis ein etwa 3cm hoher Rand entstanden ist."
        ],
        file: '',
        prepTime: '35',
        cookTime: '60',
        rated: '3',
        foodtype: Foodtype.VEGETARIAN
    }
  ];
  const [recipies, setRecipies ] = useState<Recipe[]>(defaultRecipe);

  const createRecipe = (recipe: Recipe) => {

    let newRecipe = { ...recipe, id: new Date().getTime()};
    const newRecipes = [...recipies, newRecipe];
    setRecipies(newRecipes)
  }

  const deleteRecipe = (recpieId: number) => {
    const newRecipes = recipies.filter(u => u.id !== recpieId);
    setRecipies(newRecipes);
  }

  const updateRecipe = (recipe:Recipe) => {
    const newUsers = recipies.map(u => (u.id === recipe.id ? recipe : u));
    setRecipies(newUsers);
  }

   return (
    <div className="UsersContainer">
      <RecipeFormAnt saveRecipe={createRecipe} />
      {/* <RecipeForm saveRecipe={createRecipe} /> */}
      <RecipeIndex  recipies={recipies} updateActionRecipe={updateRecipe} deleteActionRecipe={deleteRecipe}/>
    
    </div>
  );
}