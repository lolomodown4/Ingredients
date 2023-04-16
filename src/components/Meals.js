import React from "react";
import { useGlobalContext } from "../context";
import { BsHandThumbsUpFill } from "react-icons/bs";

const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <section className="section-center">
        <h2>Loading.....</h2>
      </section>
    );
  } else if (meals.length === 0) {
    return (
      <section className="section-center">
        <h2>Sorry, there are no meal name like that.</h2>
      </section>
    );
  } else {
    return (
      <>
        <section className="section-center">
          {meals.map((everyMeal) => {
            return (
              <article key={everyMeal.idMeal} className="single-meal">
                <img
                  src={everyMeal.strMealThumb}
                  alt="food"
                  className="food-picture"
                  onClick={() => selectMeal(everyMeal.idMeal)}
                />

                <footer className="footer">
                  <h5>{everyMeal.strMeal}</h5>
                  <button
                    className="like-btn"
                    onClick={() => addToFavorites(everyMeal.idMeal)}
                  >
                    <BsHandThumbsUpFill size={24} className="thumbsUp" />
                  </button>
                </footer>
              </article>
            );
          })}
        </section>
      </>
    );
  }
};

export default Meals;
