import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black">
       <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-0"></div>
       <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight max-w-4xl">
              Sua pizzaria está perdendo clientes todos os dias e você nem percebe. Descubra agora como <span className="text-primary">virar o jogo</span> sem gastar com estratégias inúteis.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Receba um diagnóstico GRATUITO e personalizado para seu negócio e saiba exatamente o que está travando o seu crescimento.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20">
                <a href="#contato">QUERO MEU DIAGNÓSTICO GRATUITO</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
