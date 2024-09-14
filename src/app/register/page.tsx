import { Anton } from "next/font/google";
import FormClient from "@/components/FormClient";
import register from "../assets/register.png";
import Image from "next/image";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

export default function Page() {
    return (
        <>
            <div id="hero" /><div id="contact" />
            <main className="relative md:flex block items-center justify-between bg-[#0b0b0b] gap-10 h-screen ">
                <div className="flex flex-col md:w-1/2 h-full md:mt-40 mt-20 text-white">
                    <FormClient />
                </div>
                <Image src={register} alt="about" width={1000} height={1000} className="w-1/2 h-full object-cover md:block hidden fixed right-0" />
                <div className="fixed md:block hidden top-0 right-0 w-1/2 h-full bg-[#0b0b0b] opacity-50"></div>
                <div className="fixed  top-0 left-0 -z-10 md:w-1/2 w-full h-full bg-[#0b0b0b] opacity-100"></div>
            </main>
        </>
    )
}