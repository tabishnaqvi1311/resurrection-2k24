import Image from "next/image";
import logo  from "../assets/logo.webp"
import test from "../assets/test.webp"

export default function Navbar() {
    return(
        <nav className="flex md:justify-around justify-between fixed top-0 w-full z-10  items-center bg-background p-4">
            <div className="flex justify-center items-center">
                <Image src={logo} alt="logo" width={50} height={50}/>
                <Image src={test} alt="logo" width={200} height={200} className="md:block hidden"/>
            </div>
            {/* <div className="text-gray-300">
                <ul className="flex justify-between gap-12">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div> */}
            <button className="bg-[#c4851d] p-2 rounded-xl text-background hover:bg-yellow-600 transition-all duration-200 font-medium">
                Register Now
            </button>
        </nav>
    )
}