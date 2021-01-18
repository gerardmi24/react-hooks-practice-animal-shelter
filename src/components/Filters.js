import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {

  function handleChange(e) {
    console.log("Filter Change", e.target.value)
    onChangeType(e.target.value);
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" aria-label="type" onChange={handleChange} id="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={onFindPetsClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
