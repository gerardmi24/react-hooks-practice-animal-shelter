import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch("http://localhost:3001/pets")
    .then((response) => response.json())
    .then(data => {setPets(data)})
  }, [])

  function handleOnChange(type) {
    // console.log("On Category Change", type)
    setFilters({type: type});
  }

  function handleFindPetsClick() {
    let url = `http://localhost:3001/pets?type=${filters.type}`
    if (filters.type !== "all") {
      fetch(url)
      .then((response) => response.json())
      .then(data => {setPets(data)})
    }
    else fetch("http://localhost:3001/pets")
    .then((response) => response.json())
    .then(data => {setPets(data)})
  }

  function handleAdoptPet(id) {
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    });
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onFindPetsClick={handleFindPetsClick}
            onChangeType={handleOnChange} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
