import React from 'react'
import {Image, Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import logo from '@/public/logo.png'


const Header = () => {
  const menuItems = [
    "Home",
    "About",
    "Menu",
    "New"
  ];
  return (
    <div className="relative">
          <Navbar className='sm:mx-0 w-auto sm:justify-center' classNames={{wrapper:'sm:justify-center flex flex-row bg-background sm:py-2 sm:px-8 mx-0 absolute top-0 z-30 sm:top-5 sm:rounded-xl sm:w-auto', item:["data-[active=true]:text-primary"], }}>
      <NavbarContent className='hidden sm:flex sm:justify-between items-center' justify='start'>
        <NavbarItem isActive>
          <Link color='foreground' href='#' className='text-lg'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-lg'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-lg'>
            Newsletter
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex sm:flex-none md:mx-8' justify='center'>
        <NavbarBrand>
          <Image src={logo.src} alt='Hotel Logo' width={60}/>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex items-center sm:justify-between' justify='end'>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-lg'>
            Rooms
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-lg'>
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-lg'>
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='flex sm:hidden' justify='start'>
        <NavbarBrand>
          <Image src={logo.src} alt='Hotel Logo' width={60}/>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
        </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color= "foreground"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
  )
}

export default Header