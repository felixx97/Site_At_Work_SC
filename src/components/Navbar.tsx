"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Phone, Menu, X, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

interface NavbarProps {
  onResetToHuman: () => void;
  onOpenBooking: (service?: string) => void;
}

export default function Navbar({ onResetToHuman, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80">
      {/* Top Discrete Info Bar (Desktop only, hidden on mobile for clean modern app header) */}
      <div className="hidden lg:block bg-black text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-neutral-200">
              <MapPin className="w-3.5 h-3.5 text-[#6EC1E4]" />
              Rod. José Carlos Daux (SC-401), 4190 - Bloco B - Saco Grande, Florianópolis
            </span>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#6EC1E4]" />
              {SITE_CONFIG.contact.email}
            </a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={SITE_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition"
            >
              <span className="hidden sm:inline">Instagram @atworksc</span>
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white font-medium hover:text-[#6EC1E4] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#61CE70]" />
              {SITE_CONFIG.contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 lg:h-22 flex items-center justify-between gap-4">
        {/* Original Logo Only (Proportional on mobile, crisp on desktop) */}
        <a
          href="#"
          onClick={onResetToHuman}
          className="flex items-center shrink-0 py-1 sm:py-2"
          aria-label="At Work SC - Início"
        >
          <img
            src="/images/original/logo-atwork.png"
            alt="At Work SC"
            className="h-10 sm:h-14 lg:h-16 w-auto object-contain transition-transform hover:scale-[1.02]"
          />
        </a>

        {/* Clean Minimal Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-neutral-700">
          <a href="#" onClick={onResetToHuman} className="hover:text-black transition">
            Início
          </a>
          <a href="#sobre" className="hover:text-black transition">
            Sobre Nós
          </a>
          <a href="#planos-fiscais" className="hover:text-black transition">
            End. Fiscal
          </a>
          <a href="#planos-coworking" className="hover:text-black transition">
            Coworking & Salas
          </a>
          <a href="#espaco" className="hover:text-black transition">
            Nosso Espaço
          </a>
          <a href="#blog" className="hover:text-black transition">
            Blog
          </a>
          <a href="#faq" className="hover:text-black transition">
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => onOpenBooking("Visita ao Espaço At Work SC")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-sm transition cursor-pointer shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#6EC1E4]" />
            <span>Agendar Visita</span>
          </button>

          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#16A34A] text-white text-xs font-semibold shadow-xs"
            aria-label="Falar no WhatsApp"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-neutral-200 text-neutral-800 hover:bg-neutral-100"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-5 space-y-3 text-base text-neutral-800 shadow-xl">
          <a
            href="#planos-fiscais"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-neutral-100 font-semibold text-neutral-950"
          >
            Endereço Fiscal (a partir de R$ 54,90)
          </a>
          <a
            href="#planos-coworking"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-neutral-100 font-medium"
          >
            Coworking & Salas Privativas
          </a>
          <a
            href="#espaco"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-neutral-100"
          >
            Nosso Espaço na SC-401
          </a>
          <a
            href="#videos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-neutral-100"
          >
            Como Funciona
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-neutral-100"
          >
            Blog & Artigos
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-neutral-100"
          >
            Perguntas Frequentes
          </a>
          <a
            href="/politica-de-privacidade"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-neutral-100 text-xs text-neutral-500"
          >
            Privacidade & Cookies (LGPD)
          </a>

          {/* Quick Direct Contacts for Mobile */}
          <div className="pt-2 flex flex-col gap-2 text-xs text-neutral-600">
            <div className="flex items-center gap-2 text-neutral-500">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
              <span>Rod. SC-401, 4190 · Bloco B · Saco Grande</span>
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking("Visita ao Espaço At Work SC");
            }}
            className="w-full py-3.5 rounded-full bg-black text-white font-medium text-sm flex items-center justify-center gap-2 mt-3 cursor-pointer shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#6EC1E4]" />
            Agendar Visita Presencial
          </button>
        </div>
      )}
    </header>
  );
}
