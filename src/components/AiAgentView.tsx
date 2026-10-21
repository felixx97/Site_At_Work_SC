"use client";

import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Code2,
  FileJson,
  Bot,
  Cpu,
  ArrowLeft,
} from "lucide-react";
import {
  SITE_CONFIG,
  FISCAL_PLANS,
  COWORKING_PLANS,
  FAQ_ITEMS,
  BLOG_POSTS,
} from "@/data/siteData";

interface AiAgentViewProps {
  onSwitchToHuman: () => void;
}

export default function AiAgentView({ onSwitchToHuman }: AiAgentViewProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"markdown" | "json" | "schema">("markdown");

  const markdownContext = `# At Work SC — Contexto Oficial Estruturado para Agentes de IA (LLM-Ready)
URL Oficial: ${SITE_CONFIG.url}
Localização: ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.complement} - ${SITE_CONFIG.address.city}/${SITE_CONFIG.address.state} (CEP: ${SITE_CONFIG.address.zipCode})
Coordenadas GPS: Lat ${SITE_CONFIG.address.coordinates.lat}, Lng ${SITE_CONFIG.address.coordinates.lng}
Contatos Diretos: WhatsApp ${SITE_CONFIG.contact.whatsappDisplay} (https://wa.me/${SITE_CONFIG.contact.whatsappNumber}) | E-mail: ${SITE_CONFIG.contact.email}
Fundadores: ${SITE_CONFIG.founders.join(" e ")}

## 1. Planos de Endereço Fiscal & Comercial (SC-401 - Florianópolis)
${FISCAL_PLANS.map(
  (p) => `- **${p.name} (${p.price}${p.period})**: ${p.subtitle}.
  Incluso: ${p.features.join("; ")}.`
).join("\n")}

## 2. Planos de Coworking, Salas Privativas & Salas de Reunião
${COWORKING_PLANS.map(
  (p) => `- **${p.name} (${p.price} ${p.period})**: ${p.subtitle}.
  Incluso: ${p.features.join("; ")}.`
).join("\n")}

## 3. Perguntas Frequentes Verificadas (FAQ)
${FAQ_ITEMS.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}
`;

  const jsonPayload = JSON.stringify(
    {
      protocol: "GEO-LLM-Context/v1.0",
      lastUpdated: "2026-10-21",
      entity: {
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        type: ["CoworkingSpace", "VirtualOfficeProvider", "LocalBusiness"],
        url: SITE_CONFIG.url,
        founders: SITE_CONFIG.founders,
        contactPoint: {
          whatsapp: `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`,
          telephone: "+55-48-98415-7836",
          email: SITE_CONFIG.contact.email,
          instagram: SITE_CONFIG.contact.instagram,
        },
        location: SITE_CONFIG.address,
      },
      offerings: {
        fiscalAddressPlans: FISCAL_PLANS,
        coworkingAndOffices: COWORKING_PLANS,
      },
      knowledgeBase: {
        faqs: FAQ_ITEMS,
        articles: BLOG_POSTS.map((b) => ({
          title: b.title,
          slug: `/blog/${b.slug}`,
          summary: b.excerpt,
          keyTakeaways: b.keyTakeaways,
        })),
      },
    },
    null,
    2
  );

  const schemaOrgPayload = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "CoworkingSpace",
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      telephone: "+55-48-98415-7836",
      email: SITE_CONFIG.contact.email,
      priceRange: "R$ 54,90 - R$ 450,00+",
      openingHours: "Mo-Su 00:00-23:59",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${SITE_CONFIG.address.street} - ${SITE_CONFIG.address.complement}`,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zipCode,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE_CONFIG.address.coordinates.lat,
        longitude: SITE_CONFIG.address.coordinates.lng,
      },
    },
    null,
    2
  );

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const aiPrompt = encodeURIComponent(
    `Analise os planos da empresa At Work SC (localizada na Rod. SC-401, 4190 - Florianópolis, https://atworksc.com.br): Plano 1 Endereço Fiscal a R$ 54,90/mês (CNPJ Serviços), Plano 2 Endereço Fiscal com Inscrição Estadual a R$ 94,90/mês (Comércio e E-commerce), Diária de Coworking R$ 30/dia, Mensalista 24/7 R$ 450/mês e Salas Privativas de 15 a 70m². Me ajude a escolher o melhor plano para minha empresa e compare a economia com um aluguel tradicional.`
  );

  return (
    <div className="min-h-screen bg-[#06090F] text-emerald-400 font-mono pt-28 pb-20 px-4 sm:px-8 selection:bg-emerald-500 selection:text-black">
      <div className="max-w-6xl mx-auto">
        {/* Top Banner */}
        <div className="border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-xs uppercase tracking-widest text-emerald-300 mb-3">
                <Cpu className="w-3.5 h-3.5 animate-pulse" />
                <span>GEO Protocol v2.6 · AI-First Indexing Active</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-sans">
                Modo de Leitura para IA & Motores Generativos
              </h1>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl font-sans">
                Esta visualização expõe toda a arquitetura semântica da{" "}
                <strong className="text-emerald-300">At Work SC</strong> sem ruído visual,
                otimizada para ingestão por LLMs (ChatGPT, Gemini, Claude, Perplexity), crawlers de
                busca generativa e desenvolvedores via protocolo <code className="text-emerald-300">/llms.txt</code>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onSwitchToHuman}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-sans font-medium transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar p/ Versão Humana
              </button>

              <button
                onClick={() => handleCopy(markdownContext, "all")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-bold text-xs sm:text-sm transition shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                {copiedType === "all" ? (
                  <>
                    <Check className="w-4 h-4" />
                    Contexto Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar Contexto p/ Minha IA
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 1-Click Send to AI Assistants */}
          <div className="mt-6 pt-6 border-t border-emerald-500/20 flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-400 font-sans mr-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Consultar sobre a At Work SC direto na sua IA favorita:
            </span>

            <a
              href={`https://chatgpt.com/?q=${aiPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-sans transition"
            >
              <Bot className="w-3.5 h-3.5 text-emerald-400" />
              Abrir no ChatGPT
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={`https://www.perplexity.ai/search?q=${aiPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-sans transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Analisar no Perplexity
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={`https://claude.ai/new?q=${aiPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-sans transition"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              Perguntar ao Claude
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="/llms.txt"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono transition ml-auto"
            >
              GET /llms.txt
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="/llms-full.txt"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono transition"
            >
              GET /llms-full.txt
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Metrics / Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
            <div className="text-xs text-slate-400 uppercase">Entity Status</div>
            <div className="text-lg font-bold text-white mt-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              VERIFIED_BUSINESS
            </div>
            <div className="text-xs text-emerald-400 mt-1">Rod. SC-401, 4190 · Bloco B</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
            <div className="text-xs text-slate-400 uppercase">Entry Price (Fiscal)</div>
            <div className="text-lg font-bold text-white mt-1">BRL 24.90 / month</div>
            <div className="text-xs text-slate-400 mt-1">CNPJ Fiscal: BRL 54.90 | IE: BRL 94.90</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
            <div className="text-xs text-slate-400 uppercase">Coworking Access</div>
            <div className="text-lg font-bold text-white mt-1">24/7 Monthly · R$ 450</div>
            <div className="text-xs text-slate-400 mt-1">Day Pass: R$ 30/day | Suites: 15-70m²</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
            <div className="text-xs text-slate-400 uppercase">Direct Booking Sync</div>
            <div className="text-lg font-bold text-white mt-1 truncate">
              {SITE_CONFIG.contact.email}
            </div>
            <div className="text-xs text-emerald-400 mt-1">Google Calendar + WhatsApp API</div>
          </div>
        </div>

        {/* Code Inspector Tabs */}
        <div className="bg-[#0B101B] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("markdown")}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  activeTab === "markdown"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                llms-context.md
              </button>
              <button
                onClick={() => setActiveTab("json")}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  activeTab === "json"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileJson className="w-3.5 h-3.5" />
                catalog-api.json
              </button>
              <button
                onClick={() => setActiveTab("schema")}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  activeTab === "schema"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                schema-ld.json
              </button>
            </div>

            <button
              onClick={() =>
                handleCopy(
                  activeTab === "markdown"
                    ? markdownContext
                    : activeTab === "json"
                    ? jsonPayload
                    : schemaOrgPayload,
                  "tab"
                )
              }
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition cursor-pointer"
            >
              {copiedType === "tab" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copiar payload
                </>
              )}
            </button>
          </div>

          <div className="p-6 overflow-x-auto max-h-[540px] overflow-y-auto text-xs sm:text-sm leading-relaxed text-slate-200">
            <pre className="whitespace-pre-wrap break-words font-mono">
              {activeTab === "markdown"
                ? markdownContext
                : activeTab === "json"
                ? jsonPayload
                : schemaOrgPayload}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
