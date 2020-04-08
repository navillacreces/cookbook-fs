import React from "react";
//import { checkPropTypes } from "prop-types";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { id, name, cookTime, servings, instructions, ingredients, handleRecipeDelete } = props;

  return (
    <div className="recipe">
      <div className="recipe-header">
        <h3 className="recipe-name-title">{name}</h3>
        <div>
          <button className="bttn-edit mr-1">Edit</button>
          <button className="bttn-delete" onClick={() => handleRecipeDelete(id)}>Delete</button>
        </div>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Cook Time:</span>
        <span className="recipe-value"> {cookTime} </span>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Servings:</span>
        <span className="recipe-value"> {servings} </span>
      </div>
      <div>
        <span className="recipe-label">Instructions:</span>
        <div className="recipe-value recipe-instructions recipe-value-indnt"> {instructions} </div>
      </div>
      <div>
        <span className="recipe-label" >Ingredients:</span>
        <div className="recipe-value recipe-value-indnt">
          {" "}
          <IngredientList ingredients={ingredients} />{" "}
        </div>
      </div>
    </div>
  );
}
