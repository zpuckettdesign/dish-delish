import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Recipe() {
  const APP_ID = "dafd518b";
  const APP_KEY = "e201e8c75d75d75a55e7b5ef0f16b0de";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
  };

  let array = recipes;
  let newArray = array.slice(0, 10);

  console.log(newArray);

  return (
    <>
      {newArray.map((recipe) => (
        <div>
          <h1>{recipe.recipe.label}</h1>
          <img src={recipe.recipe.image} alt="" />
        </div>
      ))}
    </>
  );
}
