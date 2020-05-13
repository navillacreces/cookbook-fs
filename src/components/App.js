import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import RecipeList from "./RecipeList";
import CreateNew from './CreateNew';
import '../css/App.css'
import Add from './Add'
import Landing from './Landing';
import RecipeEdit from './RecipeEdit';
import Recipe from './Recipe';

const { v4: uuidv4 } = require('uuid');

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

export default function App() {
  
  const [recipes, setRecipes] = useState(sampleRecipes)
  /*

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
  */

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
    
    <main role="main">
      <header role="banner">
        <h1>Cookbook-fs</h1>
        <h6>a full stack cookbook</h6>
      </header>
      <Route exact path='/' component={Landing} />
      <Route path='/cookbook' component={RecipeList} />
      <Route path='/createNew' component={CreateNew} />
      <Route path='/edit' component={RecipeEdit} />
      <Route path='/addRecipe' component={Add} />
    </main>
    
  </body>
  </html>

  )
}



