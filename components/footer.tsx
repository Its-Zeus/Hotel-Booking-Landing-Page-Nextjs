import { Flex } from '@radix-ui/themes'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Image, Link } from '@nextui-org/react'
import logowhite from '@/public/Logo-white.png'
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <div className='bg-[#1E1E1E] text-white'>
        <Flex direction="row" justify={{initial: 'center', md: 'between'}} align="center" px='9' py ='9' wrap='wrap' gapY='6' gapX='6' className='max-w-[1200px] mx-auto'>
            <Flex direction="column">
                <h1 className='text-2xl font-medium py-3'>Newsletter & Special Promo</h1>
                <div className="flex w-full max-w-sm items-center space-x-2 py-3">
                    <Input type="email" placeholder="Email" />
                    <Button className='bg-[#65AEF2]' type="submit">Subscribe</Button>
                </div>
            </Flex>
            <Flex direction="column" justify="center" align="center" gapY='5'>
                <Image src={logowhite.src} width={logowhite.width} height={logowhite.height} alt="logo" className='max-h-[82px] w-auto'/>
                <Flex direction="row" justify="between" gapX='9' gapY='6' wrap='wrap'>
                    <Flex direction="column" gapY='2'>
                        <Link color='secondary'>About us</Link>
                        <Link color='secondary'>Contact</Link>
                        <Link color='secondary'>Location</Link>
                    </Flex>
                    <Flex direction="column" gapY='2'>
                        <Link color='secondary'>FAQ</Link>
                        <Link color='secondary'>Terms of Use</Link>
                        <Link color='secondary'>Privacy Policie</Link>
                    </Flex>
                    <Flex direction="column" gapY='2'>
                        <Link color='secondary'>Services & Facilities</Link>
                        <Link color='secondary'>Careers</Link>
                        <Link color='secondary'>How to book</Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <div>
            <Separator className='max-w-[400px] mx-auto' />
            <p className='text-center text-sm py-5'>© Copyright Booking Hotels. All right reserved.</p>
        </div>
    </div>
  )
}

export default Footer