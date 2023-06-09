import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UseCart = () => {
    const { user } = useContext(AuthContext);
   
        
            const {refetch, data: cart = [] } = useQuery({
                queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/popularclass?email=${user?.email}`)
            return res.json();
        },
    })

            return [cart, refetch]
        

};

export default UseCart;