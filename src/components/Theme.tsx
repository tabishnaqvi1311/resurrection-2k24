import React from 'react'
import theme from "../app/assets/theme.png"
import Image from 'next/image'
import { Anton } from 'next/font/google';

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

const Theme = () => {
    return (
        <div className='h-screen relative'>
            <div className='absolute inset-0 bg-background opacity-50'></div>
            <Image src={theme} alt='theme' height={1000} width={1000} className='w-full h-full object-cover' />
            <div className={`absolute top-1/4 md:text-9xl text-6xl text-center w-full flex flex-col justify-center items-center gap-10`}>
                <div className='md:text-3xl text-sm bg-yellow-600 text-white md:px-36 px-16 py-5 rounded-full font-medium'>Theme for Resurrection 2k24</div>
                <p className={`${anton.className} text-white tracking-wide uppercase`}>
                    Step Up 2 <br /> Stardom
                </p>

            </div>
        </div>
    )
}

export default Theme
