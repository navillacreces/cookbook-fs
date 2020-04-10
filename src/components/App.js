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



export default function App() {
  /*
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
    <nav role="navigation">Nav</nav>
    <main role="main">
      <header role="banner">
        <h1>Cookbookfs</h1>
      </header>
      <Route exact path='/' component={Landing} />
      <Route path='/cookbook' component={RecipeList} />
      <Route path='/createNew' component={CreateNew} />
      <Route path='/edit' component={RecipeEdit} />
      <Route path='/addRecipe' component={Add} />
    </main>
    <footer role="content-info">Footer</footer>
  </body>
  </html>

  )
}



