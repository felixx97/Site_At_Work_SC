"use client";

import React, { useState } from "react";
import {
  X,
  Calendar,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Building,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialService = "Visita Guiada / Conhecer Espaço",
}: BookingModalProps) {
  const [serviceType, setServiceType] = useState(initialService);
  const [selectedDate, setSelectedDate] = useState("2026-10-22");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  const generateGoogleCalendarUrl = () => {
    const cleanDate = selectedDate.replace(/-/g, "");
    const startHour = parseInt(selectedTime.split(":")[0], 10);
    const endHour = startHour + 1;
    const startStr = `${cleanDate}T${String(startHour).padStart(2, "0")}0000`;
    const endStr = `${cleanDate}T${String(endHour).padStart(2, "0")}0000`;

    const title = encodeURIComponent(`At Work SC: ${serviceType} - ${name || "Cliente"}`);
    const details = encodeURIComponent(
      `Agendamento realizado pelo site da At Work SC.\n\nModalidade: ${serviceType}\nCliente: ${name}\nEmpresa: ${company || "Não informada"}\nWhatsApp: ${phone}\nE-mail: ${email}\n\nEndereço: ${SITE_CONFIG.address.street} - ${SITE_CONFIG.address.complement}`
    );
    const location = encodeURIComponent(
      `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city} - ${SITE_CONFIG.address.state}`
    );
    const addGuest = encodeURIComponent(SITE_CONFIG.contact.email);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${details}&location=${location}&add=${addGuest}`;
  };

  const generateWhatsAppSyncUrl = () => {
    const text = encodeURIComponent(
      `Olá equipe At Work SC! 👋\nAcabei de agendar pelo site:\n\n📌 *Serviço:* ${serviceType}\n📅 *Data:* ${selectedDate.split("-").reverse().join("/")}\n⏰ *Horário:* ${selectedTime}\n👤 *Nome:* ${name}\n🏢 *Empresa:* ${company || "-"}\n📧 *E-mail:* ${email}\n\nJá sincronizei o convite com a agenda (${SITE_CONFIG.contact.email}). Podemos confirmar?`
    );
    return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white border border-neutral-200 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl text-neutral-900 relative max-h-[92vh] overflow-y-auto">
        {/* Top Bar */}
        <div className="px-6 py-5 bg-[#F8FAFC] border-b border-neutral-200 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#6EC1E4]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-neutral-950 leading-tight">
                Agendar Horário · Google Agenda
              </h3>
              <p className="text-xs text-neutral-500">
                Sincronização direta com{" "}
                <span className="font-medium text-neutral-800">{SITE_CONFIG.contact.email}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2.5">
                1. Selecione o assunto ou visita
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Visita Guiada · Salas Privativas (15 a 70m²)",
                  "Reserva de Sala de Reunião Executiva (TV 55\")",
                  "Day Use · Diária de Coworking (R$ 30)",
                  "Consultoria Rápida · Abertura de Endereço Fiscal",
                ].map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setServiceType(option)}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition cursor-pointer ${
                      serviceType === option
                        ? "bg-black text-white border-black"
                        : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  2. Escolha a Data
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  3. Horário Disponível
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 rounded-lg text-xs font-medium border transition cursor-pointer ${
                        selectedTime === slot
                          ? "bg-black text-white border-black"
                          : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-400"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-neutral-600 mb-1.5">Seu Nome *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-600 mb-1.5">Seu WhatsApp *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="(48) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-600 mb-1.5">Seu E-mail *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="voce@empresa.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-600 mb-1.5">Empresa (Opcional)</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#6EC1E4]" />
              Confirmar e Gerar Convite na Agenda
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#16A34A] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-neutral-950">Horário Pré-Reservado!</h4>
              <p className="text-neutral-600 text-sm mt-2 max-w-md mx-auto">
                Clique abaixo para salvar no seu <strong>Google Agenda</strong> (já sincronizado com{" "}
                <code>{SITE_CONFIG.contact.email}</code>) ou confirmar direto no nosso WhatsApp:
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-neutral-200 text-left text-xs sm:text-sm space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-neutral-500">Modalidade:</span>
                <span className="font-semibold text-neutral-900">{serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Data & Hora:</span>
                <span className="font-semibold text-[#0284C7]">
                  {selectedDate.split("-").reverse().join("/")} às {selectedTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Local:</span>
                <span className="font-semibold text-neutral-900">Rod. SC-401, 4190 - Bloco B</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-sm transition"
              >
                <Calendar className="w-4 h-4 text-[#6EC1E4]" />
                1. Adicionar ao Google Agenda
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={generateWhatsAppSyncUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm transition"
              >
                <MessageSquare className="w-4 h-4" />
                2. Confirmar via WhatsApp
              </a>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-neutral-500 hover:text-black underline cursor-pointer"
            >
              Alterar data ou horário
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
