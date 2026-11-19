"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  ChevronDown,
  MessageSquare,
  Bot,
  User,
  Check,
  FileCheck,
} from "lucide-react";
import {
  SITE_CONFIG,
  FISCAL_PLANS,
  COWORKING_PLANS,
  SPACE_GALLERY,
  BENEFITS,
  FAQ_ITEMS,
  BLOG_POSTS,
  BlogPost,
} from "@/data/siteData";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AiAgentView from "@/components/AiAgentView";
import VideoExplainSection from "@/components/VideoExplainSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import BookingModal from "@/components/BookingModal";

export default function HomePage() {
  const [viewMode, setViewMode] = useState<"human" | "ai">("human");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState("Visita ao Espaço At Work SC");
  const [galleryFilter, setGalleryFilter] = useState<"all" | "real" | "concept">("real");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    description?: string;
  } | null>(null);

  const handleOpenBooking = (service?: string) => {
    if (service) setBookingService(service);
    setBookingOpen(true);
  };

  const filteredGallery = SPACE_GALLERY.filter((item) => {
    if (galleryFilter === "real") return item.isReal;
    if (galleryFilter === "concept") return !item.isReal;
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#6EC1E4]/30 selection:text-black">
      {/* Clean Header with Original Large Logo */}
      <Navbar
        onResetToHuman={() => setViewMode("human")}
        onOpenBooking={handleOpenBooking}
      />

      {/* CONDITIONAL VIEW: AI / MACHINE MODE vs HUMAN MODE */}
      {viewMode === "ai" ? (
        <AiAgentView onSwitchToHuman={() => setViewMode("human")} />
      ) : (
        <main>
          {/* ================= CLEAN HERO CAROUSEL (ENDEREÇO FISCAL & COWORKING) ================= */}
          <HeroCarousel onOpenBooking={handleOpenBooking} />

          {/* ================= FLORIANÓPOLIS / SOBRE NÓS EDITORIAL SECTION ================= */}
          <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                    Ilha da Magia · Centro Tecnológico SC-401
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
                    O espaço ideal para o seu negócio próximo ao Passeio Primavera.
                  </h2>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    No <strong>At Work SC</strong>, você conta com um ambiente de trabalho
                    inspirador na Rodovia José Carlos Daux (SC-401), equipado com as melhores
                    comodidades para aumentar a sua produtividade e fortalecer a presença da sua
                    empresa em Florianópolis.
                  </p>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    Oferecemos <strong>endereço fiscal, endereço fiscal com inscrição
                    estadual</strong> e gestão de correspondências com aviso no WhatsApp, além de{" "}
                    <strong>salas privativas mobiliadas (15 a 70m²)</strong> perfeitas para times de
                    todos os portes, com possibilidade de revezamento entre os membros da equipe.
                  </p>

                  <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-neutral-100">
                    <div>
                      <div className="text-2xl font-bold text-neutral-950">24/7</div>
                      <div className="text-xs text-neutral-500">Acesso p/ Mensalistas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-950">15 a 70m²</div>
                      <div className="text-xs text-neutral-500">Salas Privativas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-950">Sem Fiador</div>
                      <div className="text-xs text-neutral-500">Contrato Desburocratizado</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: "/images/original/espaco-03.jpg",
                          title: "Ambiente At Work SC · Florianópolis",
                          description: "Estações de trabalho e infraestrutura moderna na SC-401.",
                        })
                      }
                      className="block w-full overflow-hidden rounded-2xl border border-neutral-200 group cursor-zoom-in"
                    >
                      <img
                        src="/images/original/espaco-03.jpg"
                        alt="Ambiente At Work SC Florianópolis"
                        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: "/images/original/cozinha-01.jpg",
                          title: "Copa & Cozinha Completa",
                          description: "Equipada com geladeira, dois micro-ondas, cafeteira e louças.",
                        })
                      }
                      className="block w-full overflow-hidden rounded-2xl border border-neutral-200 group cursor-zoom-in"
                    >
                      <img
                        src="/images/original/cozinha-01.jpg"
                        alt="Cozinha Completa At Work SC"
                        className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                      />
                    </button>
                  </div>
                  <div className="space-y-4 pt-6">
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: "/images/original/sala-reuniao.jpeg",
                          title: "Sala de Reunião Climatizada (TV 55\")",
                          description: "Capacidade para até 8 pessoas com monitor 4K de 55 polegadas.",
                        })
                      }
                      className="block w-full overflow-hidden rounded-2xl border border-neutral-200 group cursor-zoom-in"
                    >
                      <img
                        src="/images/original/sala-reuniao.jpeg"
                        alt="Sala de Reunião At Work SC"
                        className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: "/images/original/espaco-01.jpg",
                          title: "Estações de Trabalho & Escritórios",
                          description: "Mobiliário moderno, iluminação planejada e cadeiras ergonômicas na SC-401.",
                        })
                      }
                      className="block w-full overflow-hidden rounded-2xl border border-neutral-200 group cursor-zoom-in"
                    >
                      <img
                        src="/images/original/espaco-01.jpg"
                        alt="Coworking SC-401"
                        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= PLANS SECTION 1: ENDEREÇO FISCAL ================= */}
          <section id="planos-fiscais" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-t border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                  Contrate seu endereço rapidamente
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mt-2">
                  Endereço Fiscal, planos a partir de R$ 54,90 por mês!
                </h2>
                <p className="text-neutral-600 mt-3 text-base">
                  Endereço Fiscal: Fortaleça sua presença empresarial com nossos Planos de Endereço Fiscal.
                  Localização estratégica em Florianópolis para suas necessidades de registro e tributação.
                </p>
              </div>

              {/* 2 Focused Plans Matching Client Reality */}
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {FISCAL_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ease-out group relative overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl bg-white ${
                      plan.highlight
                        ? "border-2 border-black shadow-xl ring-2 ring-black/5"
                        : "border border-neutral-200/90 hover:border-[#6EC1E4] hover:ring-2 hover:ring-[#6EC1E4]/30 shadow-2xs"
                    }`}
                  >
                    {/* Top Ambient Glow on Hover */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#6EC1E4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold transition ${
                            plan.highlight
                              ? "bg-black text-white"
                              : "bg-neutral-100 text-neutral-700 group-hover:bg-[#6EC1E4]/20 group-hover:text-[#0369A1]"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-neutral-950 group-hover:text-black transition">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-neutral-500 mt-1 min-h-[40px]">{plan.subtitle}</p>

                      <div className="my-6 pb-6 border-b border-neutral-100">
                        <span className="text-4xl sm:text-5xl font-bold text-neutral-950">{plan.price}</span>
                        <span className="text-base text-neutral-500 font-normal">{plan.period}</span>
                      </div>

                      <ul className="space-y-3.5 text-sm sm:text-base text-neutral-700 mb-8">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#61CE70]/20 text-[#15803D] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                        plan.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 px-6 rounded-full font-semibold text-base text-center flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-md cursor-pointer ${
                        plan.highlight
                          ? "bg-black hover:bg-neutral-800 text-white"
                          : "bg-neutral-100 hover:bg-black hover:text-white text-neutral-900 group-hover:bg-black group-hover:text-white"
                      }`}
                    >
                      <span>Contratar</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Informative Educational Section: O que é Endereço Fiscal & Inscrição Estadual */}
              <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#0284C7] mb-2">
                  <FileCheck className="w-4 h-4" />
                  <span>Guia Informativo Prático</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3">
                  Entenda como funciona o Endereço Fiscal e a Inscrição Estadual
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-8 leading-relaxed">
                  Trabalhamos com total clareza e sem burocracia para que sua empresa esteja 100% legalizada em Florianópolis:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Endereço Fiscal */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-neutral-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-neutral-950 font-bold text-base">
                      <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                      <h4 className="font-semibold">O que é Endereço Fiscal?</h4>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      É o endereço oficial utilizado para o registro legal da empresa no CNPJ, Junta Comercial (JUCESC) e Prefeitura de Florianópolis.
                    </p>
                    <ul className="text-xs text-neutral-500 space-y-1.5 pt-1 border-t border-neutral-200/60">
                      <li>• <strong>Para quem:</strong> Prestadores de serviços, consultorias, desenvolvedores, profissionais liberais e holdings.</li>
                      <li>• <strong>Vantagem:</strong> Protege o endereço da sua casa e evita o custo de alugar uma sala física só para ter CNPJ.</li>
                    </ul>
                  </div>

                  {/* Card 2: Inscrição Estadual */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-neutral-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-neutral-950 font-bold text-base">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <h4 className="font-semibold">O que é Inscrição Estadual (IE)?</h4>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      É o registro tributário perante a Secretaria da Fazenda de SC (SEF-SC), necessário para recolhimento de ICMS.
                    </p>
                    <ul className="text-xs text-neutral-500 space-y-1.5 pt-1 border-t border-neutral-200/60">
                      <li>• <strong>Para quem:</strong> Empresas de comércio físico ou e-commerce que vendem produtos e emitem nota fiscal mercantil.</li>
                      <li>• <strong>No At Work SC:</strong> Nosso <strong>Plano 2</strong> é homologado e atende a todas as exigências estaduais para liberação da sua IE.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= PLANS SECTION 2: COWORKING & SALAS PRIVATIVAS ================= */}
          <section id="planos-coworking" className="py-12 sm:py-16 lg:py-20 bg-white border-t border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                    Ótimo ambiente de trabalho
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mt-2">
                    Coworking, Salas Privativas & Reuniões
                  </h2>
                  <p className="text-neutral-600 mt-2 max-w-2xl text-base">
                    Descubra nossos planos de coworking com os melhores preços da ilha. Salas de 15
                    a 70m², posição individual diária ou mensal 24h e sala de reunião equipada.
                  </p>
                </div>

                <button
                  onClick={() => handleOpenBooking("Visita Guiada · Salas Privativas (15 a 70m²)")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-medium transition self-start cursor-pointer hover:shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#0284C7]" />
                  <span>Agendar Visita Presencial</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {COWORKING_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ease-out group relative overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl ${
                      plan.highlight
                        ? "bg-[#F8FAFC] border-2 border-black shadow-xl ring-2 ring-black/5"
                        : "bg-white border border-neutral-200/90 hover:border-[#6EC1E4] hover:ring-2 hover:ring-[#6EC1E4]/30 shadow-2xs"
                    }`}
                  >
                    {/* Top Ambient Glow on Hover */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#6EC1E4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      {plan.badge && (
                        <div className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#6EC1E4]/20 text-[#0369A1] mb-4 group-hover:bg-[#6EC1E4]/30 transition">
                          {plan.badge}
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-neutral-950 group-hover:text-black transition">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1.5 min-h-[34px]">{plan.subtitle}</p>

                      <div className="my-6 pb-6 border-b border-neutral-200/80">
                        <span className="text-3xl font-bold text-neutral-950">{plan.price}</span>
                        <span className="block text-xs text-neutral-500 mt-1">{plan.period}</span>
                      </div>

                      <ul className="space-y-3 text-sm text-neutral-700 mb-8">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-[#6EC1E4]/25 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <a
                        href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                          plan.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-sm text-center flex items-center justify-center gap-2 transition group-hover:shadow-md"
                      >
                        <span>Contratar</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button
                        onClick={() => handleOpenBooking(plan.name)}
                        className="w-full py-1.5 text-xs text-neutral-500 hover:text-black transition cursor-pointer"
                      >
                        Agendar visita pelo Google Agenda →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Exemplos Reais de Salas Privativas (IMG_4037 & IMG_4039) */}
              <div className="mt-12 rounded-3xl bg-[#F8FAFC] border border-neutral-200/90 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                      Espaço Privativo · 15m² a 70m²
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1">
                      Exemplos de Salas Privativas Mobiliadas
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
                      Conheça exemplos reais de configurações de salas privativas prontas para uso, climatizadas e com mobiliário completo para equipes de diferentes portes.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                      "Olá! Vi os exemplos de Salas Privativas no site da At Work SC e gostaria de consultar tamanhos e valores disponíveis."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium transition self-start"
                  >
                    <span>Consultar Salas Disponíveis</span>
                    <ArrowRight className="w-4 h-4 text-[#6EC1E4]" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/original/IMG_4037.jpg",
                        title: "Configuração para Equipes & Operação Híbrida",
                        description:
                          "Estações de trabalho individuais, climatização exclusiva, tomadas integradas nas mesas e acesso 24/7.",
                      })
                    }
                    className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-2xs hover:shadow-md transition flex flex-col cursor-zoom-in"
                  >
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <img
                        src="/images/original/IMG_4037.jpg"
                        alt="Exemplo de Sala Privativa para Equipes na At Work SC"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-xs">
                        Exemplo de Sala Privativa · Múltiplas Posições
                      </span>
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition">
                        Clique para ampliar
                      </span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="font-bold text-neutral-950 text-sm sm:text-base">
                        Configuração para Equipes & Operação Híbrida
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                        Estações de trabalho individuais, climatização exclusiva, tomadas integradas nas mesas e acesso 24/7.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/images/original/IMG_4039.jpg",
                        title: "Escritório Privativo com Iluminação Natural",
                        description:
                          "Ambiente reservado, mobiliado com cadeiras ergonômicas, armário de apoio, ar-condicionado e internet dedicada.",
                      })
                    }
                    className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-2xs hover:shadow-md transition flex flex-col cursor-zoom-in"
                  >
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <img
                        src="/images/original/IMG_4039.jpg"
                        alt="Exemplo de Escritório Privativo Climatizado na At Work SC"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-xs">
                        Exemplo de Sala Privativa · Mesa Compartilhada
                      </span>
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition">
                        Clique para ampliar
                      </span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="font-bold text-neutral-950 text-sm sm:text-base">
                        Escritório Privativo com Iluminação Natural
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                        Ambiente reservado, mobiliado com cadeiras ergonômicas, armário de apoio, ar-condicionado e internet dedicada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= STRATEGIC TECH PARTNERSHIP SECTION: FÉLIXTEC ================= */}
          <section
            id="parceiro-tecnologico"
            aria-labelledby="felixtec-partner-heading"
            className="py-12 sm:py-16 lg:py-20 bg-white border-t border-neutral-200/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-[#F8FAFC] border border-neutral-200/90 p-6 sm:p-10 lg:p-12 shadow-2xs relative overflow-hidden">
                {/* Subtle Top Accent Line Matching At Work & FélixTec Identity */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0071e3] via-[#00d2ff] to-[#16A34A]" />

                {/* Header Content with Official Dev Félix Mascot */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#0071e3]">
                        PARCEIRO OFICIAL DE TECNOLOGIA
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-[11px] font-semibold shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                        Parceiro Tecnológico Oficial · Benefício Exclusivo Clientes At Work SC
                      </span>
                    </div>

                    <h2
                      id="felixtec-partner-heading"
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 leading-tight"
                    >
                      Abriu seu CNPJ ou fechou seu plano na At Work SC? Coloque sua empresa no ar com condições exclusivas.
                    </h2>

                    <p className="text-neutral-700 mt-3 text-sm sm:text-base leading-relaxed">
                      Clientes e membros da At Work SC têm desconto especial com a{" "}
                      <a
                        href="https://felixtec.com.br/?utm_source=atworksc&utm_medium=banner_parceiro&utm_campaign=beneficio_cliente"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-extrabold bg-[linear-gradient(135deg,#0071e3,#00d2ff)] bg-clip-text text-transparent hover:opacity-85 transition"
                      >
                        FélixTec
                      </a>{" "}
                      para estruturar sua presença digital e automatizar seu atendimento em tempo recorde.
                    </p>
                  </div>

                  {/* Official Dev Félix Mascot Badge in Partner Banner */}
                  <a
                    href="https://felixtec.com.br/?utm_source=atworksc&utm_medium=banner_parceiro&utm_campaign=beneficio_cliente"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/mascot inline-flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-white border border-neutral-200/90 hover:border-[#00d2ff] shadow-2xs transition self-start lg:self-center shrink-0"
                    title="Conheça a FélixTec — Parceiro Oficial de Tecnologia"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-950 flex items-center justify-center shrink-0 border border-[#00d2ff]/40">
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        aria-hidden="true"
                        className="transition-transform duration-300 ease-out group-hover/mascot:-translate-y-0.5"
                      >
                        <defs>
                          <linearGradient id="ft-banner-skin" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ffe5c4" />
                            <stop offset="100%" stopColor="#fca88f" />
                          </linearGradient>
                          <linearGradient id="ft-banner-hoodie" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#2d2d3a" />
                            <stop offset="100%" stopColor="#14141a" />
                          </linearGradient>
                        </defs>
                        <g>
                          <path d="M23 42 A 28 28 0 0 1 77 42" fill="none" stroke="#15151c" strokeWidth="2.5" />
                          <path d="M23 42 A 28 28 0 0 1 77 42" fill="none" stroke="#00d2ff" strokeWidth="0.9" />
                          <rect x="15" y="38" width="8" height="15" rx="4" fill="#15151c" stroke="#00d2ff" strokeWidth="1.1" />
                          <rect x="77" y="38" width="8" height="15" rx="4" fill="#15151c" stroke="#00d2ff" strokeWidth="1.1" />
                          <path d="M22 42 C22 60, 78 60, 78 42 Z" fill="url(#ft-banner-skin)" stroke="#fca88f" strokeWidth="0.5" />
                          <path d="M23 40 Q50 25 77 40 Q64 35 50 38 Q36 35 23 40 Z" fill="#15151c" />
                          <circle cx="37" cy="46" r="9.5" fill="rgba(0, 210, 255, 0.08)" stroke="#00d2ff" strokeWidth="1.3" />
                          <circle cx="63" cy="46" r="9.5" fill="rgba(0, 210, 255, 0.08)" stroke="#00d2ff" strokeWidth="1.3" />
                          <line x1="46.5" y1="46" x2="53.5" y2="46" stroke="#00d2ff" strokeWidth="1.3" />
                          <circle cx="37" cy="46" r="3.2" fill="#15151c" />
                          <circle cx="63" cy="46" r="3.2" fill="#15151c" />
                          <circle cx="38.5" cy="44.5" r="1" fill="#ffffff" />
                          <circle cx="64.5" cy="44.5" r="1" fill="#ffffff" />
                          <circle cx="25" cy="51" r="2.5" fill="#ff3366" fillOpacity="0.4" />
                          <circle cx="75" cy="51" r="2.5" fill="#ff3366" fillOpacity="0.4" />
                          <path d="M21 54 C21 54, 50 64, 79 54 L75 62 L25 62 Z" fill="#15151c" />
                          <path d="M23 60 C23 60, 50 56, 77 60 L80 92 L20 92 Z" fill="url(#ft-banner-hoodie)" stroke="#2d2d3a" strokeWidth="1.2" />
                          <line x1="43" y1="62" x2="43" y2="73" stroke="#00d2ff" strokeWidth="1.2" strokeLinecap="round" />
                          <line x1="57" y1="62" x2="57" y2="73" stroke="#00d2ff" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M44.8 69.5 V63.5 H48.5 V64.7 H45.8 V66.1 H48 V67.2 H45.8 V69.5 Z" fill="#00d2ff" />
                          <path d="M50 63.5 H55.2 V64.7 H53.5 V69.5 H51.9 V64.7 H50 Z" fill="#00d2ff" />
                          <path d="M23 66 Q13 70 12 76" stroke="#2d2d3a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                          <circle cx="12" cy="76" r="4.5" fill="url(#ft-banner-skin)" />
                          <path d="M77 66 Q87 70 88 76" stroke="#2d2d3a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                          <circle cx="88" cy="76" r="4.5" fill="url(#ft-banner-skin)" />
                          <rect x="32" y="91" width="13" height="4" rx="2" fill="#15151c" stroke="#00d2ff" strokeWidth="0.9" />
                          <rect x="55" y="91" width="13" height="4" rx="2" fill="#15151c" stroke="#00d2ff" strokeWidth="0.9" />
                        </g>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                        Dev Félix · Agência Parceira
                      </div>
                      <div className="text-sm font-extrabold bg-[linear-gradient(135deg,#0071e3,#00d2ff)] bg-clip-text text-transparent">
                        FélixTec Soluções Digitais
                      </div>
                    </div>
                  </a>
                </div>

                {/* 3-Column Responsive Grid (1 col mobile, 3 cols desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 sm:mt-10">
                  {/* Card 1 — Combo CNPJ no Ar */}
                  <div className="rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#6EC1E4] group">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#6EC1E4]/20 text-[#0369A1] text-xs font-semibold">
                          Presença Digital Completa
                        </span>
                        <span className="text-xs font-semibold text-[#15803D] bg-[#61CE70]/15 px-2.5 py-1 rounded-full">
                          Até 4 dias úteis
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-950">
                        Combo CNPJ no Ar
                      </h3>

                      <p className="text-sm text-neutral-700 mt-2.5 leading-relaxed">
                        Site institucional / Landing Page de alta conversão + configuração de e-mail profissional (@suaempresa.com.br). Entrega em até 4 dias úteis.
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-neutral-100">
                      <div className="mb-5">
                        <div className="text-xs font-medium text-neutral-600">
                          De <span className="line-through font-semibold text-neutral-600">R$ 950</span> por
                        </div>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-3xl font-extrabold text-neutral-950">R$ 597</span>
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-neutral-900 text-white text-[11px] font-semibold">
                            Exclusivo At Work
                          </span>
                        </div>
                      </div>

                      <a
                        href="https://wa.me/5547989224775?text=Ol%C3%A1%20F%C3%A9lix!%20Vim%20pelo%20site%20da%20At%20Work%20SC%20e%20quero%20o%20desconto%20exclusivo%20no%20Combo%20CNPJ%20no%20Ar."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-sm text-center flex items-center justify-center gap-2 transition shadow-2xs"
                      >
                        <span>Resgatar Desconto</span>
                        <ArrowRight className="w-4 h-4 text-[#6EC1E4] group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Card 2 — Vitrine Google & WhatsApp */}
                  <div className="rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#6EC1E4] group">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#6EC1E4]/20 text-[#0369A1] text-xs font-semibold">
                          Buscas Locais & Conversão
                        </span>
                        <span className="text-xs font-semibold text-[#15803D] bg-[#61CE70]/15 px-2.5 py-1 rounded-full">
                          Entrega em 48h
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-950">
                        Vitrine Google & WhatsApp
                      </h3>

                      <p className="text-sm text-neutral-700 mt-2.5 leading-relaxed">
                        Configuração e otimização completa do Perfil da Empresa no Google para buscas locais + integração de atendimento rápido no WhatsApp. Entrega em 48h.
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-neutral-100">
                      <div className="mb-5">
                        <div className="text-xs font-medium text-neutral-600">
                          De <span className="line-through font-semibold text-neutral-600">R$ 450</span> por
                        </div>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-3xl font-extrabold text-neutral-950">R$ 297</span>
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-neutral-900 text-white text-[11px] font-semibold">
                            Exclusivo At Work
                          </span>
                        </div>
                      </div>

                      <a
                        href="https://wa.me/5547989224775?text=Ol%C3%A1%20F%C3%A9lix!%20Vim%20pelo%20site%20da%20At%20Work%20SC%20e%20quero%20o%20desconto%20exclusivo%20no%20Pack%20Google%20%26%20WhatsApp."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-sm text-center flex items-center justify-center gap-2 transition shadow-2xs"
                      >
                        <span>Resgatar Desconto</span>
                        <ArrowRight className="w-4 h-4 text-[#6EC1E4] group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Card 3 — Automação de Atendimento */}
                  <div className="rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#6EC1E4] group">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#6EC1E4]/20 text-[#0369A1] text-xs font-semibold">
                          Atendimento Inteligente
                        </span>
                        <span className="text-xs font-semibold text-[#15803D] bg-[#61CE70]/15 px-2.5 py-1 rounded-full">
                          3 dias úteis
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-950">
                        Automação de Atendimento
                      </h3>

                      <p className="text-sm text-neutral-700 mt-2.5 leading-relaxed">
                        Fluxo automático de triagem inicial no WhatsApp e organização automática de leads em planilha/CRM para você não perder nenhuma venda. Entrega em 3 dias úteis.
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-neutral-100">
                      <div className="mb-5">
                        <div className="text-xs font-medium text-neutral-600">
                          De <span className="line-through font-semibold text-neutral-600">R$ 600</span> por
                        </div>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-3xl font-extrabold text-neutral-950">R$ 397</span>
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-neutral-900 text-white text-[11px] font-semibold">
                            Exclusivo At Work
                          </span>
                        </div>
                      </div>

                      <a
                        href="https://wa.me/5547989224775?text=Ol%C3%A1%20F%C3%A9lix!%20Vim%20pelo%20site%20da%20At%20Work%20SC%20e%20quero%20o%20desconto%20exclusivo%20em%20Automa%C3%A7%C3%A3o%20de%20Atendimento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-sm text-center flex items-center justify-center gap-2 transition shadow-2xs"
                      >
                        <span>Resgatar Desconto</span>
                        <ArrowRight className="w-4 h-4 text-[#6EC1E4] group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Discrete Bottom Link to FélixTec Portfolio */}
                <div className="mt-8 pt-6 border-t border-neutral-200/80 flex items-center justify-center sm:justify-between flex-wrap gap-3 text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-neutral-700">
                    Precisa de um projeto sob medida ou automação específica?{" "}
                    <a
                      href="https://felixtec.com.br/?utm_source=atworksc&utm_medium=banner_parceiro&utm_campaign=beneficio_cliente"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#0369A1] hover:text-neutral-950 underline underline-offset-4 transition"
                    >
                      Conheça o portfólio completo da FélixTec →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= INTERACTIVE EXPLAINER VIDEOS ================= */}
          <VideoExplainSection />

          {/* ================= SAVINGS CALCULATOR ================= */}
          <SavingsCalculator />

          {/* ================= SPACE GALLERY ================= */}
          <section id="espaco" className="py-20 bg-[#F8FAFC] border-t border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                    Nosso espaço em Florianópolis SC
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
                    Estrutura pensada para o seu dia a dia
                  </h2>
                  <p className="text-neutral-600 mt-2 max-w-2xl text-base">
                    Salas privativas, estações compartilhadas, sala de reunião com TV 55&quot;,
                    cozinha equipada e estacionamento 24/7.
                  </p>
                </div>

                <div className="inline-flex p-1 rounded-full bg-neutral-200/80 border border-neutral-300/60 self-start">
                  {[
                    { id: "real", label: "Fotos Reais At Work SC" },
                    { id: "all", label: "Todas as Imagens" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setGalleryFilter(tab.id as "all" | "real" | "concept")}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition cursor-pointer ${
                        galleryFilter === tab.id
                          ? "bg-black text-white"
                          : "text-neutral-600 hover:text-black"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      setLightboxImage({
                        src: item.image,
                        title: item.title,
                        description: item.description,
                      })
                    }
                    className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-2xs hover:shadow-md transition flex flex-col cursor-zoom-in"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition">
                        Clique para ampliar
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-neutral-950 text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= BENEFITS SECTION ================= */}
          <section className="py-20 bg-white border-t border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                  Comodidades Inclusas
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
                  Benefícios At Work SC
                </h2>
                <p className="text-neutral-600 mt-2 text-base">
                  Oferecemos uma experiência completa e personalizada para todos os nossos clientes,
                  independentemente do serviço escolhido.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {BENEFITS.map((b, i) => (
                  <div
                    key={i}
                    className="p-7 rounded-2xl bg-[#F8FAFC] border border-neutral-200/90 hover:border-[#6EC1E4] hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-default relative overflow-hidden"
                  >
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-[#6EC1E4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-10 h-10 rounded-xl bg-[#6EC1E4]/20 group-hover:bg-[#6EC1E4] text-[#0284C7] group-hover:text-black flex items-center justify-center font-bold text-xs mb-4 transition-all duration-300 group-hover:scale-105">
                      0{i + 1}
                    </div>
                    <h3 className="font-bold text-lg text-neutral-950 group-hover:text-black transition">
                      {b.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= BLOG SECTION ================= */}
          <section id="blog" className="py-20 bg-[#F8FAFC] border-t border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                    Conteúdo & Empreendedorismo em SC
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
                    Blog & Guias Práticos
                  </h2>
                </div>
                <p className="text-sm text-neutral-600 max-w-md">
                  Tire suas dúvidas sobre abertura de CNPJ, Inscrição Estadual e redução de custos
                  operacionais em Florianópolis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-3xl bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition group"
                  >
                    <div>
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-neutral-900 text-xs font-semibold shadow-2xs">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="text-xs text-neutral-500 mb-2">
                          {post.date} • {post.readTime}
                        </div>
                        <h3 className="text-lg font-bold text-neutral-950 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-neutral-600 mt-2.5 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6">
                      <button
                        onClick={() => setSelectedArticle(post)}
                        className="w-full py-3 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-neutral-900 font-medium text-xs sm:text-sm transition cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Ler Artigo</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ================= FAQ SECTION ================= */}
          <section id="faq" className="py-20 bg-white border-t border-neutral-200/80">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                  FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mt-1">
                  Perguntas Frequentes
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-[#F8FAFC] border border-neutral-200 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-100/70 transition cursor-pointer"
                      >
                        <span className="font-semibold text-base text-neutral-950">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-4 bg-white">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ================= LOCATION & CONTACT ================= */}
          <section id="contato" className="py-20 bg-[#F8FAFC] border-t border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                    Contato Rápido
                  </span>
                  <h2 className="text-3xl font-bold text-neutral-950">
                    Venha conhecer o melhor coworking da Ilha da Magia
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Faça network no centro de tecnologia de Florianópolis. Operando 24 horas para
                    mensalistas, com segurança e estacionamento.
                  </p>

                  <div className="space-y-3 text-sm text-neutral-700 pt-2">
                    <div>
                      <strong className="text-neutral-950 block">Endereço:</strong>
                      {SITE_CONFIG.address.street} – {SITE_CONFIG.address.complement}
                    </div>
                    <div>
                      <strong className="text-neutral-950 block">E-mail:</strong>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-[#0284C7] hover:underline"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                    <div>
                      <strong className="text-neutral-950 block">WhatsApp:</strong>
                      <a
                        href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#16A34A] font-semibold hover:underline"
                      >
                        {SITE_CONFIG.contact.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => handleOpenBooking("Visita Presencial na SC-401")}
                      className="px-6 py-3 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm transition cursor-pointer flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-[#6EC1E4]" />
                      Agendar Visita
                    </button>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs sm:text-sm transition flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-200 h-[360px] shadow-sm bg-white">
                  <iframe
                    title="Mapa de Localização At Work SC - Rodovia SC-401, 4190"
                    src={SITE_CONFIG.address.googleMapsEmbed}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ================= CLEAN BLACK FOOTER (Matches original site footer) ================= */}
      <footer className="bg-black text-neutral-400 py-12 pb-24 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/original/logo-atwork.png"
              alt="At Work SC"
              className="h-12 w-auto object-contain"
            />
            <div>
              <p className="text-white font-medium">
                Conheça o melhor coworking da Ilha da Magia na SC-401.
              </p>
              <p className="text-neutral-500 mt-0.5">
                © 2026 At Work SC · Todos os direitos reservados.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-neutral-300 text-sm">
            <a href="#planos-fiscais" className="hover:text-white transition">
              End. Fiscal
            </a>
            <a href="#planos-coworking" className="hover:text-white transition">
              Coworking
            </a>
            <Link href="/politica-de-privacidade" className="hover:text-white transition">
              Privacidade & Cookies
            </Link>
            <Link href="/termos-de-uso" className="hover:text-white transition">
              Termos de Uso
            </Link>
            <a href="/llms.txt" target="_blank" className="hover:text-white transition">
              /llms.txt (IA)
            </a>
            <a
              href={SITE_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom Tech Partner Credits Bar & Dev Félix Official Signature Badge */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-neutral-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-neutral-300">
          <p className="text-xs leading-relaxed">
            Tecnologia, Performance e Automações por{" "}
            <a
              href="https://felixtec.com.br/?utm_source=atworksc&utm_medium=rodape&utm_campaign=parceria_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold bg-[linear-gradient(135deg,#0071e3,#00d2ff)] bg-clip-text text-transparent hover:opacity-85 transition"
            >
              FélixTec
            </a>{" "}
            — Soluções digitais para empresas
          </p>

          {/* Discrete Agency Signature Badge with Official Dev Félix Mascot */}
          <a
            href="https://felixtec.com.br/?utm_source=atworksc&utm_medium=rodape&utm_campaign=parceria_tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group/ftbadge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 hover:border-[#00d2ff]/60 transition"
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 ease-out group-hover/ftbadge:-translate-y-0.5"
            >
              <defs>
                <linearGradient id="ft-badge-skin" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffe5c4" />
                  <stop offset="100%" stopColor="#fca88f" />
                </linearGradient>
                <linearGradient id="ft-badge-hoodie" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2d2d3a" />
                  <stop offset="100%" stopColor="#14141a" />
                </linearGradient>
              </defs>
              <g>
                <path d="M23 42 A 28 28 0 0 1 77 42" fill="none" stroke="#15151c" strokeWidth="2.5" />
                <path d="M23 42 A 28 28 0 0 1 77 42" fill="none" stroke="#00d2ff" strokeWidth="0.9" />
                <rect x="15" y="38" width="8" height="15" rx="4" fill="#15151c" stroke="#00d2ff" strokeWidth="1.1" />
                <rect x="77" y="38" width="8" height="15" rx="4" fill="#15151c" stroke="#00d2ff" strokeWidth="1.1" />
                <path d="M22 42 C22 60, 78 60, 78 42 Z" fill="url(#ft-badge-skin)" stroke="#fca88f" strokeWidth="0.5" />
                <path d="M23 40 Q50 25 77 40 Q64 35 50 38 Q36 35 23 40 Z" fill="#15151c" />
                <circle cx="37" cy="46" r="9.5" fill="rgba(0, 210, 255, 0.08)" stroke="#00d2ff" strokeWidth="1.3" />
                <circle cx="63" cy="46" r="9.5" fill="rgba(0, 210, 255, 0.08)" stroke="#00d2ff" strokeWidth="1.3" />
                <line x1="46.5" y1="46" x2="53.5" y2="46" stroke="#00d2ff" strokeWidth="1.3" />
                <circle cx="37" cy="46" r="3.2" fill="#15151c" />
                <circle cx="63" cy="46" r="3.2" fill="#15151c" />
                <circle cx="38.5" cy="44.5" r="1" fill="#ffffff" />
                <circle cx="64.5" cy="44.5" r="1" fill="#ffffff" />
                <circle cx="25" cy="51" r="2.5" fill="#ff3366" fillOpacity="0.4" />
                <circle cx="75" cy="51" r="2.5" fill="#ff3366" fillOpacity="0.4" />
                <path d="M21 54 C21 54, 50 64, 79 54 L75 62 L25 62 Z" fill="#15151c" />
                <path d="M23 60 C23 60, 50 56, 77 60 L80 92 L20 92 Z" fill="url(#ft-badge-hoodie)" stroke="#2d2d3a" strokeWidth="1.2" />
                <line x1="43" y1="62" x2="43" y2="73" stroke="#00d2ff" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="57" y1="62" x2="57" y2="73" stroke="#00d2ff" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M44.8 69.5 V63.5 H48.5 V64.7 H45.8 V66.1 H48 V67.2 H45.8 V69.5 Z" fill="#00d2ff" />
                <path d="M50 63.5 H55.2 V64.7 H53.5 V69.5 H51.9 V64.7 H50 Z" fill="#00d2ff" />
                <path d="M23 66 Q13 70 12 76" stroke="#2d2d3a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <circle cx="12" cy="76" r="4.5" fill="url(#ft-badge-skin)" />
                <path d="M77 66 Q87 70 88 76" stroke="#2d2d3a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <circle cx="88" cy="76" r="4.5" fill="url(#ft-badge-skin)" />
                <rect x="32" y="91" width="13" height="4" rx="2" fill="#15151c" stroke="#00d2ff" strokeWidth="0.9" />
                <rect x="55" y="91" width="13" height="4" rx="2" fill="#15151c" stroke="#00d2ff" strokeWidth="0.9" />
              </g>
            </svg>
            <span className="text-xs text-neutral-300 font-medium">
              Desenvolvido por{" "}
              <strong className="font-extrabold bg-[linear-gradient(135deg,#0071e3,#00d2ff)] bg-clip-text text-transparent">
                FélixTec
              </strong>
            </span>
          </a>
        </div>
      </footer>

      {/* ================= BOTTOM FLOATING BAR: HUMAN ⇄ AI SWITCH + WHATSAPP (SIDE BY SIDE) ================= */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
        {/* Discrete Chic Switch Placed Directly to the Left of WhatsApp */}
        <div
          role="group"
          aria-label="Alternar entre modo Humano e modo IA"
          className="inline-flex items-center p-1 rounded-full bg-white/95 backdrop-blur-md border border-neutral-300 shadow-lg"
        >
          <button
            onClick={() => setViewMode("human")}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition cursor-pointer ${
              viewMode === "human"
                ? "bg-black text-white"
                : "text-neutral-600 hover:text-black"
            }`}
            title="Visualização para Humanos"
          >
            <User className="w-3.5 h-3.5" />
            <span>Humano</span>
          </button>
          <button
            onClick={() => setViewMode("ai")}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition cursor-pointer ${
              viewMode === "ai"
                ? "bg-black text-[#6EC1E4]"
                : "text-neutral-600 hover:text-black"
            }`}
            title="Modo otimizado para leitura de IA e LLMs"
          >
            <Bot className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Modo IA</span>
          </button>
        </div>

        {/* Official WhatsApp Button */}
        <a
          href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
            "Olá! 👋 Vim pelo site da At Work SC e gostaria de informações."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm shadow-lg transition hover:scale-[1.02]"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      {/* ================= BLOG ARTICLE READER MODAL ================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white border border-neutral-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 text-neutral-900 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <span className="px-3 py-1 rounded-full bg-[#6EC1E4]/20 text-[#0369A1] text-xs font-semibold">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-medium cursor-pointer"
              >
                Fechar ✕
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mt-5 leading-tight text-neutral-950">
              {selectedArticle.title}
            </h2>
            <div className="text-xs text-neutral-500 mt-2">
              Por {selectedArticle.author} • {selectedArticle.date} • {selectedArticle.readTime}
            </div>

            <div className="my-6 p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200 space-y-2">
              <div className="text-xs font-semibold uppercase text-[#0284C7]">
                Destaques do Guia:
              </div>
              {selectedArticle.keyTakeaways.map((k, i) => (
                <div key={i} className="text-sm text-neutral-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>{k}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
              {selectedArticle.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-bold text-neutral-950 text-sm">
                  Traga sua empresa para a SC-401
                </div>
                <div className="text-xs text-neutral-500">
                  Planos a partir de R$ 54,90/mês sem fiador.
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                  `Olá! Li o artigo "${selectedArticle.title}" no site da At Work SC e quero tirar uma dúvida.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-black text-white font-medium text-xs sm:text-sm"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= IMAGE LIGHTBOX MODAL ================= */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-neutral-950 rounded-3xl overflow-hidden border border-white/15 shadow-2xl cursor-default"
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-xs sm:text-sm font-semibold border border-white/20 transition cursor-pointer"
            >
              Fechar ✕
            </button>

            <div className="max-h-[78vh] w-full flex items-center justify-center bg-black overflow-hidden">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-neutral-950 text-white border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  {lightboxImage.title}
                </h3>
                {lightboxImage.description && (
                  <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                    {lightboxImage.description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  const title = lightboxImage.title;
                  setLightboxImage(null);
                  handleOpenBooking(`Visita Presencial · ${title}`);
                }}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs sm:text-sm transition shrink-0 cursor-pointer"
              >
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= GOOGLE CALENDAR BOOKING MODAL ================= */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={bookingService}
      />
    </div>
  );
}
