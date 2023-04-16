import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  //galing sa context
  const { setSearchInput, randomUrl } = useGlobalContext();

  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text !== null) {
      setSearchInput(text);
    }
  };

  const handleRandom = () => {
    randomUrl();
    setText("");
  };

  return (
    <header className="search-container">
      <form>
        <input
          type="text"
          placeholder="Search Meal"
          value={text}
          onChange={handleInput}
        ></input>
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={handleRandom}
        >
          Random recipe
        </button>
      </form>
    </header>
  );
};

export default Search;
