import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UseInstractorClass = () => {
    const { user, loading } = useContext(AuthContext);



    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://islamic-school-server.vercel.app/intractoraddclass?email=${user?.email}`)
            return res.json();
        },
    })
     console.log(cart)
    return [cart, refetch]


};

export default UseInstractorClass;