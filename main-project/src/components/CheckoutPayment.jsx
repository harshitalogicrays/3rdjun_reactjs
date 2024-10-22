import React, { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51NOvqGSAvExKFAjaCl4fAxmf3CFJlq54guOtblHh0nEuB7XGZ9KXvKSgHgjjiIc0kexx4SUn67Z4iXDBB9q3fevA0096oZR8bw");


const CheckoutPayment = () => {
  const [clientSecret, setClientSecret] = useState("");
  return (
    <div>
      
    </div>
  )
}

export default CheckoutPayment
