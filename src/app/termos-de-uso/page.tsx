import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, MapPin, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Termos de Uso e Contratação | At Work SC",
  description:
    "Condições gerais de uso do site e dos serviços de Endereço Fiscal, Endereço Comercial, Coworking e Salas Privativas do At Work SC em Florianópolis.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/termos-de-uso`,
  },
};

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#6EC1E4]/30 selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black transition"
          >
            <ArrowLeft className="w-4 h-4 text-[#0284C7]" />
            <span>Voltar ao At Work SC</span>
          </Link>

          <img
            src="/images/original/logo-atwork.png"
            alt="At Work SC"
            className="h-10 w-auto object-contain"
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold mb-4">
            <FileText className="w-4 h-4 text-[#0284C7]" />
            <span>Termos e Condições Gerais</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Termos de Uso e Serviços
          </h1>

          <div className="flex items-center gap-2 text-xs text-neutral-500 mt-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Vigência: Outubro de 2026 · Versão 1.5</span>
          </div>

          <p className="text-neutral-600 text-base sm:text-lg mt-4 leading-relaxed">
            Estes termos regulam a utilização do website do <strong>{SITE_CONFIG.legalName}</strong>{" "}
            e estabelecem as premissas gerais para a contratação dos serviços de Endereço Fiscal,
            Endereço Comercial, Coworking e Salas Privativas localizados na Rodovia SC-401 em
            Florianópolis/SC.
          </p>
        </div>

        <div className="space-y-10 text-neutral-800 text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950">1. Objeto dos Serviços</h2>
            <p>
              O At Work SC disponibiliza infraestrutura física e serviços corporativos que incluem:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 text-sm">
              <li>
                <strong>Endereço Fiscal e Comercial:</strong> Cessão de endereço oficial para registro
                de CNPJ perante a Receita Federal, Junta Comercial de Santa Catarina (JUCESC) e
                Prefeitura Municipal de Florianópolis, com suporte a Inscrição Estadual (SEFAZ-SC) no
                plano aplicável.
              </li>
              <li>
                <strong>Gestão de Correspondências:</strong> Recebimento de notificações, cartas e
                encomendas com comunicação em tempo real via WhatsApp.
              </li>
              <li>
                <strong>Espaço Físico:</strong> Estações de trabalho compartilhadas, salas privativas
                mobiliadas (15m² a 70m²) e salas de reunião executivas climatizadas com TV 55&quot;.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950">2. Contratação e Ativação</h2>
            <p>
              A formalização dos serviços ocorre sem exigência de fiador ou cauções abusivas,
              mediante celebração de contrato de prestação de serviços e apresentação dos documentos
              constitutivos da empresa ou documentos pessoais do contratante.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950">3. Obrigações do Contratante</h2>
            <p>O contratante compromete-se a:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 text-sm">
              <li>
                Exercer apenas atividades lícitas e compatíveis com as normas municipais e estaduais
                de Florianópolis/SC;
              </li>
              <li>Manter seus dados cadastrais e número de WhatsApp atualizados para recebimento de avisos;</li>
              <li>
                Respeitar as normas de convivência, silêncio e segurança nas dependências físicas do
                At Work SC na SC-401;
              </li>
              <li>
                Em caso de rescisão, promover a alteração ou baixa do endereço fiscal junto aos órgãos
                públicos no prazo estipulado em contrato.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950">4. Cancelamento e Flexibilidade</h2>
            <p>
              Prezamos pela transparência e pela facilidade: não impomos multas ocultas. Os prazos de
              aviso prévio e vigência de planos obedecem às condições expressamente estipuladas no
              instrumento particular de cada plano contratado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-950">5. Foro e Legislação Aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil, elegendo-se o
              Foro da Comarca da Capital (Florianópolis/SC) para dirimir eventuais controvérsias.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#F8FAFC] border border-neutral-200 space-y-2">
            <h3 className="font-bold text-neutral-950 text-sm">Dúvidas Contratuais?</h3>
            <p className="text-xs text-neutral-600">
              Fale diretamente com nossa equipe pelo e-mail{" "}
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#0284C7] underline">
                {SITE_CONFIG.contact.email}
              </a>{" "}
              ou WhatsApp oficial {SITE_CONFIG.contact.whatsappDisplay}.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar ao Início</span>
          </Link>
          <Link
            href="/politica-de-privacidade"
            className="text-sm text-[#0284C7] underline hover:text-[#0369A1] font-medium"
          >
            Ver Política de Privacidade →
          </Link>
        </div>
      </main>
    </div>
  );
}
