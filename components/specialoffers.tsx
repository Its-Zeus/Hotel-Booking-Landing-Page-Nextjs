"use client";
import React from 'react'
import {Flex, Link, Grid} from '@radix-ui/themes'
import Tist from './3dcard'
import bedroom from '@/public/bedroom.jpg'
import meet from '@/public/meet.jpg'
import romantic from '@/public/romantic.jpg'

const offers = [
    {
        src: bedroom.src,
        alt: 'Honeymoon',
        width: bedroom.width,
        height: bedroom.height,
        description : 'Indulge in a Memorable One-Time Romantic Dinner for Two',
        price : '$699',
        persons: 2
    }
    ,
    {
        src: meet.src,
        alt: 'Meetings',
        width: meet.width,
        height: meet.height,
        description : 'Experience an Exclusively Private Environment to Boost Your Productivity',
        price : '$999',
        persons: 30
    }
    ,
    {
        src: romantic.src,
        alt: 'Romantic Dining', 
        width: romantic.width,
        height: romantic.height,
        description : 'Indulge in a Memorable One-Time Romantic Dinner for Two',
        price : '$499',
        persons: 2
    }
]

const SpecialOffers = () => {
  return (
    <div className='py-20 px-3 md:px-10 max-w-[1100px] m-auto' >
        <Flex gapX="9" align="center" justify="center" width="auto">
            <div className='mb-5'>
                <h4 className='text-xl font-medium text-[#65AEF2] mb-3'>Special Offers</h4>
                <h1 className='text-4xl font-medium mb-4'>Best offer of the month</h1>
                <p className='text-base'>Experience Fantastic Benefits and Obtain Better Rates When You Make a Direct Booking on Our Official Website</p>
            </div>
            <Link wrap="nowrap" href='#' weight="bold" size="4" style={{color: '#65AEF2'}}>View All</Link>
        </Flex>
        <Grid columns={{initial:"repeat(1, 1fr)", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)"}} gap="3" align="center" justify="center">
            {offers.map((item, index) => (
                <Tist key={index} 
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    description={item.description}
                    price={item.price}
                    persons={item.persons}
                />
            ))}
        </Grid>
    </div>
  )
}

export default SpecialOffers