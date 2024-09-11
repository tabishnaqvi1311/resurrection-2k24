import Image from "next/image";
import footerbg from "../assets/footer.png";
import { Anton } from "next/font/google";
import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

export default function Footer() {
    return (
        <div className="h-screen relative">
            <Image src={footerbg} alt="footer" width={1000} height={1000} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-background opacity-50"></div>
            <div className="absolute top-0 md:text-6xl text-3xl text-center w-full flex flex-col justify-around h-full items-center gap-10">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className={`${anton.className} text-white uppercase`}>Want To be a part of resurrection?</h1>
                    <button className="bg-black text-white px-6 py-3 text-lg rounded-xl  w-fit">Register Now</button>
                </div>
                <div className="flex md:flex-row flex-col justify-around w-full md:p-0 p-4 md:gap-0 gap-4">
                    <div className="flex flex-col items-start gap-5">
                        <div className="text-white flex flex-col items-start">
                            <h1 className={`${anton.className}`}>Contact Us</h1>
                            <div className="text-base flex flex-col items-start text-start ">
                                <p>Want to sponsor us? Have queries or enquires</p>
                                <p>Want to have a chat about the events? Let us know?</p>
                            </div>

                        </div>
                        <div className="text-white flex">
                            <FaInstagram size={40} />
                            <FaFacebookF size={40} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-sm">
                        <div className="flex items-center text-white gap-4">
                            <FaLocationDot size={40} color="#c4851d" />
                            <p>Manav Rachna Campus <br /> Sector 43, Aravalli Hills</p>
                        </div>
                        <div className="flex items-center text-white gap-4">
                            <FaPhoneAlt size={40} color="#c4851d" />
                            <p>+91 84477 80247</p>
                        </div>
                        <div className="flex items-center text-white gap-4">
                            <IoMdMail size={40} color="#c4851d" />
                            <p>mrfest@mrei.ac.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}