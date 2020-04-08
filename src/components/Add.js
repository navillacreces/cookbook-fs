import React from 'react';


export default function Add (){

    return (<>
        <header>
          <h3>Let's add a new recipe!</h3>
        </header>
        <form className="recipe-form">
          <div>
            <label for="recipe-name">Recipe name</label>
            <input
              placeholder="Recipe"
              type="text"
              name="recipe-from-form"
              id="recipe-name"
            />
          </div>
          <div>
            <label for="cook-time">cook time</label>
            <input
              type="text"
              name="cook-time"
              id="cook-time"
              placeholder="Cook Time"
            />
          </div>
          <div>
            <label for="username">Ingredients</label>
            <input type="text" name="Ingredients" id="Ingredients" />
          </div>
          <div>
            <label for="instructions">Instructions</label>
            <input name="instructions" id="instructions" />
          </div>
          <button type="submit">Add</button>
        </form>
        </>
    )
}