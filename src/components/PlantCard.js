import React, {useState} from "react";

function PlantCard({plant, changePrice}) {
  const {id, name, image, price} = plant

  const [status, setStatus] = useState(true)
  const [newPrice, setPrice] = useState(price)

  const handleChangeStatus = ()=>{
    setStatus(!status)
  }
  const onChangePrice = e => {
    setPrice(()=> e.target.value)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price</p>
      <input value={newPrice} onChange={onChangePrice}/>
      <button onClick={()=>changePrice(newPrice, id)}>update</button>
      {status ? (
        <button onClick={handleChangeStatus} className="primary">In Stock</button>
      ) : (
        <button onClick={handleChangeStatus}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
