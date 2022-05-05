import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, changePrice}) {
  return (
    <ul className="cards">{
      plants.map(plant => <PlantCard key={plant.id} plant={plant} changePrice={changePrice}/>)
    }</ul>
  );
}

export default PlantList;
