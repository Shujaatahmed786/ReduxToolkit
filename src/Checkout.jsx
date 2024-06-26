import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart } from './Redux/CartSlice';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    console.log("cartitems", cartItems)

    return (
        <div>
            <div>
                {cartItems?.items?.map((item) => (
                    <div className='flex flex-col items-center justify-center '>
                        <img src={item?.image} alt={item.title} className='w-32 h-32' />
                        <div>
                            <h4>{item.title}</h4>
                            <button onClick={()=>dispatch(RemoveFromCart({id: item.id}))} className='bg-yellow-500 text-white p-2 rounded-lg'>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Checkout;
