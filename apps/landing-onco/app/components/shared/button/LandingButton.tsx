"use client"

import { PropsWithChildren } from "react"
import arrow from 'public/images/icons/arrow.svg'
import Image from "next/image"

type LoadingButtonProps = {
    onClick: () => void
}

export const LandingButton = ({ 
    children,
    onClick 
}: PropsWithChildren<LoadingButtonProps>) => {
    return (
        <button className="flex text-light items-center bg-primary font-bold py-5 px-6 hover:bg-primary-dark transition-all" onClick={onClick}>
            {children}
            <Image className="ml-5 brightness-[100]" src={arrow} alt="arrow"></Image>
        </button>
    )
}