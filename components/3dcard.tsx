"use client";
 
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import room from "@/public/room.jpg"
import {Flex} from '@radix-ui/themes'
import { IoIosPerson } from "react-icons/io";
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
  price: string;
  persons: number
}

const Tist = (props : Props) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-3 drop-shadow-2xl">
        <CardItem translateZ="100" className="mt-0">
          <Image
            src={props.src}
            height={props.height}
            width={props.width}
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt={props.alt}
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xs font-bold mt-3 mb-1"
        >
          Room
        </CardItem>
        <Flex justify='between'>
            <CardItem translateZ="50" className="text-lg font-bold">
            {props.alt}
            </CardItem>
            <Flex align="center" gap="1">
                <IoIosPerson size={18}/>
                <CardItem translateZ="50" className="text-sm font-semibold">
                {props.persons}
                </CardItem>
            </Flex>
        </Flex>
        <CardItem
          translateZ="50"
          className="text-xs mt-3 mb-1"
        >
          {props.description}
        </CardItem>
        <CardItem
          translateZ="50"
          className="mt-3 mb-1 mx-auto"
        >
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="text-2xl font-bold text-center">{props.price}</p>
            <p className="text-sm font-normal text-center">/night</p>
          </div>
        </CardItem>
        <div className="flex justify-center items-center mt-5">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Book Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default Tist