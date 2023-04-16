import React from "react";
import { useGlobalContext } from "../context";

import { IoIosCloseCircle } from "react-icons/io";
const Favorites = () => {
  const { showFavorites, removeFavorites, selectMeal } = useGlobalContext();

  const checkLength = (mealName) => {
    if (mealName.length < 12) {
      return mealName;
    } else {
      let newString = "";
      for (let i = 0; i <= 12; i++) {
        newString += mealName[i];
      }
      for (let i = 0; i < 4; i++) {
        newString += ".";
      }
      return newString;
    }
  };

  return (
    <div className="favorites-container">
      <h1 className="favorite-tag">Favorites:</h1>
      <div className="favorites-content">
        {showFavorites.map((everyFavoriteFood) => {
          return (
            <div className="everyFavorite" key={everyFavoriteFood.idMeal}>
              <p className="favorite-title">
                {checkLength(everyFavoriteFood.strMeal)}
              </p>
              <img
                src={everyFavoriteFood.strMealThumb}
                alt="food"
                className="favoriteImg"
                onClick={() => selectMeal(everyFavoriteFood.idMeal, true)}
              />

              <IoIosCloseCircle
                onClick={() => removeFavorites(everyFavoriteFood.idMeal)}
                size={24}
                className="x-icon"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
