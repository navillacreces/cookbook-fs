import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'


export default function RecipeEdit() {
    return (
        <div className="recipe-edit">
            <div>
                <button>&times;</button>
            </div>
            <div>
                <label htmlFor="">name</label>
                <input type="text" name="name" id="name" />
                <br />
                <label htmlFor="cook-time">Cook Time</label>
                <input type="text" name="cook-time" id="cook-time" />
                <br />
                <label htmlFor="servings">Servings</label>
                <input type="number" min="1" name="servings" id="servings" />
                <br />
                <label htmlFor="instructions">Instructions</label>
                <textarea name="instructions" id="instructions" />
            </div>
            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div />
                
                <RecipeIngredientEdit />
                 
            </div>
            <div>
                <button>Add ingredeint</button>
            </div>
        </div>
    )
}
