"use client";

import Image from "next/image";
import logo from "../app/assets/logo.webp"
import mrlogo from "../app/assets/mrlogo.png"
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {

    const [showButton, setShowButton] = useState<boolean>(false);
    const [toggle, setToggle] = useState<boolean>(false);

    const pathName = usePathname();

    const handleScroll = () => {
        const hero = document.getElementById('hero');
        const footer = document.getElementById('contact');

        const heroInView = hero!.getBoundingClientRect().top < window.innerHeight && hero!.getBoundingClientRect().bottom > 0;
        const footerInView = footer!.getBoundingClientRect().top < window.innerHeight && footer!.getBoundingClientRect().bottom > 0;

        setShowButton(!heroInView && !footerInView);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <nav className="flex md:justify-around justify-between fixed top-0 w-full z-20 items-center bg-[#0b0b0b] py-4 px-6 border-b-[0.5px] border-[#333]">
            <Link href={"/"}>
                <div className="flex justify-center items-center">

                    <Image src={mrlogo} alt="logo" width={150} height={150} />
                    <Image src={logo} alt="logo" width={50} height={50} />
                    {/* <Image src={test} alt="logo" width={200} height={200} className="md:block hidden" /> */}
                </div>
            </Link>
            <div className="text-gray-300 flex items-center gap-12">
                {pathName !== "/register" && <Link href={"/register"}>
                    <button
                        className={`p-2 rounded-xl text-background md:transition-all md:duration-200 font-medium ${showButton ? "hover:bg-yellow-600 bg-[#c4851d] md:static fixed bottom-10 right-10" : "bg-transparent text-transparent"}`}
                        disabled={!showButton}>
                        Register Now
                    </button>
                </Link>}
                <ul className="justify-between gap-12 md:flex hidden">
                    {
                        navLinks.map((link, i) => (
                            <Link href={`/${link.link}`} key={i} className="text-white hover:text-yellow-600 cursor-pointer transition-all duration-200">{link.title}</Link>
                        ))
                    }
                </ul>
                {!toggle ? <GiHamburgerMenu className="text-white md:hidden block" onClick={() => setToggle(prev => !prev)} size={40} /> : <IoClose className="text-white md:hidden block" onClick={() => setToggle(prev => !prev)} size={40} />}
                {toggle && <ul className="justify-between gap-5 md:hidden flex flex-col absolute top-20 right-0 bg-[#0b0b0b] w-full items-center py-3">
                    {
                        navLinks.map((link, i) => (
                            <a href={link.link} key={i} className="text-white hover:text-yellow-600 cursor-pointer transition-all duration-200">{link.title}</a>
                        ))
                    }
                </ul>}
            </div>
        </nav>
    )
}