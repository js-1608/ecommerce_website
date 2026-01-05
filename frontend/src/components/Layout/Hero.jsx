import React from 'react'
import heroImg from '../../assets/rabbit-hero.webp'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='relative'>
        <img src={heroImg}
            alt='hero image'
            className='w-full h-100 md:h-150  object-cover'
        />
        <div className='absolute inset-0 bg-black/20 items-center justify-center flex'>
            <div className='text-white text-center'>
                <h1 className='text-4xl lg:text-9xl text-center '>
                    Vacation 
                </h1>
                <p className='tracking-tight  text-2xl '>Explore our Product</p>
                <Link to="#" className=" text-gray-900 bg-white py-3 px-8 inline-block mt-2 font-semibold">
                    Shop Now
                </Link>
            </div>
        </div>
        
    </section>
  )
}

export default Hero
