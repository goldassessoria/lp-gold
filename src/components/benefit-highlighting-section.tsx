"use client";

import { Smartphone, TrendingUp, Users } from 'lucide-react';
import type { ElementType } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from 'react';

const benefits: { icon: ElementType; description: string }[] = [
  {
    icon: TrendingUp,
    description: "Aumentar o faturamento em até 70% em 90 dias",
  },
  {
    icon: Users,
    description: "Criar estratégias de fidelização que multiplicam pedidos recorrentes todos os meses",
  },
  {
    icon: Smartphone,
    description: "Reduzir dependência do iFood e aumentar vendas diretas pelo Aplicativo próprio ou Cardápio Digital",
  },
];

const resultsImages = [
    { src: "https://i.imgur.com/bmv9v2i.png", alt: "Resultado de cliente 1" },
    { src: "https://i.imgur.com/i28laba.png", alt: "Resultado de cliente 2" },
    { src: "https://i.imgur.com/vFZdBUS.png", alt: "Resultado de cliente 3" },
    { src: "https://i.imgur.com/dCDJHnu.png", alt: "Resultado de cliente 4" },
];

export function BenefitHighlightingSection() {
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Somos especialistas em marketing para <span className="text-primary">pizzarias</span></h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Já ajudamos diversos empresários como você a:</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md border border-transparent transition-colors duration-300">
              <div className="mb-4 p-4 bg-primary/10 rounded-full">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Resultados que já geramos para alguns <span className="text-primary">clientes</span></h2>
          </div>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {resultsImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="relative aspect-[9/16] w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={false}
                        className="object-contain"
                        data-ai-hint="mobile dashboard"
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
                          className={`h-2 w-2 rounded-full transition-colors ${current === i + 1 ? 'bg-primary' : 'bg-muted'}`}
                          aria-label={`Ir para o slide ${i + 1}`}
                      />
                  ))}
              </div>
          </div>
            <p className="text-center text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">
                *Obs. Esses resultados dos prints são apenas dos anúncios, o faturamento geral total do cliente é muito maior.
            </p>
        </div>
      </div>
    </section>
  );
}
