'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import event1 from "../app/assets/music1.jpg"
import event2 from "../app/assets/dance3.jpg"
import event3 from "../app/assets/theatre.jpg"
import event4 from "../app/assets/fashion.jpg"
import event5 from "../app/assets/fineart.jpg"
import event6 from "../app/assets/lit.jpg"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

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
        {
            id: 1, src: event1, alt: "image 1", title: "music", events: [
                'Indian', 'Classical', 'Western', 'Rap Wars', 'Beatbox', 'Battle of Bands', 'DJ Wars'
            ]
        },
        {
            id: 2, src: event2, alt: "image 2", title: "dance", events: [
                'Classical', 'Contemporary', 'Hip Hop', 'Lyrical', 'Folk', 'Tap Dance']
        },
        {
            id: 3, src: event3, alt: "image 3", title: "theatre", events: [
                'Stage Play', 'Monologue', 'Street Play'
            ]
        },
        {
            id: 4, src: event4, alt: "image 4", title: "fashion", events: [
                'Hairstyling', 'Self Makeup', 'Fashion Walk', 'High Glam Makeup', 'Cosplay'
            ]
        },
        {
            id: 5, src: event5, alt: "image 5", title: "fine arts", events: [
                'Culinary Arts', 'Canvas Painting', 'Grafitti', 'Mehndi Art', 'Photography', 'Face Painting'
            ]
        },
        {
            id: 6, src: event6, alt: "image 6", title: "literary", events: [
                'Storytelling', 'Standup Comedy', 'Poetry', 'Shayari'
            ]
        }
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
                                    className={`transition-all duration-300  bg-transparent border-none`}
                                >
                                    <CardContent className="md:p-10 p-0">
                                        <Dialog>
                                            <DialogTrigger>
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-cover aspect-[3/2] rounded-md"
                                                    height={1000}
                                                    width={1000} />
                                            </DialogTrigger>
                                            <DialogContent className='sm:max-w-[425px]'>
                                                <DialogHeader>
                                                    <DialogTitle className='capitalize text-yellow-600'>{image.title}</DialogTitle>
                                                    <DialogDescription>

                                                    </DialogDescription>
                                                </DialogHeader>
                                                {
                                                    image.events.map((event, index) => (
                                                        <p key={index} className='capitalize'>{event}</p>
                                                    ))
                                                }
                                            </DialogContent>
                                        </Dialog>
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
                    className="absolute flex left-0 top-1/2 -translate-y-1/2 "
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute flex right-0 top-1/2 -translate-y-1/2 "
                    onClick={scrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            {/* <div className='absolute right-20 top-40 gap-10 md:hidden flex'>
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
            </div> */}
        </>
    )
}