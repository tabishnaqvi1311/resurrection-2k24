import RegisterWrapper from "@/components/RegisterWrapper";
import localFont from "next/font/local";
import { Anton } from "next/font/google";
import FormClient from "@/components/FormClient";
import register from "../assets/register.png";
import Image from "next/image";

// const breathy = localFont({
//     src: "../fonts/BreathneyDemo.ttf",
// });

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});


export default function Page() {
    return (
        <main>
            <div id="hero" />
            <div id="contact" />
            {/* <RegisterWrapper>
                    <div className="flex flex-col items-center h-auto w-full">
                        <div className="flex md:flex-row flex-col absolute ">
                            <h1 className={`${anton.className} text-white`}>
                                Events
                            </h1>
                            <span className={`${breathy.className} text-red-600 -rotate-12 text-5xl relative md:-left-12 left-0 md:-bottom-10 bottom-4`}>
                                Registration
                            </span>
                        </div>
                        <div className="mt-24 w-full">
                            <FormClient />
                        </div>
                    </div>
            </RegisterWrapper> */}
            <div className="relative flex items-center justify-between bg-[#0b0b0b] gap-10 h-screen" id="about">
                <div className="flex flex-col md:w-1/2 p-10 h-full justify-evenly text-white">
                    <FormClient />
                </div>
                <Image src={register} alt="about" width={1000} height={1000} className="w-1/2 h-full object-cover md:block hidden fixed right-0" />
                <div className="fixed md:block hidden top-0 right-0 w-1/2 h-full bg-[#0b0b0b] opacity-50"></div>
                <div className="fixed top-0 left-0 -z-10 md:w-1/2 w-full h-full bg-[#0b0b0b] opacity-100"></div>
            </div>

        </main>
    )
}