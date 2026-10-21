"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Check,
  Calendar,
  Building2,
  FileCheck,
} from "lucide-react";

interface HeroCarouselProps {
  onOpenBooking: (service?: string) => void;
}

export default function HeroCarousel({ onOpenBooking }: HeroCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // Autoplay only runs until the user interacts (clicks either tab/arrow) or while hovered
  useEffect(() => {
    if (hasInteracted || isHovered) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7500);

    return () => clearInterval(timer);
  }, [hasInteracted, isHovered, slides.length]);

  const handleSelectSlide = (index: number) => {
    setActiveSlide(index);
    setHasInteracted(true); // Permanent pause on user manual click so they can read in peace!
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setHasInteracted(true);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setHasInteracted(true);
  };

  const current = slides[activeSlide];

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-[#F8FAFC] border-b border-neutral-200/80 overflow-hidden"
    >
      {/* Subtle Clean Architectural Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-18">
        {/* Top Slide Selector - Fluid segmented control on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
          <div className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex p-1 rounded-2xl sm:rounded-full bg-neutral-200/70 border border-neutral-300/60 gap-1">
            <button
              onClick={() => handleSelectSlide(0)}
              className={`inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
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
              className={`inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeSlide === 1
                  ? "bg-black text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <Building2 className="w-4 h-4 text-[#6EC1E4]" />
              <span>02. Coworking & Salas</span>
            </button>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-neutral-500">
            {hasInteracted && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-200/60 text-neutral-600 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                Pausado
              </span>
            )}
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-500">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
              <span>SC-401 · Próximo ao Passeio Primavera</span>
            </div>
          </div>
        </div>

        {/* Main Slide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Text - Fluid on mobile, locked on desktop */}
          <div className="lg:col-span-6 flex flex-col justify-between h-auto lg:h-[530px] space-y-5 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                {current.tag}
              </span>
              <div className="h-auto lg:h-[110px] flex items-center">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.12]">
                  {current.title}
                </h1>
              </div>
            </div>

            <div className="h-auto lg:h-[82px] flex items-start">
              <p className="text-neutral-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                {current.subtitle}
              </p>
            </div>

            {/* Price & Bullets - Clean and integrated without boxy nested borders */}
            <div className="space-y-3.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-xs sm:text-sm font-semibold w-fit">
                {current.priceHighlight}
              </div>

              <ul className="space-y-2.5">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#16A34A]/15 text-[#16A34A] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs - Mobile full-width touch friendly */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={current.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base transition shadow-sm"
              >
                <span>{current.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#6EC1E4]" />
              </a>

              <button
                onClick={() => onOpenBooking(current.secondaryCta.service)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-semibold text-sm sm:text-base transition cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0284C7]" />
                <span>{current.secondaryCta.label}</span>
              </button>
            </div>
          </div>

          {/* Right Clean Visual Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/90 aspect-[16/10] sm:aspect-[4/3]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-8">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#6EC1E4] font-semibold">
                  At Work SC · Florianópolis
                </span>
                <p className="text-white text-xs sm:text-base font-medium mt-0.5">
                  {current.imageCaption}
                </p>
              </div>

              {/* Prev / Next Controls inside Image */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2">
                <button
                  onClick={handlePrevSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center shadow-md transition cursor-pointer"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center shadow-md transition cursor-pointer"
                  aria-label="Próximo slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
