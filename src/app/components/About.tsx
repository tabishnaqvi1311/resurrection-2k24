import Image from "next/image";
import about from "../assets/about.png";
import { Anton } from "next/font/google";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

export default function About() {
    return (
        <div className="flex items-center justify-between bg-black gap-10 h-screen">
            <Image src={about} alt="about" width={200} height={200} className="w-1/2 h-full object-cover md:block hidden" />
            <div className="flex flex-col bg-black md:w-1/2 p-10 h-full justify-evenly">
                <div className={`flex text-white justify-between`}>
                    <div className={`flex flex-col`}>
                        <div className={`${anton.className} text-yellow-600 text-5xl`}>10k+</div>
                        <div className="text-xl">Students <br />Within <br />Campus</div>
                    </div>
                    <div className={`flex flex-col`}>
                        <div className={`${anton.className} text-yellow-600 text-5xl`}>30k+</div>
                        <div className="text-xl">Overall <br />Unique <br /> Attendees</div>
                    </div>
                    <div className={`flex flex-col`}>
                        <div className={`${anton.className} text-yellow-600 text-5xl`}>30+</div>
                        <div className="text-xl">Events</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className={`${anton.className} text-yellow-600 text-5xl`} >About</h1>
                    <p className="text-white text-base">
                        Manav Rachna Educational Institutions (MREI) have become a leading name in quality education and innovation since their establishment in 1997. Comprising two Universities—Manav Rachna International Institute of Research and Studies (MRIIRS) and Manav Rachna University (MRU)—and twelve schools across five cities, MREI is home to over 30,000 students pursuing diverse disciplines.
                    </p>
                </div>
            </div>
        </div>
    )
}