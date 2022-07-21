import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({ item }) => {

    const { id, title, price, image01, quantity, totalPrice } = item;

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id, title, price, image01
        }))
    };

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

    return (
        <div className='flex justify-center gap-5'>
            <span className='text-primary cursor-pointer text-xl font-bold' onClick={incrementItem}><i className='ri-add-line'></i></span>
            <span className="text-primary text-xl font-bold">{quantity}</span>
            <span className='text-primary cursor-pointer text-xl font-bold' onClick={decreaseItem}><i className='ri-subtract-line'></i></span>
        </div>
    )
}

export default CartItem