'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import event1 from "../app/assets/event1.png"
import event2 from "../app/assets/event2.png"
import event3 from "../app/assets/event3.png"
import event4 from "../app/assets/event4.png"
import event5 from "../app/assets/event5.png"
import event6 from "../app/assets/event6.png"

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener('resize', listener)
        return () => window.removeEventListener('resize', listener)
    }, [matches, query])

    return matches
}

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const isMobile = useMediaQuery('(max-width: 640px)')

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const images = [
        { id: 1, src: event1, alt: "image 1", title: "dance" },
        { id: 2, src: event2, alt: "image 2", title: "music" },
        { id: 3, src: event3, alt: "image 3", title: "theatre" },
        { id: 4, src: event4, alt: "image 4", title: "fashion" },
        { id: 5, src: event5, alt: "image 5", title: "fine arts" },
        { id: 6, src: event6, alt: "image 6", title: "culinary" },
    ]

    return (
        <>
            <div className="relative w-full mx-auto px-4 ">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                className={`flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0  ${isMobile ? 'px-4' : 'px-2'}`}
                            >
                                <Card
                                    className={`transition-all duration-300 border-none bg-transparent`}
                                >
                                    <CardContent className="md:p-10 p-0">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover aspect-[3/2] rounded-md"
                                            height={1000}
                                            width={1000} />
                                        <p className='text-2xl text-white capitalize'>{image.title}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute md:flex hidden left-0 top-1/2 -translate-y-1/2 "
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute md:flex hidden right-0 top-1/2 -translate-y-1/2 "
                    onClick={scrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <div className='absolute right-20 top-40 gap-10 md:hidden flex'>
                <Button
                    variant="outline"
                    size="icon"
                    className="-translate-y-1/2"
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="-translate-y-1/2"
                    onClick={scrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </>
    )
}