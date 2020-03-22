import React, {useState} from 'react';
import { UserIndex } from '../components/user/UserIndex';
import { User } from '../models/user';
import { Gender } from '../models/gender';
import { UserForm } from '../components/user/UserForm';
import { RecipeIndex } from '../components/recipes/RecipeIndex';
import { RecipeForm } from '../components/recipes/RecipeForm';
import { Recipe } from "../models/recipe";
import { Foodtype } from '../models/foodtype';


function App() {

  /** 
   * users
   */
  const defaultUsers: User[] = [
    {
        id: 0,
        forname: "Chuck",
        surname: "Norris",
        birthday: new Date().getTime(),
        email: "chuck@norris.com",
        gender: Gender.MALE
    },
    {
        id: 1,
        forname: "Scarlett",
        surname: "Johanson",
        birthday: new Date().getTime(),
        email: "scarlett@johanson.com",
        gender: Gender.FEMALE
    }
  ];
  const [users, setUsers] = useState<User[]>(defaultUsers);


  const createUser = (user: User) => {
    console.log(user)
    const newUser = { ...user, id: new Date().getTime()};
    const newUsers = [...users, newUser];
    setUsers(newUsers)
  }


  const deleteUser = (userId: number) => {
    const newUser = users.filter(u => u.id !== userId);
    setUsers(newUser);
  }

  const updateUser = (user:User) => {

  }

 
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

  }

 

  return (
    <div className="App">
      {/* <UserForm saveUser={createUser} />  */}
      <RecipeForm saveRecipe={createRecipe} />
      
      {/* <UserIndex users={users}  updateAction={updateUser} deleteAction={deleteUser} /> */}
      <RecipeIndex  recipies={recipies} updateActionRecipe={updateRecipe} deleteActionRecipe={deleteRecipe}/>
    </div>
  );
}

export default App;
