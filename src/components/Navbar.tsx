"use client";

import Image from "next/image";
import logo from "../app/assets/logo.webp"
import test from "../app/assets/test.webp"
import { navLinks } from "@/app/constants";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {

    const [showButton, setShowButton] = useState<boolean>(false);
    const [toggle, setToggle] = useState<boolean>(false);

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
        <nav className="flex md:justify-around justify-between fixed top-0 w-full z-10 items-center bg-background py-4 px-6">
            <div className="flex justify-center items-center">
                <Image src={logo} alt="logo" width={50} height={50} onClick={() => setToggle(prev => !prev)}/>
                <Image src={test} alt="logo" width={200} height={200} className="md:block hidden" />
            </div>
            <div className="text-gray-300 flex items-center gap-12">
                {showButton ? <Link href={"/register"}><button className={`bg-[#c4851d] p-2 rounded-xl text-background hover:bg-yellow-600 transition-all duration-200 font-medium`}>
                    Register Now
                </button></Link> : <button className={`bg-background p-2 rounded-xl text-background`}>
                    Register Now
                </button>}
                <ul className="justify-between gap-12 md:flex hidden">
                    {
                        navLinks.map((link, i) => (
                            <a href={link.link} key={i} className="text-white hover:text-yellow-600 cursor-pointer transition-all duration-200">{link.title}</a>
                        ))
                    }
                </ul>
                {!toggle ? <GiHamburgerMenu className="text-white md:hidden block" onClick={() => setToggle(prev => !prev)} size={40}/> : <IoClose className="text-white md:hidden block" onClick={() => setToggle(prev => !prev)} size={40}/>}
                {toggle && <ul className="justify-between gap-5 md:hidden flex flex-col absolute top-20 right-0 bg-background w-full items-center py-3">
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