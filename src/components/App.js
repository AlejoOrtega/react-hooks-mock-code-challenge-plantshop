import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [update, triggerUpdate] = useState(false)
  const [search, setSearch] = useState('')

  let plants2display = plants.filter(plant => search? plant.name.includes(search) : true)

  useEffect(() => {

    const savePlants=(plants)=>{
      setPlants([...plants])
    }

    fetch('http://localhost:6001/plants')
    .then(res=> res.json())
    .then(plants=> savePlants(plants))
  }, [update])


  const handleOnSubmit = (data) => {
    fetch('http://localhost:6001/plants',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(triggerUpdate(!update))
  }

  const handleOnSearchChange = (e) => {
    setSearch(()=> e.target.value)
  }

  const handleChangePrice = (data, id) => {
    fetch(`http://localhost:6001/plants/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'price':data})
    })
    .then(triggerUpdate(!update))
  }



  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants2display} onSubmit={handleOnSubmit} search={search} onSearchChange={handleOnSearchChange} changePrice={handleChangePrice}/>
    </div>
  );
}

export default App;
