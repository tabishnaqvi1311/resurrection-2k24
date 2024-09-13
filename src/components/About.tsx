import Image from "next/image";
import about from "../app/assets/about.png";
import { Anton } from "next/font/google";
import AboutStats from "./AboutStats";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

export default function About() {
    return (
        <div className="relative flex items-center justify-between bg-black gap-10 h-screen" id="about">
            <Image src={about} alt="about" width={1000} height={1000} className="w-1/2 h-full object-cover md:block hidden " />
            <div className="flex flex-col bg-black md:w-1/2 p-10 h-full justify-evenly">
            <AboutStats font={anton}/>
            <div className="flex flex-col gap-4">
            <h1 className={`${anton.className} text-yellow-600 text-7xl`} >About</h1>
            <p className="text-white text-lg">
            Manav Rachna Educational Institutions (MREI) have become a leading name in quality education and innovation since their establishment in 1997. Comprising two universities, Manav Rachna International Institute of Research and Studies (MRIIRS) and Manav Rachna University (MRU) and twelve schools across five cities, MREI is home to over 30,000 students pursuing diverse disciplines.
            </p>
            </div>
            </div>
            <div className="absolute md:block hidden top-0 left-0 w-1/2 h-full bg-black opacity-50"></div>
        </div>
    )
}