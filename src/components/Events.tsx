import Image from "next/image";
import Marquee from "react-fast-marquee";
import events from "../app/assets/events.png";
import { Anton } from "next/font/google";
import event1 from "../app/assets/event1.png"
import event2 from "../app/assets/event2.png"
import event3 from "../app/assets/event3.png"
import event4 from "../app/assets/event4.png"
import event5 from "../app/assets/event5.png"
import event6 from "../app/assets/event6.png"

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});


export default function Events() {
    return (
        <div className='h-screen relative' id="events">
            <div className='absolute inset-0 bg-background opacity-30'></div>
            <Image src={events} alt='theme' height={1000} width={1000} className='w-full h-full object-cover' />
            <div className={`absolute top-10 md:text-9xl text-5xl text-center w-full flex flex-col items-start gap-10 px-10 justify-evenly h-full`}>
                <h3 className={`${anton.className} text-white`}>Events</h3>
                <Marquee gradient={false} speed={120} pauseOnHover>
                    <div className='text-white text-2xl flex gap-20'>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event1} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl' />
                            <p>Music</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event2} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl ' />
                            <p>Dance</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event3} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl' />
                            <p>Theatre</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event4} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl' />
                            <p>Fashion</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event5} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl' />
                            <p>Fine Arts</p>
                        </div>
                        <div className='flex flex-col items-start gap-2 w-[300px] h-[300px]'>
                            <Image src={event6} alt='theme' height={200} width={200} className='w-full h-full object-cover rounded-xl' />
                            <p>Culinary</p>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}