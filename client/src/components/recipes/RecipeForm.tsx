import React, {useState} from 'react';
import { Foodtype } from '../../models/foodtype';
import { Recipe } from '../../models/recipe';
import axios from 'axios';
import { Dialog } from '../Dialog';

interface Props {
    saveRecipe: (recipe:Recipe) => void,
    recipe?: Recipe
}


export const RecipeForm: React.FC<Props> = (props) => {


    console.log(props.recipe)

    const [open, isOpen] = useState<boolean>(false);

    const initialRecipe = props.recipe 
        ? props.recipe
        : {  id: 0,
            mealImg: '',
            titleMeal: '',
            shortDesc: '',
            ingredients: [],
            directions: [],
            prepTime: '',
            cookTime: '',
            rated: '',
            file: '',
            foodtype: Foodtype.VEGETARIAN
        };

    const [ recipe, setRecipe] = useState<Recipe>(initialRecipe);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
      
        event.preventDefault();

       
        const formData = new FormData();
        formData.append('file', recipe.file);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });

            
            const { fileName, filePath} = res.data;
            const updateRecipe = { ...recipe, 'mealImg': fileName};   
           
            props.saveRecipe(updateRecipe);

        } catch (err) {
            if(err.response.status === 500) {
                console.log("there was an error with the server");
            } else {
                console.log(err.response.data.msg)
            }
        }
        
        toggleDialog();
    }

    
    const handleChange = (event: any) => {
        
        let value: string|number|[]  = '';
        
        if(event.target.name === 'file') {

            value = event.target.files[0];

        } else {
            value = event.target.value;
        }
        
        console.log("VALUE " , value);


        const newRecipe = {...recipe, [event.target.name]:value};
        setRecipe(newRecipe);
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
         <button className={props.recipe ? 'edit-recipe' : 'new-recipe'} onClick={toggleDialog}> {props.recipe ? 'Ändern':'Neu'}</button>
        <Dialog open={open}>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-25">
                <label htmlFor="titlemeal">Titel des Menüs</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="titleMeal" type="text" id="titlemeal" defaultValue={recipe.titleMeal} />
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label htmlFor="shortDesc">Kurzbeschreibung</label>
            </div>
            <div className="col-75">
                <textarea onChange={handleChange} name="shortDesc"   id="shortDesc" defaultValue={recipe.shortDesc}/>
            </div>
        </div>
        
        <div className="row">    
            <div className="col-25">
                <label htmlFor="directions">Beschreibung</label>
            </div>
            <div className="col-75">
                <textarea onChange={handleChange} name="directions"  id="directions"  defaultValue={recipe.directions}/>
            </div>
        </div>
        
        <div className="row">    
            <div className="col-25">
                <label className="custom-file-label" htmlFor="file">Bild</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange}  type="file" className="custom-file-input" name="file" id="file"  />
            </div>
        </div>

        <div className="row">    
            <div className="col-25">
                <label htmlFor="ingredients">Zutaten</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="ingredients" placeholder="kommaseparierte Begriffe" type="text" id="ingredients" defaultValue={recipe.prepTime}/>
            </div>
        </div>
      
        <div className="row">    
            <div className="col-25">
                <label htmlFor="prepTime">Zubereitungszeit</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="prepTime" type="text" id="prepTime" defaultValue={recipe.prepTime}/>
            </div>
        </div>

        <div className="row">    
            <div className="col-25">
                <label htmlFor="cookTime">Kochzeit</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="cookTime" type="text" id="cookTime" defaultValue={recipe.cookTime}/>
            </div>
        </div>


        <div className="row">    
            <div className="col-25">
                <label htmlFor="rated">Bewertung</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="rated" type="text" id="rated" defaultValue={recipe.rated}/>
            </div>
        </div>

        <div className="row">    
            <div className="col-25">
                <label htmlFor="foodtype">Art des Rezeptes</label>
            </div>
            <div className="col-75">
                <select onChange={handleChange} name="foodtype" id="foodtype" defaultValue={recipe.foodtype}>
                    <option value={Foodtype.MEAT}>Fleisch</option>                
                    <option value={Foodtype.VEGAN}>Vegan</option>                
                    <option value={Foodtype.VEGETARIAN}>Vegetarisch</option>                
                </select>
            </div>
        </div>
        <div className="btns-end-form-recipe">
            <button className="red" onClick={toggleDialog}>Cancel</button>
            <button type="submit">Absenden</button>
        </div>
        </form>
        </Dialog>
        </>
    )
}