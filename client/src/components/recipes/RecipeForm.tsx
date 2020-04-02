import React, {useState} from 'react';
import { Foodtype } from '../../models/foodtype';
import { Recipe } from '../../models/recipe';
import axios from 'axios';
import { Dialog } from '../Dialog';
import { Button } from 'antd';

interface Props {
    saveRecipe: (recipe:Recipe) => void,
    recipe?: Recipe
}


export const RecipeForm: React.FC<Props> = (props) => {


    const [open, isOpen] = useState<boolean>(false);

    const initialRecipe = props.recipe 
        ? props.recipe
        : {  id: 0,
            mealImg: '',
            titleMeal: '',
            shortDesc: '',
            ingredients: '',
            directions: [],
            prepTime: '',
            cookTime: '',
            rated: '',
            file: [],
            foodtype: Foodtype.VEGETARIAN
        };

    const [ recipe, setRecipe] = useState<Recipe>(initialRecipe);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
      
        event.preventDefault();
/* 
        if(recipe.file) {

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
            
        } else {
            console.log("WARNUNG -> file darf nicht leer sein");
        }
         */
    }

    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        let file = event.target.files !== null ?  event.target.files[0] : [];
        
        setRecipe( {...recipe, [event.target.name]: file })

    }

    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        
        let value: string|number  = event.target.value;

        console.log(value);

        const newRecipe = {...recipe, [event.target.name]:value};
        setRecipe(newRecipe);
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
         <Button size="large"  shape="round" type="primary" style={{margin: "20px", width: "100px", background: "green"}} className={props.recipe ? 'edit-recipe' : 'new-recipe'} onClick={toggleDialog}> {props.recipe ? 'ändern':'neu'}</Button>
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
                <label className="custom-file-label" htmlFor="file">Bild</label>
            </div>
            <div className="col-75">
                <input onChange={handleFileChange}  type="file" className="custom-file-input" name="file" id="file"  />
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
                <label htmlFor="directions">Anleitung</label>
            </div>
            <div className="col-75">
                <textarea onChange={handleChange} name="directions"  id="directions"  defaultValue={recipe.directions}/>
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
        <Button size="large"  shape="round" type="primary" style={{margin: "20px", width: "100px", background: "red"}}  onClick={toggleDialog}>zurück</Button>
            <button type="submit">Absenden</button>
        </div>
        </form>
        </Dialog>
        </>
    )
}