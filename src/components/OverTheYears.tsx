import Button from "./Button";
import footerbg from "../app/assets/footer.png";
import Image from "next/image";
import { Anton } from "next/font/google";
import { overTheYears } from "@/app/constants";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

export default function OverTheYears() {
    return (
        <div className="h-screen relative" id="">
            <Image src={footerbg} alt="footer" width={1000} height={1000} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-background opacity-50"></div>
            <div className="absolute top-0 md:text-6xl text-3xl text-center w-full flex flex-col justify-around h-full items-center gap-10">
                <div className="flex flex-col gap-3 items-center justify-evenly h-full">
                    <h1 className={`${anton.className} text-white uppercase`}>
                        Ressurection Over The <span className="text-yellow-600">Years</span>
                    </h1>
                    <div className="flex justify-evenly">
                        {
                            overTheYears.map((year, index) => (
                                <div className="flex flex-col items-center">
                                    <Image src={footerbg} alt="year" height={200} width={200} className="aspect-auto"/>
                                    <p className="text-yellow-600 text-4xl">{year.title}</p>
                                    <p className="text-base text-white ">{year.description}</p>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}