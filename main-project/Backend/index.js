//express - nodejs webframework 
//cors 
//stripe 

import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51NOvqGSAvExKFAjaTkSgqxNXs5WQ8TofJQrBOJIhdkFNDBKzqbWwMSYYzbsfP6ozzQ1n3sljsSbCVHYnMhcePzGz00PbYWzMiX')

const app  =  express()
app.use(express.json())
app.use(cors())
//http://localhost:4000
app.get('/',(req,res)=>{
    res.send("hello from nodejs server")
})

  //http://localhost:4000/create-payment-intent - post request
  app.post("/create-payment-intent", async (req, res) => {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  

let PORT = 4000
app.listen(PORT,()=>{console.log(`server started at http://localhost:${PORT}`)})
