"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from 'react';

const clients = [
  {
    name: "Cliente 1",
    logo: "https://i.imgur.com/Q3IMhyA.png",
    width: 200,
    height: 80,
  },
  {
    name: "Cliente 3",
    logo: "https://i.imgur.com/dUQ0tCC.png",
    width: 200,
    height: 80,
  },
  {
    name: "Cliente 4",
    logo: "https://i.imgur.com/5gnbR5A.png",
    width: 200,
    height: 80,
  },
];

export function TrustedBySection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            Algumas pizzarias que já estão <span className="text-primary">escalando com a Gold</span>
          </h2>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="basis-1/2 pl-2 md:pl-4 md:basis-1/4">
                <div className="p-1">
                    <div className="p-4 rounded-lg flex justify-center items-center h-36">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={client.width}
                        height={client.height}
                        priority={false}
                        className="object-contain h-32 w-auto"
                      />
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Slide anterior" className="left-0 md:-left-12 bg-background/50 hover:bg-background/75" />
          <CarouselNext aria-label="Próximo slide" className="right-0 md:-right-12 bg-background/50 hover:bg-background/75" />
        </Carousel>
         <div className="py-2 text-center text-sm text-muted-foreground">
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        className={`h-2 w-2 rounded-full ${current === i + 1 ? 'bg-primary' : 'bg-muted'}`}
                        aria-label={`Ir para o slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20">
                <a href="#contato">QUERO SER O PRÓXIMO A ESCALAR</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
