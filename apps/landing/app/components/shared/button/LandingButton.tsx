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
        <button className="flex items-center bg-secondary transition-all font-bold py-5 px-6 hover:bg-light" onClick={onClick}>
            {children}
            <Image className="ml-5" src={arrow} alt="arrow"></Image>
        </button>
    )
}