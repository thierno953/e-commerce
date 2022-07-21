import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';
import { FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [cartItems])


    return (
        <section className='section min-h-screen z-0'>
            <div className='container mx-auto pt-[70px]'>
                <div className="overflow-x-scroll sm:overflow-x-hidden">
                    {
                        cartItems.length === 0 ? (
                            <h2 className='text-5xl text-center font-primary font-extrabold mb-8'>
                                Your cart is empty
                            </h2>
                        ) : (
                            <table className="w-full bg-gray-900 rounded-md">
                                <thead>
                                    <tr className="border-b border-gray-800 text-left">
                                        <th className="p-1 uppercase text-sm font-medium text-gray-500">Image</th>
                                        <th className="p-1 uppercase text-sm font-medium text-gray-500">Product</th>
                                        <th className="p-1 uppercase text-sm font-medium text-gray-500">Price</th>
                                        <th className="p-1 uppercase text-sm font-medium text-gray-500">Qty</th>
                                        <th className="p-1 uppercase text-sm font-medium text-gray-500">delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <Tr item={item} key={item.id} />
                                    ))}
                                </tbody>
                            </table>
                        )}
                </div>
                <div className='flex items-center justify-center flex-col mt-10'>
                    <h6 className='text-2xl font-bold'>SubTotal: <span>${totalAmount}</span></h6>
                    <p className='pt-5'>Taxes and shipping will calculate at checkout</p>
                    <div className='flex flex-wrap gap-5 mt-5'>
                        <button className='bg-accent px-2 py-1 text-white text-center rounded'>
                            <Link to="/products">Continue Shipping</Link>
                        </button>
                        <button className='bg-accent px-2 py-1 text-white text-center rounded'>
                            <Link to="/checkout">Proceed to checkout</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Tr = (props) => {
    const { id, image01, title, price, quantity } = props.item
    const dispatch = useDispatch()


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
        <tr className="odd:bg-gray-800 text-left">
            <td className="p-1 capitalize text-sm font-normal text-gray-400">
                <img src={image01} alt="image name" className="w-20 h-20 rounded-md object-cover" />
            </td>
            <td className="p-1 capitalize text-sm font-normal text-gray-400">{title}</td>
            <td className="p-1 capitalize text-sm font-normal text-gray-400">${price}.00</td>
            <div className='flex gap-1 pt-7'>
                <span className='text-primary cursor-pointer text-xl font-bold' onClick={decreaseItem}><i className='ri-subtract-line'></i></span>
                <td className="p-1 capitalize text-sm font-normal text-gray-400">{quantity}</td>
                <span className='text-primary cursor-pointer text-xl font-bold' onClick={incrementItem}><i className='ri-add-line'></i></span>
            </div>
            <td className="p-1 capitalize text-sm font-normal text-gray-400">
                <span className="btn_delete btn-danger text-xl cursor-pointer" onClick={deleteItem}>
                    <FiTrash />
                </span>
            </td>
        </tr>
    )
}

export default Cart
