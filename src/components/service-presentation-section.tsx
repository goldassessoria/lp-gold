import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Target, TrendingDown } from 'lucide-react';
import type { ElementType } from 'react';

const painPoints: { icon: ElementType; text: string }[] = [
  {
    icon: TrendingDown,
    text: "Sua pizzaria está no iFood, você paga um cardápio digital, mas continua sem resultados satisfatórios?"
  },
  {
    icon: Target,
    text: "Investe em tráfego pago, panfletos, mas sente que as vendas nunca aumentam?"
  },
  {
    icon: HelpCircle,
    text: "Seus concorrentes aparecem em todos os lugares, enquanto você luta para ser lembrado?"
  }
];

export function ServicePresentationSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Se você se identifica com isso, <span className="text-primary">podemos ajudar</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-background border-primary/20 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <point.icon className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <p className="text-xl max-w-4xl mx-auto">
                Você não está sozinho. <span className="font-bold">93% das pizzarias</span> passam por isso porque não têm uma estratégia de marketing construída <span className="text-primary font-semibold">sob medida e exclusiva</span> para o próprio negócio.
            </p>
        </div>
      </div>
    </section>
  );
}
