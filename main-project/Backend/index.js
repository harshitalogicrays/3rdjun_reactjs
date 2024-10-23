//express - nodejs webframework 
//cors 
//stripe 

import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51MWzILSJqCDJ3ZovRlrEDkPtuzrVA20Bs5Cfh05bM1RDAjLLkQeIDV5JnOFdSWpp6yHGpVa8YdQ1Kw786nZoLZ7u00YnWF5hhJ')

const app  =  express()
app.use(express.json())
app.use(cors())
//http://localhost:4000
app.get('/',(req,res)=>{
    res.send("hello from nodejs server")
})

  //http://localhost:4000/create-payment-intent - post request
  app.post("/create-payment-intent", async (req, res) => {
    const { amount,address1,name,pincode ,line2,phone} = req.body;
    console.log(req.body)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount*100, 
      currency: "inr",
      description:"description",
      shipping:{
        address:{
            line1:address1,
            line2:line2,
            city:'ahmedabad',
            state:'gujrat',
            postal_code:pincode,
            country:'india'},
        name:name,
        phone:phone
        },
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
