import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onSubmit, search, onSearchChange, changePrice}) {
  return (
    <main>
      <NewPlantForm onSubmit={onSubmit}/>
      <Search search={search} onSearchChange={onSearchChange}/>
      <PlantList plants={plants} changePrice={changePrice}/>
    </main>
  );
}

export default PlantPage;
