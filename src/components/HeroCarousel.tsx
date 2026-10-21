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
      title: "Endereço Fiscal",
      subtitle:
        "Utilize nosso endereço fiscal para registrar sua empresa com credibilidade. Nossa solução oferece uma localização prestigiada na SC-401 em Florianópolis, com suporte completo para correspondências, Inscrição Estadual e reuniões.",
      priceHighlight: "Planos a partir de R$ 24,90/mês",
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
        "Descubra um ambiente na Ilha da Magia que combina conforto, natureza ao redor e inovação. Oferecemos escritórios privativos de 15 a 70m², estações compartilhadas 24h, salas de reunião e um ambiente colaborativo próximo ao Passeio Primavera.",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Top Slide Selector Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex p-1 rounded-full bg-neutral-200/70 border border-neutral-300/60">
            <button
              onClick={() => handleSelectSlide(0)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
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
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
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
              <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-200/60 text-neutral-600 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                Pausado para sua leitura
              </span>
            )}
            <div className="hidden sm:flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Centro Tecnológico de Florianópolis · Próximo ao Passeio Primavera</span>
            </div>
          </div>
        </div>

        {/* Main Slide Grid - Locked minimum height to prevent any layout shifts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Text - Stabilized sizing */}
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[480px] sm:min-h-[500px] lg:min-h-[520px] space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0284C7]">
                {current.tag}
              </span>
              <div className="min-h-[80px] sm:min-h-[92px] lg:min-h-[116px] flex items-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08]">
                  {current.title}
                </h1>
              </div>
            </div>

            <div className="min-h-[76px] sm:min-h-[80px] lg:min-h-[88px]">
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
                {current.subtitle}
              </p>
            </div>

            {/* Price & Bullets - Locked height card */}
            <div className="bg-white rounded-2xl p-5 border border-neutral-200/90 shadow-xs space-y-3 min-h-[178px] flex flex-col justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6EC1E4]/15 text-[#0369A1] text-xs font-semibold w-fit">
                {current.priceHighlight}
              </div>

              <ul className="space-y-2">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-700">
                    <span className="w-5 h-5 rounded-full bg-[#61CE70]/15 text-[#15803D] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={current.primaryCta.href}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-sm sm:text-base transition shadow-sm"
              >
                <span>{current.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#6EC1E4]" />
              </a>

              <button
                onClick={() => onOpenBooking(current.secondaryCta.service)}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-medium text-sm sm:text-base transition cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0284C7]" />
                <span>{current.secondaryCta.label}</span>
              </button>
            </div>
          </div>

          {/* Right Clean Visual Frame - Consistent 4/3 Aspect Ratio */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200 aspect-[4/3]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs uppercase tracking-widest text-[#6EC1E4] font-semibold">
                  At Work SC · Florianópolis
                </span>
                <p className="text-white text-sm sm:text-base font-medium mt-0.5">
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
  );
}
