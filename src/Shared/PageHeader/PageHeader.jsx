import React from 'react';
import './pageHeader.css'

const PageHeader = () => {
    return (
            <div className='bg-indigo-500 relative bg-img'>
           
            <div className='flex items-center justify-center max-w-screen-xl min-h-[40vh] mx-auto'>
                <section className='z-10'>
                       <h1 className='text-white font-bold text-4xl'>Fresh Fruites Shop</h1>
                </section>
            </div>
            <div className='white-curve-after'></div>
            <div className='section-back-text'>Shop</div>
        </div>
     
     
   
    );
};

export default PageHeader;