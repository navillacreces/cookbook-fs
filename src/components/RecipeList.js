import React, {useState} from "react";
import Add from './Add';
import Recipe from "./Recipe";
import {Link} from 'react-router-dom';

export default function RecipeList({recipes}) {
 
  // const {recipes,handleRecipeAdd, handleRecipeDelete} = props;

  //const [recipes,setRecipes] = useState(sampleRecipes)

  return (
    <div className="recipe-list">
     <Link to='/addRecipe' className="add-new-link">Add a new Recipe</Link>
      <div>
        {recipes.map(recipe => {
          return <Recipe key={recipe.id}  {...recipe} />;
        })}
      </div>
      
    </div>
  );
}

