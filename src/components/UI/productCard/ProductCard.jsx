import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {
    const { id, title, image01, price } = props.item;
    const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
        id, title, image01, price
    }))
  }

    return (
        <div className='text-center lg:text-left mb-12'>
            <Link to={`/product/${id}`}><img className='mx-w-full w-[100%] sm:w-[80%] mx-auto flex items-center justify-center m-auto lg:mx-0 mb-3 object-cover' src={image01} alt='' /></Link>
            <h4 className='text-2xl mb-2 font-primary font-bold'><Link to={`/product/${id}`}>{title}</Link></h4>
            <div className='flex items-center justify-between max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0 mt-1'>
                <p>{price}€</p>
                <button className='bg-accent text-white rounded px-4 py-2' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard