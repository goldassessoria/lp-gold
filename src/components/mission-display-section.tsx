import { CheckCircle } from 'lucide-react';

const diagnosisBenefits = [
  "Uma análise completa da sua presença digital (Instagram, Facebook, Cardápio Digital, iFood, WhatsApp, Google).",
  "Identificação dos 3 principais erros que estão fazendo você perder clientes.",
  "Um plano de ação inicial para aumentar pedidos e faturamento já no próximo mês.",
];

export function MissionDisplaySection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              O que você vai receber no <span className="text-primary">diagnóstico gratuito</span>:
            </h2>
            <ul className="space-y-4 text-left inline-block">
              {diagnosisBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <span className="text-lg text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground font-medium">(sem custo, sem compromisso)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
