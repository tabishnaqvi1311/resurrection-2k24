import Image from "next/image";
import events from "../app/assets/events.png";
import { Anton } from "next/font/google";
import Carousel from "./Carousel";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});


export default function Events() {
    return (
        <div className='h-screen relative' id="events">
            <div className='absolute inset-0 bg-[#0b0b0b] opacity-30'></div>
            <Image src={events} alt='theme' height={1000} width={1000} className='w-full h-full object-cover' />
            <div className={`absolute top-0 md:text-7xl text-4xl text-center w-full flex flex-col items-start px-10 justify-evenly h-full`}>
                <div className="flex flex-col items-start ">
                    <h3 className={`${anton.className} text-white`}>Events</h3>
                    <p className="text-xl text-yellow-600">Click on an event to know more</p>
                </div>
                <Carousel />
            </div>
        </div>
    )
}