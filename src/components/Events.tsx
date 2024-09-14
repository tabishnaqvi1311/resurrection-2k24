import Image from "next/image";
import Marquee from "react-fast-marquee";
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
                {/* <Marquee gradient={false} speed={150} pauseOnHover>
                    <div className='text-white text-2xl flex gap-20 overflow-hidden'>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event1} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl shadow-lg' />
                            <p>Music</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[250px] h-[250px]'>
                            <Image src={event2} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl shadow-lg ' />
                            <p>Dance</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event3} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl shadow-lg' />
                            <p>Theatre</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event4} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl shadow-lg' />
                            <p>Fashion</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event5} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl shadow-lg' />
                            <p>Fine Arts</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event6} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl shadow-lg' />
                            <p>Culinary</p>
                        </div>
                        <div></div>
                    </div>
                </Marquee> */}
                <Carousel />
            </div>
        </div>
    )
}