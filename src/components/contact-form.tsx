
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ContactForm() {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-card border-primary/20 shadow-xl overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">Pronto para <span className="text-primary">aumentar as vendas</span>?</CardTitle>
            <CardDescription className="pt-2">Complete suas informações abaixo e um de nossos especialistas entrará em contato com você para uma análise gratuita da sua pizzaria e descobrir oportunidades reais de aumentar suas vendas.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {/*
              PASSO FINAL:
              Cole aqui o código de incorporação do seu formulário Tally.
              Você o obtém clicando em "Publish" -> "Share" -> "Embed" -> "Standard" no seu formulário Tally.
              O código se parecerá com um <iframe ...>.
            */}
            <div 
              className="tally-embed-placeholder" 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '500px',
                border: '2px dashed hsl(var(--border))',
                borderRadius: 'var(--radius)',
                margin: '1.5rem',
                textAlign: 'center',
                padding: '1rem',
                color: 'hsl(var(--muted-foreground))'
              }}
            >
              Seu formulário Tally aparecerá aqui. Siga o tutorial para obter e colar o código de incorporação.
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
