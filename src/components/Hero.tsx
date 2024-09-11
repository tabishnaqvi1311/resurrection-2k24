import Image from 'next/image';
import hero from "../app/assets/hero.png";
import { Anton } from "next/font/google";
import Button from './Button';

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

const Hero = () => {
    return (
        <div className='h-screen relative'>
            <div className='absolute inset-0 bg-background opacity-75'></div>
            <div className={` text-red-700 absolute top-1/4 md:text-9xl text-6xl text-center w-full flex flex-col justify-center items-center`}>
                <div className={`${anton.className} flex flex-col items-end`}>

                    <h1>Resurrection</h1>
                    <h2>2k24</h2>
                    <div className='bg-yellow-600 text-black md:text-4xl text-lg mt-2 w-fit p-3 rotate-3'>18-19th October</div>
                    <Button text={"REGISTER"}/>
                </div>
            </div>
            <Image src={hero} alt="logo" width={1000} height={1000} className='object-cover w-full h-full' />
        </div>
    )
}

export default Hero
