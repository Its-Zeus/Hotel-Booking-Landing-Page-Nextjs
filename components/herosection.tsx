import React from 'react'
import banner from '@/public/unsplash.png'
import {Image} from "@nextui-org/react";
import Slider from './slider';

const HeroSection = () => {
  return (
    // <div className='bg-banner bg-cover py-72'>herosection</div>
    <div className='relative'>
        <Slider/>
        
        <h1 className='absolute z-20 text-5xl font-bold text-background top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-tight'>Discover Extraordinary<br/>Comfort in Hotels</h1>
    </div>
  )
}

export default HeroSection