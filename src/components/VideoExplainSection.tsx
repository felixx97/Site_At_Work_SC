"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  FileCheck2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function VideoExplainSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const fiscalSceneSteps = [
    {
      step: "01",
      duration: "Passo 01",
      badge: "Abertura ou Transferência Simples",
      title: "Escolha seu Plano Ideal na Rodovia SC-401",
      subtitle:
        "Plano 1 a R$ 54,90/mês (Endereço Fiscal p/ Serviços) ou Plano 2 a R$ 94,90/mês (Comércio & E-commerce com Inscrição Estadual).",
      highlight: "Sem fiador · Contrato simples · Economia de até 85% vs. aluguel tradicional",
    },
    {
      step: "02",
      duration: "Passo 02",
      badge: "Documentação Fiscal Ágil",
      title: "Liberação p/ Contabilidade, Prefeitura & SEFAZ-SC",
      subtitle:
        "Entregamos o contrato e documentação oficial do endereço na Rod. José Carlos Daux, 4190 (Bloco B - Saco Grande) pronta para seu contador.",
      highlight: "Aprovado na Junta Comercial (JUCESC), Receita Federal e Inscrição Estadual",
    },
    {
      step: "03",
      duration: "Passo 03",
      badge: "Gestão Inteligente de Correspondências",
      title: "Chegou Carta ou Encomenda? Aviso Imediato no WhatsApp!",
      subtitle:
        "Nossa recepção recebe suas correspondências fiscais, bancárias e pacotes e envia alerta em tempo real para o seu celular.",
      highlight: "Zero risco de perder notificações importantes do seu CNPJ",
    },
    {
      step: "04",
      duration: "Passo 04",
      badge: "Quando Precisar do Espaço Físico",
      title: "Salas de Reunião c/ TV 55 pol., Estacionamento e Coworking",
      subtitle:
        "Precisa receber um cliente importante em Florianópolis? Agende nossa Sala Executiva para 8 pessoas ou use o Coworking na SC-401.",
      highlight: "Ao lado do Passeio Primavera · Segurança e Estacionamento 24/7",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStep((s) => (s + 1) % fiscalSceneSteps.length);
          return 0;
        }
        return prev + 2;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying, fiscalSceneSteps.length]);

  return (
    <section id="videos" className="py-20 bg-[#F8FAFC] border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
              Explicação Rápida · Passo a Passo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
              Veja como funciona na prática
            </h2>
            <p className="text-neutral-600 mt-2 max-w-2xl text-base">
              Entenda em segundos o passo a passo para registrar seu Endereço Fiscal na SC-401 com total segurança e agilidade.
            </p>
          </div>

          {/* Single Clean Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs sm:text-sm font-medium shadow-xs self-start">
            <FileCheck2 className="w-4 h-4 text-[#6EC1E4]" />
            <span>Como Funciona o End. Fiscal</span>
          </div>
        </div>

        {/* Clean White Card Frame */}
        <div className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
          {/* Top Progress Bars */}
          <div className="grid grid-cols-4 gap-3 px-6 sm:px-10 pt-6">
            {fiscalSceneSteps.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentStep(idx);
                  setProgress(0);
                }}
                className="text-left group cursor-pointer"
              >
                <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0284C7] transition-all duration-150"
                    style={{
                      width:
                        idx < currentStep
                          ? "100%"
                          : idx === currentStep
                          ? `${progress}%`
                          : "0%",
                    }}
                  />
                </div>
                <span
                  className={`block text-xs mt-1.5 font-medium truncate ${
                    idx === currentStep
                      ? "text-neutral-950 font-semibold"
                      : "text-neutral-400 group-hover:text-neutral-600"
                  }`}
                >
                  {item.duration}
                </span>
              </button>
            ))}
          </div>

          {/* Content Grid with Locked Dimensions to Prevent Sizing Jumps */}
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Fixed Height Layout */}
            <div className="lg:col-span-6 flex flex-col justify-between min-h-[360px] sm:min-h-[380px] space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6EC1E4]/15 text-[#0369A1] text-xs font-semibold">
                  <span>Etapa {fiscalSceneSteps[currentStep].step}/04</span>
                  <span>•</span>
                  <span>{fiscalSceneSteps[currentStep].badge}</span>
                </div>

                <div className="min-h-[64px] sm:min-h-[72px] flex items-center mt-3">
                  <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-neutral-950">
                    {fiscalSceneSteps[currentStep].title}
                  </h3>
                </div>

                <div className="min-h-[64px] sm:min-h-[72px] mt-1">
                  <p className="text-neutral-600 text-base leading-relaxed">
                    {fiscalSceneSteps[currentStep].subtitle}
                  </p>
                </div>
              </div>

              {/* Highlight Banner */}
              <div className="min-h-[58px] flex items-center">
                <div className="w-full p-3.5 sm:p-4 rounded-2xl bg-[#61CE70]/10 border border-[#61CE70]/30 flex items-center gap-3 text-neutral-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#16A34A]" />
                  <span>{fiscalSceneSteps[currentStep].highlight}</span>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-medium text-xs sm:text-sm hover:bg-neutral-800 transition cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? "Pausar" : "Continuar"}</span>
                </button>

                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setProgress(0);
                    setIsPlaying(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs sm:text-sm transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reiniciar</span>
                </button>
              </div>
            </div>

            {/* Right Column - Locked Exact Height to Never Expand or Contract */}
            <div className="lg:col-span-6">
              <div className="h-[360px] sm:h-[380px] w-full rounded-2xl overflow-hidden border border-neutral-200 bg-[#F8FAFC] shadow-sm">
                <div className="h-full w-full flex flex-col justify-center">
                  {currentStep === 0 && (
                    <div className="h-full p-5 sm:p-6 flex flex-col justify-between">
                      <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                        Modalidades de Endereço Fiscal At Work SC
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Plano 1 · Endereço Fiscal", price: "R$ 54,90/mês", tag: "Serviços & CNPJ" },
                          { name: "Plano 2 · Fiscal + Inscrição Estadual", price: "R$ 94,90/mês", tag: "Comércio & E-commerce" },
                        ].map((p, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white border border-neutral-200/90 shadow-2xs"
                          >
                            <div>
                              <div className="font-semibold text-xs sm:text-sm text-neutral-900">{p.name}</div>
                              <span className="text-[11px] text-[#0284C7] font-medium">{p.tag}</span>
                            </div>
                            <div className="text-sm sm:text-base font-bold text-neutral-950">{p.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="h-full p-6 sm:p-8 flex flex-col justify-center space-y-4">
                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200 flex items-start gap-4 shadow-2xs">
                        <div className="w-11 h-11 rounded-xl bg-[#6EC1E4]/20 flex items-center justify-center text-[#0284C7] shrink-0">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs text-[#0284C7] font-semibold uppercase tracking-wider">
                            Endereço Oficial no Contrato Social
                          </div>
                          <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">
                            Rod. José Carlos Daux (SC-401), 4190 - Bloco B
                          </div>
                          <div className="text-xs text-neutral-500 mt-1">
                            Bairro Saco Grande · Florianópolis/SC · CEP 88032-005
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3.5 rounded-xl bg-white border border-neutral-200">
                          <div className="text-xs text-neutral-500">Junta Comercial</div>
                          <div className="text-xs sm:text-sm font-bold text-[#16A34A] mt-1">✓ JUCESC</div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-white border border-neutral-200">
                          <div className="text-xs text-neutral-500">Prefeitura</div>
                          <div className="text-xs sm:text-sm font-bold text-[#16A34A] mt-1">✓ PMF</div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-white border border-neutral-200">
                          <div className="text-xs text-neutral-500">Inscrição Estadual</div>
                          <div className="text-xs sm:text-sm font-bold text-[#16A34A] mt-1">✓ SEFAZ-SC</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="h-full p-6 sm:p-8 flex flex-col justify-center">
                      <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-4">
                        <div className="flex items-center gap-3 pb-3 border-b border-neutral-100">
                          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
                            AW
                          </div>
                          <div>
                            <div className="text-sm font-bold text-neutral-900">
                              Recepção At Work SC · Aviso no WhatsApp
                            </div>
                            <div className="text-xs text-[#16A34A] font-medium">Notificação em tempo real</div>
                          </div>
                        </div>
                        <div className="bg-[#DCF8C6] text-neutral-900 p-4 rounded-xl text-sm leading-relaxed border border-[#c1e7a4]">
                          Olá! 👋 Acabamos de receber uma correspondência oficial para a sua empresa aqui na
                          recepção da <strong>At Work SC (SC-401)</strong>. Já está guardada com total
                          segurança à sua disposição!
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="relative h-full w-full">
                      <img
                        src="/images/original/sala-reuniao.jpeg"
                        alt="Sala de Reunião At Work SC"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                        <span className="text-xs font-semibold text-[#6EC1E4] uppercase tracking-wider">
                          Estrutura Física Real
                        </span>
                        <span className="text-base sm:text-lg font-bold text-white mt-1">
                          Sala de Reunião c/ TV 55 pol. + Coworking 24/7 na SC-401
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
