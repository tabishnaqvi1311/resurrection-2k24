import Button from "./Button";
import Image from "next/image";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";
import i2016 from "../app/assets/i2016.png";
import i2017 from "../app/assets/i2017.png";
import i2019 from "../app/assets/i2019.png";
import i2023 from "../app/assets/i2023.png";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

const content = [
    {
        title: "2016",
        description: "Second best EDM night of Asia"
    },
    {
        title: "2017",
        description: "Benchmark set with Farhan Akhtar’s Performance"
    },
    {
        title: "2019",
        description: "Mother of All Fests across Delhi NCR"
    },
    {
        title: "2023",
        description: "Best of inter universities and college participation"
    }
]

export default function OverTheYears() {
    return (
        <div className="md:flex-row flex-col h-screen md:flex hidden">
            {[i2016, i2017, i2019, i2023].map((image, index) => (
                <div className="md:w-1/4 w-full relative" key={index}>
                    <Image
                        src={image}
                        alt={`Image ${index}`}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full -z-10"
                    />
                    <div 
                        className="inset-0 absolute bg-black bg-opacity-50 z-10"
                    />
                    <div className={`absolute ${index & 1 ? "bottom-10" : "top-10"} w-1/2 z-10 pl-5`}>
                        <h1 className={`text-yellow-600 text-7xl ${anton.className}`}>{content[index].title}</h1>
                        <p className="text-white">{content[index].description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}