import React from 'react';
import storeContext from '../context';

export const useCart = () => {
    const {cartItems,setCartItems} = React.useContext(storeContext)
    const sumPrice = cartItems.reduce((sum,obj) => obj.price + sum,0);

    return { cartItems, setCartItems, sumPrice }
};
