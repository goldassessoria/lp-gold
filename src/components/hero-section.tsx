import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black">
       <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-0"></div>
       <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight max-w-4xl">
              Você já tem boas pizzas, mas algo está <span className="text-primary">travando suas vendas.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl -mt-2">
              Descubra o que é com o Diagnóstico Gratuito da Gold e veja onde está o verdadeiro gargalo da sua pizzaria.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20">
                <a href="#contato">QUERO MEU DIAGNÓSTICO GRATUITO</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
