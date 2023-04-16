import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  /* modal */
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  /* favorites */
  const [showFavorites, setShowFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const selectMeal = (id, calledInFavoriteMeal) => {
    if (calledInFavoriteMeal) {
      let selected = showFavorites.find((meal) => meal.idMeal === id);
      setSelectedMeal(selected);
    } else {
      let selected = meals.find((meal) => meal.idMeal === id);
      setSelectedMeal(selected);
    }
    setShowModal(true);
  };

  const addToFavorites = (id) => {
    const meal = meals.find((meal) => meal.idMeal === id);
    const alreadyInFavorite = showFavorites.find((meal) => meal.idMeal === id);
    if (alreadyInFavorite) return;
    setShowFavorites((prev) => {
      return [...prev, meal];
    });
  };

  const removeFavorites = (id) => {
    setShowFavorites((prev) => {
      return prev.filter((everymeal) => everymeal.idMeal !== id);
    });
  };

  const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const axiosFetchData = async (url) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      if (response.data.meals) {
        setMeals(response.data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const randomUrl = () => {
    axiosFetchData(randomMealUrl);
  };

  useEffect(() => {
    axiosFetchData(allMealsUrl);
  }, [searchInput]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(showFavorites));
  }, [showFavorites]);

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setSearchInput,
        randomUrl,
        showModal,
        setShowModal,
        selectMeal,
        addToFavorites,
        removeFavorites,
        selectedMeal,
        setShowFavorites,
        showFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
