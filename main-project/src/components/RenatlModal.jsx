import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { calculateprice } from './hiddenlinks';



const RenatlModal = ({car,isOpen,onClose}) => {
    const navigate = useNavigate()
    const location=useLocation()
    const [startDate,setStartDate]=useState()
    const [endDate,setEndDate]=useState()
    const today=new Date()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const handleRentNow=async()=>{
        if(isLoggedIn){
            if(!startDate || !endDate){toast.error("please select both the dates");return}
            else if(endDate<startDate){toast.error('end date can be less than start date');return}
            else {
                const totalPrice = calculateprice(car.price,startDate,endDate)
                const rentdata={
                    carId:car.id,model:car.model,fuel:car.fuel,
                    startDate:startDate.toISOString(),
                    endDate:endDate.toISOString(),
                    totalPrice
                }
            }
        }
       else { navigate('/login',{state:{from:location.pathname}})}
    }
  return (
    <>
    <div className={`modal fade ${isOpen?'show':''} `}
    style={{display:isOpen?"block":'none'}}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Rent this Car??</h1>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
            <div class="mb-3">
                <label for="" class="form-label w-25">From Date</label>
                <DatePicker className='form-control' selected={startDate} 
                selectsStart
                onChange={(date) => setStartDate(date)}  minDate={today} />
            </div>
             <div class="mb-3">
                <label for="" class="form-label w-25">To Date</label>
                <DatePicker className='form-control' selected={endDate} 
                selectsEnd
                startDate={startDate} endDate={endDate} minDate={startDate || today}
                onChange={(date) => setEndDate(date)}  />
         
            </div>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={handleRentNow}>Confirm Booking</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>

        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default RenatlModal
