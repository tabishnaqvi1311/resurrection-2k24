import RegisterWrapper from "@/components/RegisterWrapper";
import localFont from "next/font/local";
import { Anton } from "next/font/google";
import FormClient from "@/components/FormClient";

const breathy = localFont({
    src: "../fonts/BreathneyDemo.ttf",
});

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
});


export default function Page() {
    return (
        <main>
            <RegisterWrapper>
                    <div className="flex flex-col items-center h-auto w-full">
                        <div className="flex md:flex-row flex-col absolute ">
                            <h1 className={`${anton.className} text-white`}>
                                Events
                            </h1>
                            <span className={`${breathy.className} text-red-600 -rotate-12 text-5xl relative md:-left-12 left-0 md:-bottom-10 bottom-4`}>
                                Registration
                            </span>
                        </div>
                        <div className="mt-24 w-full">
                            <FormClient />
                        </div>
                    </div>
            </RegisterWrapper>
        </main>
    )
}