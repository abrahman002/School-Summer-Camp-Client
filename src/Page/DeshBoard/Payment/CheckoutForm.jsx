import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const element=useElements();
    const [error,setError]=useState('');

    const handleSubmit=async(event)=>{
        event.preventDefault()
          
        if(!stripe || !element){
           return
        }

        const card=element.getElement(CardElement);
        if(card === null){
          return
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            console.log('error',error)
            setError(error.message)
        }
        else{
            setError(' ')
            console.log('payment method',paymentMethod)
        }

    }
    return (
        <div className='w-2/3 mx-auto mt-10'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-info btn-sm mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
        </div>
    );
};

export default CheckoutForm;