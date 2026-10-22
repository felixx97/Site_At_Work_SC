"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Check,
  Calendar,
  Building2,
  FileCheck,
  Phone,
  Sparkles,
  Pause,
  Play,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

interface HeroCarouselProps {
  onOpenBooking: (service?: string) => void;
}

export default function HeroCarousel({ onOpenBooking }: HeroCarouselProps) {
  // Desktop Slides State
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mobile Cinematic Video Hero State
  const [activeMobileSlide, setActiveMobileSlide] = useState(0);
  const [isMobilePaused, setIsMobilePaused] = useState(false);
  const [mobileProgress, setMobileProgress] = useState(0);

  // Desktop Slides (Preserved exactly as approved)
  const slides = [
    {
      id: "endereco-fiscal",
      tag: "Profissionalize sua empresa com facilidade",
      title: "Endereço Fiscal & CNPJ",
      subtitle:
        "Utilize nosso endereço fiscal para registrar seu CNPJ com credibilidade na SC-401. Solução completa para correspondências, abertura ágil de empresas e opção de Inscrição Estadual.",
      priceHighlight: "Planos a partir de R$ 54,90/mês",
      bullets: [
        "Abertura ou transferência de CNPJ sem burocracia",
        "Aviso imediato de correspondência via WhatsApp",
        "Opção com Inscrição Estadual (ICMS) para Comércio",
      ],
      primaryCta: {
        label: "Ver Planos de Endereço Fiscal",
        href: "#planos-fiscais",
      },
      secondaryCta: {
        label: "Tirar Dúvida / Agendar",
        service: "Consultoria · Endereço Fiscal",
      },
      image: "/images/original/fachada-recepcao.jpeg",
      imageCaption: "Sede At Work SC · Rodovia SC-401, 4190 (Bloco B) · Saco Grande",
    },
    {
      id: "coworking",
      tag: "Espaços de Trabalho Flexíveis e Inspiradores",
      title: "Coworking & Salas Privativas",
      subtitle:
        "Ambiente moderno na SC-401 combinando conforto, natureza e inovação. Oferecemos escritórios privativos de 15 a 70m², estações de trabalho 24/7, salas de reunião e copa completa.",
      priceHighlight: "Diárias a partir de R$ 30,00 ou Mensal 24/7",
      bullets: [
        "Salas privativas mobiliadas p/ equipes (15m² a 70m²)",
        "Acesso 24 horas p/ mensalistas e segurança 24h",
        "Sala de reunião equipada com TV 55\" e cozinha completa",
      ],
      primaryCta: {
        label: "Conhecer Planos de Coworking",
        href: "#planos-coworking",
      },
      secondaryCta: {
        label: "Agendar Visita Presencial",
        service: "Visita Guiada · Coworking & Salas Privativas",
      },
      image: "/images/ai/hero-coworking-atwork.jpg",
      imageCaption: "Espaço At Work SC · Estações modernas, salas privativas e reuniões na SC-401",
    },
  ];

  // Mobile Narrative Slides (Dynamic rotating phrases & benefits)
  const mobileSlides = [
    {
      id: "mob-fiscal",
      tag: "Florianópolis · SC-401",
      badge: "Endereço Fiscal Oficial",
      title: "Seu CNPJ no Polo Tecnológico de Florianópolis",
      subtitle:
        "Registre sua empresa na SC-401 com credibilidade imediata. Sem custos de aluguel físico e com total sigilo do seu endereço de casa.",
      priceHighlight: "A partir de R$ 54,90/mês",
      perks: [
        "Abertura ou transferência de CNPJ sem burocracia",
        "Opção com Inscrição Estadual (SEF-SC / ICMS para Comércio)",
        "Aviso em tempo real de correspondências via WhatsApp",
      ],
      primaryCta: {
        label: "Ver Planos de Endereço Fiscal",
        href: "#planos-fiscais",
      },
      secondaryCta: {
        label: "Agendar Visita / Consultoria",
        isBooking: true,
        service: "Consultoria · Endereço Fiscal Oficial",
      },
    },
    {
      id: "mob-coworking",
      tag: "Acesso Livre 24 Horas",
      badge: "Coworking & Salas Privativas",
      title: "Trabalhe Conectado ao Lado do Passeio Primavera",
      subtitle:
        "Estações compartilhadas e escritórios privativos de 15 a 70m² para times de todos os portes com revezamento inteligente da equipe.",
      priceHighlight: "Diárias R$ 30 · Mensal 24/7 R$ 450",
      perks: [
        "Acesso 24/7 com biometria e segurança monitorada",
        "Salas privativas mobiliadas prontas para operar",
        "Internet fibra dedicada, copa completa e café liberado",
      ],
      primaryCta: {
        label: "Conhecer Planos de Coworking",
        href: "#planos-coworking",
      },
      secondaryCta: {
        label: "Agendar Visita Presencial",
        isBooking: true,
        service: "Visita Guiada · Coworking e Salas Privativas",
      },
    },
    {
      id: "mob-reuniao",
      tag: "Credibilidade Executiva",
      badge: "Salas de Reunião & Apresentações",
      title: "Receba Clientes e Investidores com Excelência",
      subtitle:
        "Salas climatizadas com TV 4K de 55 polegadas, copa compartilhada e estacionamento amplo 24h no complexo High Tech.",
      priceHighlight: "TV 55\" 4K · Climatizada · Até 8 Pessoas",
      perks: [
        "Ambiente executivo de alto padrão para reuniões",
        "Privacidade acústica e suporte de recepção",
        "Localização privilegiada na Rota da Inovação",
      ],
      primaryCta: {
        label: "Agendar Visita Presencial",
        isBooking: true,
        service: "Reserva · Sala de Reunião Executiva",
      },
      secondaryCta: {
        label: "Conhecer Nossos Espaços",
        href: "#espaco",
      },
    },
  ];

  // Desktop Autoplay timer
  useEffect(() => {
    if (hasInteracted || isHovered) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [hasInteracted, isHovered, slides.length]);

  // Mobile Progress & Slide Rotation (6 seconds per slide with smooth fill)
  const SLIDE_DURATION_MS = 6000;

  useEffect(() => {
    if (isMobilePaused) return;

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min((elapsed / SLIDE_DURATION_MS) * 100, 100);
      setMobileProgress(progress);

      if (elapsed >= SLIDE_DURATION_MS) {
        setMobileProgress(0);
        setActiveMobileSlide((prev) => (prev + 1) % mobileSlides.length);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isMobilePaused, activeMobileSlide, mobileSlides.length]);

  const handleSelectSlide = (index: number) => {
    setActiveSlide(index);
    setHasInteracted(true);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setHasInteracted(true);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setHasInteracted(true);
  };

  const handleMobileSelect = (index: number) => {
    setActiveMobileSlide(index);
    setMobileProgress(0);
  };

  const current = slides[activeSlide];
  const currentMob = mobileSlides[activeMobileSlide];

  return (
    <>
      {/* =========================================================================
          MOBILE CINEMATIC HERO (VIDEO BACKGROUND + ROTATING NARRATIVE CARDS)
          Visible on screens < 1024px (Mobile & Tablets)
      ========================================================================== */}
      <section className="block lg:hidden relative bg-neutral-950 text-white overflow-hidden">
        {/* Background Video with Multi-Layer Cinematic Treatment */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/original/fachada-recepcao.jpeg"
            className="w-full h-full object-cover filter brightness-[0.74] contrast-[1.05] saturate-[1.1] scale-105 transition-transform duration-1000"
          >
            <source src="/Videos/atworkvideo.mp4" type="video/mp4" />
            <source src="/videos/atworkvideo.mp4" type="video/mp4" />
          </video>

          {/* Top smooth blending vignette */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/75 via-black/20 to-transparent" />
          {/* Bottom rich dark vignette */}
          <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black via-black/65 to-transparent" />
          {/* Subtle Ambient Tech Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#6EC1E4]/10 via-transparent to-transparent opacity-60" />
        </div>

        {/* Foreground Mobile Content */}
        <div className="relative z-10 px-4 sm:px-6 pt-5 pb-10 sm:pb-14 flex flex-col justify-between min-h-[92vh] sm:min-h-[88vh]">
          {/* Top Story Indicator Bars (Instagram / Modern Fintech Style) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 w-full">
              {mobileSlides.map((s, idx) => {
                const isActive = activeMobileSlide === idx;
                const isPast = idx < activeMobileSlide;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleMobileSelect(idx)}
                    className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/20 relative cursor-pointer active:scale-95 transition-transform"
                    aria-label={`Ver slide ${idx + 1}`}
                  >
                    <div
                      className={`h-full bg-white rounded-full transition-all duration-100 ${
                        isActive
                          ? "bg-gradient-to-r from-[#6EC1E4] to-white"
                          : isPast
                          ? "w-full opacity-80"
                          : "w-0"
                      }`}
                      style={{
                        width: isActive ? `${mobileProgress}%` : isPast ? "100%" : "0%",
                      }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Top Micro Header: Live Location + Pause Toggle */}
            <div className="flex items-center justify-between text-xs text-neutral-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span>SC-401 · Próximo ao Passeio Primavera</span>
              </div>

              <button
                onClick={() => setIsMobilePaused(!isMobilePaused)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] text-neutral-200 active:scale-95 transition cursor-pointer"
                aria-label={isMobilePaused ? "Retomar rotação" : "Pausar leitura"}
              >
                {isMobilePaused ? (
                  <>
                    <Play className="w-3 h-3 text-[#61CE70]" />
                    <span>Continuar</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-[#6EC1E4]" />
                    <span>Pausar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Central Glassmorphic Narrative Card (Locked Height & Lower Blur) */}
          <div
            onTouchStart={() => setIsMobilePaused(true)}
            onTouchEnd={() => setIsMobilePaused(false)}
            className="my-auto py-2"
          >
            <div
              key={activeMobileSlide}
              className="bg-black/30 backdrop-blur-[4px] border border-white/20 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between h-[420px] sm:h-[440px] animate-in fade-in duration-300 ring-1 ring-white/10"
            >
              {/* Category Pill + Price Badge (Fixed Height) */}
              <div className="flex items-center justify-between gap-2 shrink-0 h-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider border border-white/15 shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#6EC1E4]" />
                  <span>{currentMob.badge}</span>
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#6EC1E4]/25 border border-[#6EC1E4]/50 text-white text-xs font-bold shadow-xs">
                  {currentMob.priceHighlight}
                </span>
              </div>

              {/* Title & Subtitle Container (Fixed Height) */}
              <div className="space-y-1 shrink-0 pt-1">
                <div className="h-[58px] sm:h-[62px] flex items-center">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-[1.18] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] line-clamp-2">
                    {currentMob.title}
                  </h1>
                </div>

                <div className="h-[48px] sm:h-[52px] flex items-start">
                  <p className="text-xs sm:text-[13px] text-neutral-100 leading-snug font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] line-clamp-3">
                    {currentMob.subtitle}
                  </p>
                </div>
              </div>

              {/* Bullet Perks with Emerald Checks (Fixed Height) */}
              <div className="h-[120px] flex flex-col justify-center border-t border-white/15 pt-2">
                <ul className="space-y-2">
                  {currentMob.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] leading-tight">
                      <span className="w-4 h-4 rounded-full bg-[#16A34A]/60 text-[#61CE70] flex items-center justify-center shrink-0 mt-0.5 border border-[#16A34A]/80">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span className="line-clamp-2">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Slide Quick Navigation Arrows (Fixed Height) */}
              <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[11px] text-neutral-300 shrink-0 h-9">
                <span className="font-mono text-white/90">
                  0{activeMobileSlide + 1} / 0{mobileSlides.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveMobileSlide(
                        (prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length
                      );
                      setMobileProgress(0);
                    }}
                    className="p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition active:scale-90"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveMobileSlide((prev) => (prev + 1) % mobileSlides.length);
                      setMobileProgress(0);
                    }}
                    className="p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition active:scale-90"
                    aria-label="Próximo slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Conversion Area: Single High-Impact Action Button */}
          <div className="space-y-2.5 pt-2 pb-6 sm:pb-8">
            {/* Primary Action Button */}
            {currentMob.primaryCta.isBooking ? (
              <button
                onClick={() => onOpenBooking(currentMob.primaryCta.service)}
                className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl transition active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0284C7]" />
                <span>{currentMob.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#0284C7]" />
              </button>
            ) : (
              <a
                href={currentMob.primaryCta.href}
                className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl transition active:scale-[0.98]"
              >
                <span>{currentMob.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#0284C7]" />
              </a>
            )}

            {/* Trust Assurance */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-300 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#61CE70]" />
              <span>Contrato 100% digital · Sem fiador · Liberação rápida</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DESKTOP HERO CAROUSEL (CLEAN EDITORIAL ARCHITECTURAL LAYOUT)
          Preserved intact on screens >= 1024px
      ========================================================================== */}
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden lg:block relative bg-[#F8FAFC] border-b border-neutral-200/80 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          {/* Top Slide Selector - Segmented control */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="inline-flex p-1 rounded-full bg-neutral-200/70 border border-neutral-300/60">
              <button
                onClick={() => handleSelectSlide(0)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeSlide === 0
                    ? "bg-black text-white shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                <FileCheck className="w-4 h-4 text-[#6EC1E4]" />
                <span>01. Endereço Fiscal</span>
              </button>
              <button
                onClick={() => handleSelectSlide(1)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeSlide === 1
                    ? "bg-black text-white shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                <Building2 className="w-4 h-4 text-[#6EC1E4]" />
                <span>02. Coworking & Salas</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-neutral-500">
              {hasInteracted && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-200/60 text-neutral-600 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  Pausado para sua leitura
                </span>
              )}
              <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>SC-401 · Próximo ao Passeio Primavera</span>
              </div>
            </div>
          </div>

          {/* Main Slide Grid */}
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Left Editorial Text - Exact locked height on desktop */}
            <div className="col-span-6 flex flex-col justify-between h-[530px] space-y-6">
              <div className="space-y-3">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                  {current.tag}
                </span>
                <div className="h-[110px] flex items-center">
                  <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
                    {current.title}
                  </h2>
                </div>
              </div>

              <div className="h-[82px] flex items-start">
                <p className="text-neutral-600 text-lg leading-relaxed font-normal">
                  {current.subtitle}
                </p>
              </div>

              {/* Price & Bullets */}
              <div className="space-y-3.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-sm font-semibold w-fit">
                  {current.priceHighlight}
                </div>

                <ul className="space-y-2.5">
                  {current.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-700 font-medium">
                      <span className="w-5 h-5 rounded-full bg-[#16A34A]/15 text-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3.5 pt-1">
                <a
                  href={current.primaryCta.href}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-base transition shadow-sm"
                >
                  <span>{current.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#6EC1E4]" />
                </a>

                <button
                  onClick={() => onOpenBooking(current.secondaryCta.service)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-semibold text-base transition cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#0284C7]" />
                  <span>{current.secondaryCta.label}</span>
                </button>
              </div>
            </div>

            {/* Right Clean Visual Frame */}
            <div className="col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/90 aspect-[4/3]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-xs uppercase tracking-widest text-[#6EC1E4] font-semibold">
                    At Work SC · Florianópolis
                  </span>
                  <p className="text-white text-base font-medium mt-0.5">
                    {current.imageCaption}
                  </p>
                </div>

                {/* Prev / Next Controls inside Image */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center shadow-md transition cursor-pointer"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center shadow-md transition cursor-pointer"
                    aria-label="Próximo slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
