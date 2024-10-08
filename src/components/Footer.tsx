import { Anton } from "next/font/google";
import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { cancellationRefundLink, pricingPolicyLink, privacyPolicyLink, termsConditionsLink } from "@/constants";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-red-900 to-[#540101] p-10" id="contact">
            <div className="md:text-6xl text-3xl text-center w-full flex flex-col justify-around h-full items-center gap-10">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className={`${anton.className} text-white uppercase`}>Want To be a part of resurrection?</h1>
                    <Link href={"/register"}><button className="bg-black text-yellow-600 px-6 py-3 text-lg rounded-xl w-fit">Register Now</button></Link>
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
                            <a href="https://www.instagram.com/resurrectionmr/" referrerPolicy="no-referrer" target="_blank"> <FaInstagram size={40} /></a>
                            <FaFacebookF size={40} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-sm">
                        <div className="flex items-center text-white gap-4">
                            <FaLocationDot size={30} color="#c4851d" />
                            <p>Manav Rachna Campus <br /> Sector 43, Aravalli Hills</p>
                        </div>
                        <div className="flex items-center text-white gap-4">
                            <FaPhoneAlt size={30} color="#c4851d" />
                            <p>+91 84477 80247</p>
                        </div>
                        <div className="flex items-center text-white gap-4">
                            <IoMdMail size={30} color="#c4851d" />
                            <p>mrfest@mrei.ac.in</p>
                        </div>
                    </div>
                </div>
                <div className="text-sm flex sm:flex-row flex-col text-yellow-600 gap-7">
                    <a href={termsConditionsLink}>Terms & Conditions</a>
                    <a href={privacyPolicyLink}>Privacy Policy</a>
                    <a href={pricingPolicyLink}>Pricing Policy</a>
                    <a href={cancellationRefundLink}>Cancellation & Refund Policy</a>
                </div>
            </div>
        </div>
    )
}