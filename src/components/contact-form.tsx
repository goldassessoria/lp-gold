
"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// URL para o script de embed do Tally
const TALLY_EMBED_URL = "https://tally.so/widgets/embed.js";

export function ContactForm() {
  useEffect(() => {
    // Verifica se o script já não foi injetado na página para evitar duplicatas
    if (document.querySelector(`script[src="${TALLY_EMBED_URL}"]`)) {
      // Se já existe, apenas pede para o Tally recarregar os embeds.
      // A anotação @ts-ignore é usada porque 'Tally' é adicionado ao objeto 'window' pelo script.
      // @ts-ignore
      if (window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
      return;
    }

    // Se o script não existe, cria um novo elemento script
    const script = document.createElement("script");
    script.src = TALLY_EMBED_URL;
    script.async = true;
    script.onload = () => {
      // Callback para quando o script carregar com sucesso
      // @ts-ignore
      if (window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
    };
    script.onerror = () => {
      // Callback para caso o script falhe em carregar
      console.error("Failed to load Tally embed script.");
    };

    // Adiciona o script ao final do corpo do documento
    document.body.appendChild(script);

    // Função de limpeza: remove o script quando o componente for "desmontado" (ex: mudar de página)
    // Isso é uma boa prática para evitar vazamentos de memória em aplicações complexas.
    return () => {
      const existingScript = document.querySelector(`script[src="${TALLY_EMBED_URL}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []); // O array vazio [] significa que este efeito só roda uma vez, quando o componente é montado.

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
