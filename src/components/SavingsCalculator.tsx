"use client";

import React, { useState } from "react";
import { Calculator, TrendingDown, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function SavingsCalculator() {
  const [mode, setMode] = useState<"fiscal" | "office">("fiscal");
  const [teamSize, setTeamSize] = useState(4);

  const traditionalCosts =
    mode === "fiscal"
      ? {
          rent: 2200,
          condoAndIptu: 680,
          internetAndUtilities: 390,
          receptionistAndCleaning: 450,
          atWorkPrice: 54.9,
          atWorkLabel: "Plano Endereço Fiscal CNPJ (At Work SC)",
        }
      : {
          rent: 3200 + teamSize * 250,
          condoAndIptu: 950,
          internetAndUtilities: 620,
          receptionistAndCleaning: 850,
          atWorkPrice: teamSize === 1 ? 450 : 1450 + (teamSize - 2) * 280,
          atWorkLabel:
            teamSize === 1
              ? "Mensalista 24/7 Individual (At Work SC)"
              : `Sala Privativa Mobiliada p/ ${teamSize} pessoas (Estimativa)`,
        };

  const totalTraditionalMonth =
    traditionalCosts.rent +
    traditionalCosts.condoAndIptu +
    traditionalCosts.internetAndUtilities +
    traditionalCosts.receptionistAndCleaning;

  const monthlySavings = totalTraditionalMonth - traditionalCosts.atWorkPrice;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
              <Calculator className="w-3.5 h-3.5" />
              Comparativo de Custos em Florianópolis
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
              Quanto você economiza trocando o aluguel convencional pelo At Work SC?
            </h2>

            <p className="text-neutral-600 text-base leading-relaxed">
              Alugar uma sala comercial por conta própria exige fiador, condomínio, IPTU, instalação
              de internet e mobília. Compare os custos mensais:
            </p>

            {/* Mode Switch */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-full bg-neutral-100 border border-neutral-200">
              <button
                onClick={() => setMode("fiscal")}
                className={`py-2.5 px-4 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                  mode === "fiscal"
                    ? "bg-black text-white shadow-2xs"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Endereço Fiscal / CNPJ
              </button>
              <button
                onClick={() => setMode("office")}
                className={`py-2.5 px-4 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                  mode === "office"
                    ? "bg-black text-white shadow-2xs"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Espaço Físico / Sala
              </button>
            </div>

            {mode === "office" && (
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-neutral-200">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-neutral-600">Pessoas na equipe:</span>
                  <span className="font-bold text-neutral-950">
                    {teamSize} {teamSize === 1 ? "profissional" : "pessoas"}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Right Comparison Card */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-neutral-200 rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Traditional Office */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Aluguel Comercial Tradicional
                </div>
                <div className="text-2xl font-bold text-neutral-800">
                  R$ {totalTraditionalMonth.toLocaleString("pt-BR")}{" "}
                  <span className="text-xs font-normal text-neutral-500">/mês</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                  <li className="flex justify-between">
                    <span>Aluguel médio:</span>
                    <span className="text-neutral-800 font-medium">R$ {traditionalCosts.rent}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Condomínio + IPTU:</span>
                    <span className="text-neutral-800 font-medium">R$ {traditionalCosts.condoAndIptu}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Internet + Energia:</span>
                    <span className="text-neutral-800 font-medium">R$ {traditionalCosts.internetAndUtilities}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Limpeza, Copa & Segurança:</span>
                    <span className="text-neutral-800 font-medium">R$ {traditionalCosts.receptionistAndCleaning}</span>
                  </li>
                </ul>
              </div>

              {/* At Work SC */}
              <div className="p-5 rounded-2xl bg-white border-2 border-black space-y-3 shadow-sm">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#6EC1E4]/20 text-[#0369A1] font-semibold text-[11px]">
                  Na At Work SC
                </span>
                <div className="text-xs font-medium text-neutral-600">
                  {traditionalCosts.atWorkLabel}
                </div>
                <div className="text-3xl font-bold text-neutral-950">
                  R$ {traditionalCosts.atWorkPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}{" "}
                  <span className="text-xs font-normal text-neutral-500">/mês</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>Zero IPTU, Condomínio ou Energia</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>Contrato simples sem fiador</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>Aviso de correspondência via WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>Cozinha completa e segurança 24h</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Yearly Savings */}
            <div className="mt-5 p-5 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#16A34A] font-semibold flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4" />
                  Economia anual estimada para sua empresa:
                </div>
                <div className="text-2xl font-bold text-neutral-950 mt-0.5">
                  R$ {yearlySavings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} / ano
                </div>
              </div>

              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                  `Olá! Fiz a simulação no site da At Work SC e quero saber mais sobre ${traditionalCosts.atWorkLabel}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm transition shrink-0"
              >
                Falar com Consultor
                <ArrowRight className="w-4 h-4 text-[#6EC1E4]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
