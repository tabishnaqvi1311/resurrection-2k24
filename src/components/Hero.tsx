import Image from 'next/image';
import hero from "../app/assets/hero.png";
import { Anton } from "next/font/google";
import Button from './Button';
import Link from 'next/link';
import logo from '../app/assets/logo.webp';
import localFont from 'next/font/local';

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

const breathy = localFont({
    src: "../app/fonts/BreathneyDemo.ttf",
});

const Hero = () => {
    return (
        <div className='h-screen bg-[#0b0b0b]' id='hero'>
            {/* <div className="main">
                <div className='gradient'/>
            </div> */}
            <div className='absolute inset-0 bg-[#0b0b0b] opacity-85'></div>
            <div className={` text-red-700 absolute md:top-1/4 top-1/3 md:text-9xl text-6xl text-center w-full flex md:justify-start justify-center md:pl-20 `}>
                <div className={`${anton.className} flex flex-col md:items-start items-center gap-2`}>
                    <h1>Resurrection</h1>
                    <h2>2k24</h2>
                    <div className={`bg-yellow-600 text-black md:text-4xl text-2xl mt-2 w-fit md:p-5 p-3 rotate-3 font-bold ${breathy.className}`}>18-19th October</div>
                    <Link href="/register"><Button text={"REGISTER"}/></Link>
                </div>
                {/* <div>
                    <Image src={logo} alt='image' width={500} height={500} className=''/>
                </div> */}
            </div>
            <Image src={hero} alt="logo" width={1000} height={1000} className='object-cover w-full h-full' />
        </div>
    )
}

export default Hero
