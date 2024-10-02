import React, { useState } from 'react'
//image , model , price, fuel type, capcity
const AddCar = () => {
    let [car,setCar]=useState({model:'',price:'',image:'',fuel:'',capcity:''})
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(car))
    }
  return (
   <div className='container col-9 bg-secondary text-white p-2'>
   <h1>Add Car</h1>

    <form onSubmit={handleSubmit}>
        <div className="row">
        <div class="mb-3 col">
            <label for="" class="form-label">Model</label>
            <input type="text" name="model" class="form-control" 
            value={car.model} onChange={(e)=>setCar({...car,model:e.target.value})}/>
        </div>
        <div class="mb-3 col">
            <label for="" class="form-label">Price</label>
            <input type="number" name="price" class="form-control"   value={car.price} onChange={(e)=>setCar({...car,price:e.target.value})} />
        </div>
        </div>
       
        <div class="mb-3">
            <label for="" class="form-label">Fuel Type</label>
                <select class="form-select" name="fuel"  value={car.fuel} onChange={(e)=>setCar({...car,fuel:e.target.value})}>
                   <option selected disabled value=''>Select one</option>
                   <option>Petrol</option>
                   <option>Diesel</option>
                  <option>CNG</option>
                  <option>EV</option>
                </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Choose file</label>
            <input type="file" class="form-control" name="image"/>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Capacity</label>
            <input type="number" name="capcity" class="form-control"  value={car.capcity} onChange={(e)=>setCar({...car,capcity:e.target.value})}  />
        </div>
        <div className="d-grid gap-2">
        <button type="submit" class="btn btn-info"> Submit </button>
        </div>
    </form>
   </div>
  )
}

export default AddCar
