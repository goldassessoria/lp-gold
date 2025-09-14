
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  // SUBSTITUA COM SEU ENDPOINT DO FORMSPREE
  const formspreeEndpoint = "https://formspree.io/f/mkgvanby";

  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-card border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">Pronto para <span className="text-primary">aumentar as vendas</span>?</CardTitle>
            <CardDescription className="pt-2">Complete suas informações abaixo e um de nossos especialistas entrará em contato com você para uma análise gratuita da sua pizzaria e descobrir oportunidades reais de aumentar suas vendas. Seus dados estão 100% seguros e serão usados apenas para esse contato.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formspreeEndpoint} method="POST" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Seu nome</Label>
                <Input id="name" name="name" placeholder="Seu nome" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Seu contato (WhatsApp)</Label>
                <Input id="contact" name="contact" placeholder="(XX) XXXXX-XXXX" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pizzeriaName">Nome da sua Pizzaria</Label>
                <Input id="pizzeriaName" name="pizzeriaName" placeholder="Pizzaria do John" required />
              </div>

              <div className="space-y-2">
                <Label>Quanto sua pizzaria já investe em marketing por mês?</Label>
                <Select name="monthlyInvestment" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um valor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500">R$0 a R$500</SelectItem>
                    <SelectItem value="500-1200">R$500 a R$1.200</SelectItem>
                    <SelectItem value="1200-3000">R$1.200 a R$3.000</SelectItem>
                    <SelectItem value="3000-6000">R$3.000 a R$6.000</SelectItem>
                    <SelectItem value="6000+">Acima de R$6.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Qual é o faturamento mensal da sua pizzaria?</Label>
                <Select name="monthlyRevenue" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o faturamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-20k">Até R$20.000</SelectItem>
                    <SelectItem value="20k-60k">De R$20.000 a R$60.000</SelectItem>
                    <SelectItem value="60k-100k">De R$60.000 a R$100.000</SelectItem>
                    <SelectItem value="100k-500k">De R$100.000 a R$500.000</SelectItem>
                    <SelectItem value="500k+">Acima de R$500.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                QUERO MINHA ANÁLISE GRÁTIS
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
