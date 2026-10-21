"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const consent = localStorage.getItem("atwork_cookie_consent");
    if (!consent) {
      // Small delay for smooth entry
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("atwork_cookie_consent", "all");
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("atwork_cookie_consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Consentimento de Cookies e Privacidade"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-2xl p-5 shadow-2xl text-neutral-900">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#6EC1E4]/20 text-[#0284C7] flex items-center justify-center shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-950">Privacidade & Cookies</h4>
              <span className="text-[11px] text-neutral-500 font-medium">LGPD Compliance</span>
            </div>
          </div>
          <button
            onClick={handleAcceptEssential}
            className="text-neutral-400 hover:text-neutral-600 p-1 rounded-lg transition cursor-pointer"
            aria-label="Fechar e aceitar apenas essenciais"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
          Utilizamos cookies essenciais e tecnologias semelhantes para aprimorar sua navegação e
          oferecer a melhor experiência em nosso espaço na SC-401. Você pode aceitar todos ou
          consultar nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-[#0284C7] underline hover:text-[#0369A1] font-medium"
          >
            Política de Privacidade e Cookies
          </Link>
          .
        </p>

        <div className="mt-4 flex items-center gap-2.5">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2 px-3 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-xs transition cursor-pointer text-center"
          >
            Aceitar Todos
          </button>
          <button
            onClick={handleAcceptEssential}
            className="py-2 px-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium text-xs transition cursor-pointer text-center"
          >
            Apenas Essenciais
          </button>
        </div>
      </div>
    </aside>
  );
}
