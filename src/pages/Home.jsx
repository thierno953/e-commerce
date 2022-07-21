import React, { useEffect, useState } from 'react'
import ProductCard from '../components/UI/productCard/ProductCard';
import { FeatureImages, products } from '../data';
import Banner from './Banner';

const Home = () => {
    const [category, setCategory] = useState('ALL')
    const [allProducts, setAllProducts] = useState(products)

    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products)
        }

        if (category === "BURGER") {
            const filteredProducts = products.filter(item => item.category === "Burger")
            setAllProducts(filteredProducts)
        }

        if (category === "PIZZA") {
            const filteredProducts = products.filter(item => item.category === "Pizza")

            setAllProducts(filteredProducts)
        }

        if (category === "BREAD") {
            const filteredProducts = products.filter(item => item.category === "Bread")

            setAllProducts(filteredProducts)
        }
    }, [category]);


    return (
        <>
           <Banner />
            <section className='section bg-[#f8f3eca1]'>
                <div className='container mx-auto text-center'>
                    <h2 className='text-5xl font-primary font-extrabold mb-8'>
                        What i do
                    </h2>

                    <div className='flex flex-wrap justify-center gap-12 ml-1 mr-1'>
                        {FeatureImages.map((item, index) => {
                            const { icon, title, description } = item;
                            return (
                                <div
                                    className='flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0'
                                    key={index}
                                >
                                    <img className='mb-6 h-[50px]' src={icon} alt='' />
                                    <h4 className='text-2xl mb-2 font-primary font-bold'>
                                        {title}
                                    </h4>
                                    <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container mx-auto text-center'>
                    <h2 className='text-5xl font-primary font-extrabold mb-8'>
                        Popular Products
                    </h2>
                    <div className='flex items-center justify-center gap-10 md:gap-12 mx-1'>
                        <button className='text-bold' onClick={() => setCategory('ALL')}>All</button>
                        <button className='text-bold' onClick={() => setCategory('BURGER')}>Burger</button>
                        <button className='text-bold' onClick={() => setCategory('PIZZA')}>Pizza</button>
                        <button className='text-bold' onClick={() => setCategory('BREAD')}>Bread</button>
                    </div>

                    <div className='lg:grid lg:grid-cols-4 lg:gap-x-[30px] ml-1 mr-1 mt-10'>
                        {allProducts.map((item) => (
                            <div key={item.id}>
                                <ProductCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home