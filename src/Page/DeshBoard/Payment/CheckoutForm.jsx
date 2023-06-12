import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [error, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [proccessing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    // console.log(price)
    useEffect(() => {
        axiosSecure
            .post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError(' ')
            console.log('payment method', paymentMethod)
        }

        setProcessing(true)
        // console.log(clientSecret)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                status: 'service pending',
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    // if (res.data.result.insertedId) {
                    //     Swal.fire({
                    //         title: 'Payment Successfull',
                    //         showClass: {
                    //             popup: 'animate__animated animate__fadeInDown'
                    //         },
                    //         hideClass: {
                    //             popup: 'animate__animated animate__fadeOutUp'
                    //         }
                    //     })
                    // }
                })
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
                <button className='btn btn-info btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret || proccessing}>
                    Pay
                </button>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
            {transactionId && <p className='text-green-500'>Transaction complete with transactionId:{transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;