
"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const TALLY_EMBED_URL = "https://tally.so/widgets/embed.js";

export function ContactForm() {
  useEffect(() => {
    // Procura por um script existente com a mesma URL para não duplicar
    if (document.querySelector(`script[src="${TALLY_EMBED_URL}"]`)) {
      // Se já existe, força o Tally a recarregar os formulários na página
      // @ts-ignore - Tally is loaded on the window object
      if (window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
      return;
    }

    // Se o script não existe, cria um novo
    const script = document.createElement("script");
    script.src = TALLY_EMBED_URL;
    script.async = true;
    script.onload = () => {
      // Quando o script carregar, inicializa os formulários
      // @ts-ignore
      if (window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
    };
    script.onerror = () => {
      console.error("Failed to load Tally embed script.");
    };

    // Adiciona o script ao corpo do documento
    document.body.appendChild(script);

    // Função de limpeza para remover o script quando o componente for desmontado
    return () => {
      const existingScript = document.querySelector(`script[src="${TALLY_EMBED_URL}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-card border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">Pronto para <span className="text-primary">aumentar as vendas</span>?</CardTitle>
            <CardDescription className="pt-2">Complete suas informações abaixo e um de nossos especialistas entrará em contato com você para uma análise gratuita da sua pizzaria e descobrir oportunidades reais de aumentar suas vendas.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* 
              PASSO FINAL:
              Substitua a URL abaixo pela URL do seu formulário Tally.
              Você a encontra na aba "Share" -> "Embed" no painel do Tally.
            */}
            <iframe
              data-tally-src="https://tally.so/embed/w4ZqMY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="634"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulário de Contato da Gold Assessoria"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
