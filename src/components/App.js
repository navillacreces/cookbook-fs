import React, { useState } from 'react';
import RecipeList from "./RecipeList";
//import "../css/App.css";
import '../main.css'
import Add from './Add'
import Landing from '../Landing'
const { v4: uuidv4 } = require('uuid');



export default function App() {

  const [recipes, setRecipes] = useState(sampleRecipes)


  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  function handleRecipeAdd(){


    const newRecipe = {
        id: uuidv4(),
        name: 'dish',
        servings: 1,
        cookTime: '1:00',
        instructions: ' instrcut',
        ingredients : [
          { id: uuidv4(), name: 'Name', amount: '1 pinch'}
        ]
    }
  
    setRecipes([...recipes, newRecipe])
  }


  return(
    
<html lang="en">
  <head>
    <title>HTML wireframe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.css"
    />
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>
  <body>
    <nav role="navigation">Nav</nav>
    <main role="main">
      <header role="banner">
        <h1>Cookbookfs</h1>
      </header>
    </main>
    <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} />
    <Add />
    <footer role="content-info">Footer</footer>
  </body>
  </html>

  )
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
      "1. Season your chicken.\n2. Put chicken in oven 3. boil your pasta till tender\n4.mix\n5. Enjoy"
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