"use client"

import CountUp from "react-countup";

export default function AboutStats({font}: any) {
    return (
        <div className={`flex text-white justify-between`}>
            <div className={`flex flex-col`}>
                <div className={`${font.className} text-yellow-600 md:text-6xl text-4xl`}>
                    <CountUp enableScrollSpy end={10} duration={2} />k+
                </div>

                <div className="text-lg">Students <br />Within <br />Campus</div>
            </div>
            <div className={`flex flex-col`}>
                <div className={`${font.className} text-yellow-600 md:text-6xl text-4xl`}>
                    <CountUp enableScrollSpy end={30} duration={2} />k+
                </div>
                <div className="text-lg">Overall <br />Unique <br /> Attendees</div>
            </div>
            <div className={`flex flex-col`}>
                <div className={`${font.className} text-yellow-600 md:text-6xl text-4xl`}>
                    <CountUp enableScrollSpy end={30} duration={2} />+
                </div>
                <div className="text-lg">Events</div>
            </div>
        </div>
    )
}