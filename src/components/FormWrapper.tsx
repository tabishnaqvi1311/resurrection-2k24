import { FormWrapperProps } from "@/types/FormWrapperProps";
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';

const breathy = localFont({
    src: "../app/fonts/BreathneyDemo.ttf",
});

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});

export default function FormWrapper({ title, subtitle, children }: FormWrapperProps) {
    return (
        <div className="flex flex-col gap-10 items-center w-full ">
            <div className={`flex flex-col gap-2 ${anton.className} `}>
                <div className="flex md:flex-row flex-col mb-5">
                    <h1 className={`${anton.className} text-white text-7xl`}>
                        Events
                    </h1>
                    <span className={`${breathy.className} text-red-600 -rotate-12 text-5xl relative md:-left-12 left-0 md:-bottom-10 bottom-4`}>
                        Registration
                    </span>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-5">
                {children}
            </div>
        </div>
    )
}