import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import UseCart from '../../../hook/useCart/UseCart';

const stripePromice = loadStripe(import.meta.env.VITE_Payment_Key)
console.log(stripePromice)
const Payment = () => {
    const [cart] = UseCart();
    console.log('Cart:', cart);
    const total = cart.reduce((sum, item) => sum + (item.classPrice ?item.classPrice:0), 0);
    console.log(total)
    const price = parseFloat(total.toFixed(2))
   
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold'>Please Proccess Payment</h1>
            <Elements stripe={stripePromice}>
                <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
        </div>

    );
};

export default Payment;