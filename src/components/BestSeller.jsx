import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products = [] } = useContext(ShopContext)
    const [bestseller, setBestSeller] = useState([]);

    useEffect(() => {
        // console.log("Products:",products)
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLER'} />
                <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600'>Explore our top-selling fashion pieces that effortlessly blend style and versatility.</p>
            </div>
{/* showing best sellers */}
            
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
                bestseller.map((item , index) => (
                    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                ))
              }
          </div>
        </div>
    )
}

export default BestSeller