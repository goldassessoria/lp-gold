
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  contact: z.string().min(10, {
    message: "Por favor, insira um contato válido.",
  }),
  pizzeriaName: z.string().min(2, {
    message: "O nome da pizzaria deve ter pelo menos 2 caracteres.",
  }),
  monthlyInvestment: z.string({
    required_error: "Por favor, selecione um valor de investimento.",
  }),
  monthlyRevenue: z.string({
    required_error: "Por favor, selecione um faturamento.",
  }),
});

export function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            contact: "",
            pizzeriaName: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        console.log("Dados do formulário:", values);
        
        // Simula um envio para o backend
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast({
            title: "Formulário enviado!",
            description: "Seus dados foram registrados (simulação).",
        });
        
        form.reset();
        setIsSubmitting(false);
    }

  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-card border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">Pronto para <span className="text-primary">aumentar as vendas</span>?</CardTitle>
            <CardDescription className="pt-2">Complete suas informações abaixo e um de nossos especialistas entrará em contato com você para uma análise gratuita da sua pizzaria e descobrir oportunidades reais de aumentar suas vendas. Seus dados estão 100% seguros e serão usados apenas para esse contato.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seu nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seu contato (WhatsApp)</FormLabel>
                      <FormControl>
                        <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pizzeriaName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da sua Pizzaria</FormLabel>
                      <FormControl>
                        <Input placeholder="Pizzaria do John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="monthlyInvestment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quanto sua pizzaria já investe em marketing por mês?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um valor" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0-500">R$0 a R$500</SelectItem>
                          <SelectItem value="500-1200">R$500 a R$1.200</SelectItem>
                          <SelectItem value="1200-3000">R$1.200 a R$3.000</SelectItem>
                          <SelectItem value="3000-6000">R$3.000 a R$6.000</SelectItem>
                          <SelectItem value="6000+">Acima de R$6.000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="monthlyRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual é o faturamento mensal da sua pizzaria?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o faturamento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0-20k">Até R$20.000</SelectItem>
                          <SelectItem value="20k-60k">De R$20.000 a R$60.000</SelectItem>
                          <SelectItem value="60k-100k">De R$60.000 a R$100.000</SelectItem>
                          <SelectItem value="100k-500k">De R$100.000 a R$500.000</SelectItem>
                          <SelectItem value="500k+">Acima de R$500.000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSubmitting ? 'ENVIANDO...' : 'QUERO MINHA ANÁLISE GRÁTIS'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
