import React from 'react';

// import image
import Image from '../assets/images/hero.png';


const Banner = () => {
    return (
        <section
            id='home'
            className='lg:h-full lg:max-h-600'
        >
            <div className='container mx-auto h-full lg:flex pt-32'>
                <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
                    <h1 className='font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
                    Be the fastest  <br />in delivering  <br /><span className='text-accent'>your pizza.</span>
                    </h1>
                    <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
                    votre mission est de remplir votre ventre avec de la nourriture délicieuse et avec une livraison rapide et gratuite
                    </p>
                </div>
                {/* Banner Image */}
                <div className='flex-1 lg:flex lg:flex-col items-end'>
                    <img src={Image} alt='' />
                </div>
            </div>
        </section>
    );
};

export default Banner;
