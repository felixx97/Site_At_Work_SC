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
          <section id="sobre" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0284C7]">
                    Ilha da Magia · Centro Tecnológico SC-401
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
                    O espaço ideal para o seu negócio próximo ao Passeio Primavera.
                  </h2>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    No <strong>At Work SC</strong>, você conta com um ambiente de trabalho
                    inspirador na Rodovia José Carlos Daux (SC-401), equipado com as melhores
                    comodidades para aumentar a sua produtividade e fortalecer a presença da sua
                    empresa em Florianópolis.
                  </p>
                  <p className="text-neutral-600 text-base leading-relaxed">
                    Oferecemos serviços de <strong>endereço comercial, endereço fiscal, inscrição
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
                    <img
                      src="/images/original/espaco-03.jpg"
                      alt="Ambiente At Work SC Florianópolis"
                      className="w-full h-56 object-cover rounded-2xl border border-neutral-200"
                    />
                    <img
                      src="/images/original/cozinha-01.jpg"
                      alt="Cozinha Completa At Work SC"
                      className="w-full h-44 object-cover rounded-2xl border border-neutral-200"
                    />
                  </div>
                  <div className="space-y-4 pt-6">
                    <img
                      src="/images/original/sala-reuniao.jpeg"
                      alt="Sala de Reunião At Work SC"
                      className="w-full h-44 object-cover rounded-2xl border border-neutral-200"
                    />
                    <img
                      src="/images/original/espaco-01.jpg"
                      alt="Coworking SC-401"
                      className="w-full h-56 object-cover rounded-2xl border border-neutral-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= PLANS SECTION 1: ENDEREÇO FISCAL ================= */}
          <section id="planos-fiscais" className="py-20 bg-[#F8FAFC] border-t border-neutral-200/80">
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
          <section id="planos-coworking" className="py-20 bg-white border-t border-neutral-200/80">
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
                    className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-2xs hover:shadow-md transition flex flex-col"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
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

      {/* ================= GOOGLE CALENDAR BOOKING MODAL ================= */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={bookingService}
      />
    </div>
  );
}
