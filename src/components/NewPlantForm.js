import React, {useState} from "react";

function NewPlantForm({onSubmit}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price:''
  })

  const handleOnChange = (e) => {
    let name = e.target.name, value = e.target.value
    setFormData({...formData, [name]: value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      name: '',
      image: '',
      price:''
    })
  } 

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleOnChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleOnChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleOnChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
