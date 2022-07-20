import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { id, title, image01, price } = props.item;

    return (
        <div className='text-center lg:text-left mb-12'>
            <img className='mx-w-full lg:mx-0 mb-3 object-cover' src={image01} alt='' />
            <h4 className='text-2xl mb-2 font-primary font-bold'><Link to={`/foots/${id}`}>{title}</Link></h4>
            <div className='flex items-center justify-between max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0 mt-1'>
                <p>{price}€</p>
                <button className='bg-accent text-white rounded px-4 py-2'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard