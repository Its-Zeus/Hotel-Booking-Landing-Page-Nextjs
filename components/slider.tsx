'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules'

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import banner from '@/public/unsplash.jpg'
import lounge from '@/public/lounge.jpg'
import room from '@/public/room.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow';


export default function Slider() {
  const sliderimages = [
    {
      src: banner.src,
      width: banner.width,
      height: banner.height,
      alt : 'Hotel Pool'
    },
    {
      src: lounge.src,
      width: lounge.width,
      height: lounge.height,
      alt : 'Hotel Lounge'
    },
    {
      src: room.src,
      width: room.width,
      height: room.height,
      alt : 'Hotel Room'
    }
  ]
  return (
    <Swiper
    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      pagination={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      style={{
        "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-pagination": {"z-index": "40"},
      }}      
    >
        {sliderimages.map((image, index) => (
          <SwiperSlide key={index} className=''>
            <div className='relative'>
                <Image
                src={image.src}
                alt="banner"
                layout='responsive'
                width={image.width}
                height={image.height}
                className='max-h-[700px] object-cover min-h-[600px]'
                />
                <div className='absolute bg-black w-full h-full top-0 z-10 opacity-50'>fsf</div>
            </div>
    
          </SwiperSlide>
          
        ))}

    </Swiper>
  )
}