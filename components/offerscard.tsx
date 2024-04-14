"use client";
import React from 'react'
import Tist from './3dcard'
import bedroom from '@/public/bedroom.jpg'
import meet from '@/public/meet.jpg'
import romantic from '@/public/romantic.jpg'
import {Flex, Link, Grid} from '@radix-ui/themes'

const offers = [
    {
        src: bedroom.src,
        alt: 'Honeymoon',
        width: bedroom.width,
        height: bedroom.height,
        description : 'Indulge in a Memorable One-Time Romantic Dinner for Two',
        price : '$699',
    }
    ,
    {
        src: meet.src,
        alt: 'Meetings',
        width: meet.width,
        height: meet.height,
        description : 'Experience an Exclusively Private Environment to Boost Your Productivity',
        price : '$999',
    }
    ,
    {
        src: romantic.src,
        alt: 'Romantic Dining', 
        width: romantic.width,
        height: romantic.height,
        description : 'Indulge in a Memorable One-Time Romantic Dinner for Two',
        price : '$499',
    }
]

const OffersCard = () => {
  return (
    <Grid columns={{initial:"repeat(2, 1fr)", md:"repeat(3, 1fr)"}} gap="3" align="center" justify="center">
    {offers.map((item, index) => (
        <Tist
            key={index}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            description={item.description}
            price={item.price}
        />
    ))}
</Grid>
  )
}

export default OffersCard