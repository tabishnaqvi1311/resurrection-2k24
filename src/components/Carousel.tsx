'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    { id: 1, src: "../app/assets/event1.png", alt: "image 1" },
    { id: 2, src: "../app/assets/event2.png", alt: "image 2" },
    { id: 3, src: "../app/assets/event3.png", alt: "image 3" },
    { id: 4, src: "../app/assets/event4.png", alt: "image 4" },
    { id: 5, src: "../app/assets/event5.png", alt: "image 5" },
    { id: 6, src: "../app/assets/event6.png", alt: "image 6" },
  ]

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0 ${
                isMobile ? 'px-4' : 'px-2'
              }`}
            >
              <Card
                className={`transition-all duration-300 ${
                  !isMobile && index === 2 ? 'scale-110 z-10' : 'scale-100 z-0'
                }`}
              >
                <CardContent className="p-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover aspect-[3/2] rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}