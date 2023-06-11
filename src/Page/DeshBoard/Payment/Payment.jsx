import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromice=loadStripe(import.meta.env.VITE_Payment_Key)
const Payment = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold'>Please Proccess Payment</h1>
            <Elements stripe={stripePromice}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>

    );
};

export default Payment;