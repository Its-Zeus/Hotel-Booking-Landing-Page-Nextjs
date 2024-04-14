import React from 'react'
import {Grid} from '@radix-ui/themes'
import Image from 'next/image'
import rooms from '@/public/img1.png'
import dining from '@/public/img2.png'
import facilities from '@/public/img3.png'
import meetings from '@/public/img4.png'
import wedding from '@/public/img5.png'

const images = [
    {
        src: rooms.src,
        alt: 'Rooms',
        width: rooms.width,
        height: rooms.height
    },
    {
        src: dining.src,
        alt: 'Dining',
        width: dining.width,
        height: dining.height
    },
    {
        src: facilities.src,
        alt: 'Services & Facilities',
        width: facilities.width,
        height: facilities.height
    },
    {
        src: meetings.src,
        alt: 'Conferences & Meetings',
        width: meetings.width,
        height: meetings.height
    },
    {
        src: wedding.src,
        alt: 'Wedding Package',
        width: wedding.width,
        height: wedding.height
    },
]



const Facilities = () => {
  return (
    <div className='flex justify-center bg-[#E9F3F6] py-10'>
        <Grid rows={{initial:"repeat(3, 1fr)", sm:"repeat(2, 1fr)", lg: "repeat(2, 1fr)"}} columns={{initial: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(3, 300px)', lg: "repeat(3, 350px)" }} gap={{initial:"20px", sm:"10px", md:"10px", lg:"30px"}} px={{initial:"20px", sm:"20px"}} width="auto">
            {images.map((item, index) => (
                    index === 0 ? 
                    <div key={index} className='row-span-2 relative cursor-pointer hover:opacity-80'>
                        <Image src={item.src} width={item.width} height={item.height} alt={item.alt}></Image>
                        <h4 className='absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-medium text-center'>{item.alt}</h4>
                    </div> 
                    : 
                    <div key={index} className='ratio-square relative cursor-pointer hover:opacity-80'>
                        <Image src={item.src} width={item.width} height={item.height} alt={item.alt}></Image>
                        <h4 className='absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-medium text-center'>{item.alt}</h4>
                    </div>
                ))}
        </Grid>
    </div>
  )
}

export default Facilities