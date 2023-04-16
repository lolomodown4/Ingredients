import React from "react";
import { useGlobalContext } from "../context";

const MyModal = () => {
  const { selectedMeal, setShowModal } = useGlobalContext();

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img
          src={selectedMeal.strMealThumb}
          className="img modal-img"
          alt="food"
        />
        <div className="modal-content">
          <h4>{selectedMeal.strMeal}</h4>
          <p>Cooking Instructions</p>
          <p> {selectedMeal.strInstructions}</p>
          <a href={selectedMeal.strSource}>Original Source</a>
          <button
            className="btn btn-hipster close-btn"
            onClick={() => setShowModal(false)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
