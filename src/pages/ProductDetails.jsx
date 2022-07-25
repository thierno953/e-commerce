import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/UI/productCard/ProductCard';
import { products } from '../data';
import { cartActions } from '../store/shopping-cart/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, image01 } = product;

  const relatedProduct = products.filter(item => category === item.category);

  const addItem = () => {
    dispatch(cartActions.addItem({
      id, title, price, image01
    }))
  }

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product]);

  return (
    <section className='section'>
      <div className='container mx-auto text-center mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-10'>
          <div className='flex gap-4 ml-1 mr-1'>
            <div>
              <div className='img__item' onClick={() => setPreviewImg(product.image01)}>
                <img src={product.image01} alt="product-img" className='w-[100px] md:w-[150px] cursor-pointer' />
              </div>
              <div className='img__item' onClick={() => setPreviewImg(product.image02)}>
                <img src={product.image02} alt="product-img" className='w-[100px] md:w-[150px] cursor-pointer' />
              </div>
              <div className='img__item' onClick={() => setPreviewImg(product.image03)}>
                <img src={product.image03} alt="product-img" className='w-[100px] md:w-[150px] cursor-pointer' />
              </div>
            </div>

            <div className='product__main-img'>
              <img src={previewImg} alt="product-img" className='w-[300px]' />
            </div>
          </div>

          <div className='single__product-content'>
            <h2 className='text-xl font-primary font-extrabold'>{title}</h2>
            <p className='text-md font-primary font-extrabold'>Price : <span>${price}</span></p>


            <p className='text-md font-primary font-extrabold'>
              Category: <span>{category}</span>
            </p>
            <button onClick={addItem} className='text-md font-primary font-extrabold mt-5 bg-accent text-white px-3 py-2 rounded'>Add to Cart</button>
          </div>
        </div>
        <h2 className='text-5xl font-primary font-extrabold pt-[40px]'>
          Related Foods
        </h2>
        <div className='lg:grid lg:grid-cols-4 lg:gap-x-[30px] ml-1 mr-1 mt-20'>
          {
            relatedProduct.map(item => (
              <div>
                <ProductCard item={item} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductDetails