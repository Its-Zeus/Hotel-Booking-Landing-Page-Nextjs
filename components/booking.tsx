import React from 'react'
import {Grid} from '@radix-ui/themes'
import { DatePickerDemo } from './datepicker'
import { IoIosPerson } from "react-icons/io";
import SelectComp from './selectcomp';
import { MdChildCare } from "react-icons/md";
import { Button } from "@/components/ui/button"



const Booking = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='my-10 bg-[#E9F3F6] text-center inline-block w-fit px-20 py-16 rounded-3xl'>

        <h1 className='text-3xl font-medium text-center mb-1'>Book a Room</h1>
        <p className='text-base text-center font-medium text-[#5E5E5E] mb-10'>Discover the perfect space for you!</p>
        <div className='flex flex-row gap-9 flex-wrap justify-center m-auto'>
        <div className='ml-0'>
            <p className='font-bold self-start text-left'>Date</p>
            <DatePickerDemo/>
        </div>
        <div>
            <p className='font-bold text-left'>Person</p>
            <div className='flex flex-row gap-6 bg-white px-5 rounded-[6px]'>
                <div className='flex flex-row'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <IoIosPerson size={40}/>
                        <p className='font-semibold'>Adults</p>
                        <SelectComp/>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <MdChildCare size={40}/>
                        <p className='font-semibold'>Adults</p>
                        <SelectComp/>
                    </div>
                </div>
            </div>
        </div>
        <Button className='self-end bg-primary-500 hover:bg-white hover:text-primary-500 hover:outline outline-primary-500 outline-1'>BOOK NOW</Button>

        </div>
        </div>
    </div>
  )
}

export default Booking