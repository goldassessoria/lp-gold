import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function AboutUsSection() {
  return (
    <section className="py-16 md:py-24 bg-black">
       <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
              A assessoria de marketing Nº 1 <br />
              <span className="text-primary">especialista em crescimento de pizzarias</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                Idacio Farias e Maciel Silva fundaram a Gold com um propósito claro: transformar pizzarias em verdadeiras potências de vendas através do marketing digital. Unidos pela experiência em gestão e estratégias de tráfego pago, eles criaram uma assessoria que vai além de simples anúncios, entregando resultados reais, consistentes e escaláveis.
            </p>
            </div>
            <div className="relative h-80 w-full md:h-[400px]">
                <Image
                    src="https://i.imgur.com/vbje3r1.png"
                    alt="Dashboard de resultados de uma pizzaria"
                    fill
                    className="object-contain"
                    data-ai-hint="dashboard results"
                />
            </div>
        </div>
        <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-muted-foreground italic">
             "Nosso método único gera milhares de pedidos mensais para donos de pizzarias em todo o Brasil. Combinamos estratégias de marketing digital, otimização de processos e análise de dados para transformar seu negócio em uma verdadeira <span className="text-primary font-semibold">máquina de lucros</span>."
            </p>
        </div>
      </div>
    </section>
  );
}
