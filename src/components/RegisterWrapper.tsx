import Image from "next/image";
import register from "../app/assets/register.png";

export default function RegisterWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen relative">
            <div id="hero"/>
            <div id="contact"/>
            <div className="fixed inset-0 bg-background opacity-70"></div>
            <div className="absolute top-40 md:text-8xl text-6xl text-center w-full flex flex-col justify-center items-center gap-10 ">

                {children}
            </div>
            <Image src={register}
                alt="register"
                width={500}
                height={500}
                className="object-cover w-full h-full fixed -z-10 "
            />
        </div>
    )
}