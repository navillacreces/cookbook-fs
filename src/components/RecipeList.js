import React, {useState} from "react";
import Add from './Add';
import Recipe from "./Recipe";
import {Link} from 'react-router-dom';

export default function RecipeList(props) {
 
  // const {recipes,handleRecipeAdd, handleRecipeDelete} = props;

  const [recipes,setRecipes] = useState(sampleRecipes)

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

const sampleRecipes = [
  {
    id: 1,
    name: "pasta and chicken",
    servings: 5,
    cookTime: "1:45",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "16 oz"
      },
      {
        id: 2,
        name: "pasta",
        amount: "15 oz"
      }
    ],
    instructions:
      "1. Season your chicken.\n2. Put chicken in oven \n3. boil your pasta till tender\n4.mix\n5. Enjoy"
  },
  {
    id: 2,
    name: "latin chicken",
    servings: 3,
    cookTime: "2:35",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "5 Lbs"
      },
      {
        id: 2,
        name: "adobo",
        amount: "1 can"
      }
    ],
    instructions: "1.season the chicken\n2. put chicken in oven\n3.eat the chicken"
  }
];