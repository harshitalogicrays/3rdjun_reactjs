import React from 'react'
import { useSelector } from 'react-redux'
import { selectCars } from '../redux/carSlice'
import { useParams } from 'react-router-dom'
import ReactImageMagnify from '@blacklab/react-image-magnify'

const CarDetails = () => {
    const allcars = useSelector(selectCars)
    const {id}=useParams()
    const car = allcars.find(item=>item.id==id)
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col">
            <ReactImageMagnify
                imageProps={{
                    alt: car.model,
                   isFluidWidth:true,
                    src: car.image
                }}
                magnifiedImageProps={{
                    src: car.image,
                    width: 800,
                    height: 800
                }}
                magnifyContainerProps ={{
                  height : 300,
                  width : 300
                  }}
                  portalProps= {{
                    id : "portal-test-id",
                    horizontalOffset : 10,
                    verticalOffset:-200
                    }}
            />
            </div>
            <div className="col"><h2>{car.model}</h2>
                    <p><strong>Fuel Type:</strong> {car.fuel}</p>
                    <p><strong>Capacity:</strong> {car.capcity} seater</p>
                    <p><strong>Price:</strong> ₹{car.price}</p>
                    <button className="btn btn-danger me-3">Rent Now</button>
                  </div>
        </div>
    </div>
  )
}

export default CarDetails
