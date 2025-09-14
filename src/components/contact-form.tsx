
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ContactForm() {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-card border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">Pronto para <span className="text-primary">aumentar as vendas</span>?</CardTitle>
            <CardDescription className="pt-2">Complete suas informações abaixo e um de nossos especialistas entrará em contato com você para uma análise gratuita da sua pizzaria e descobrir oportunidades reais de aumentar suas vendas.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* --- PASSO FINAL: COLE O CÓDIGO DO TALLY AQUI --- */}
            {/* 1. Crie seu formulário em tally.so */}
            {/* 2. Clique em "Publish" -> "Share" -> "Embed" -> "Standard" e copie o código. */}
            {/* 3. Delete este div abaixo e cole o código do iframe do Tally no lugar dele. */}
            <div className="h-96 w-full rounded-md border-2 border-dashed border-muted-foreground/30 bg-muted/20 flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Seu formulário Tally aparecerá aqui.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
