import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UseCart = () => {
    const { user, loading } = useContext(AuthContext);



    const { refetch, data: cart = [] } = useQuery({
        enabled: loading,
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/popularclass?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]


};

export default UseCart;