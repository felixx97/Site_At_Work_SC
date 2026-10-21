import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  Cookie,
  FileText,
  ArrowLeft,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Política de Privacidade e Cookies | At Work SC",
  description:
    "Saiba como o At Work SC trata seus dados pessoais, em total conformidade com a LGPD (Lei nº 13.709/2018), e como você pode gerenciar suas preferências de cookies.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/politica-de-privacidade`,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#6EC1E4]/30 selection:text-black">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black transition"
          >
            <ArrowLeft className="w-4 h-4 text-[#0284C7]" />
            <span>Voltar ao At Work SC</span>
          </Link>

          <img
            src="/images/original/logo-atwork.png"
            alt="At Work SC"
            className="h-10 w-auto object-contain"
          />
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header Hero */}
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6EC1E4]/15 text-[#0369A1] text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Em conformidade com a LGPD (Lei Federal nº 13.709/2018)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Política de Privacidade e Gestão de Cookies
          </h1>

          <div className="flex items-center gap-2 text-xs text-neutral-500 mt-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Última atualização: Outubro de 2026 · Versão 2.1</span>
          </div>

          <p className="text-neutral-600 text-base sm:text-lg mt-4 leading-relaxed">
            No <strong>{SITE_CONFIG.legalName}</strong> (&ldquo;At Work SC&rdquo;), a sua
            privacidade e a proteção dos seus dados pessoais são prioridades absolutas. Esta
            política descreve de forma clara e transparente como tratamos, coletamos e protegemos as
            suas informações ao navegar em nosso site e ao usufruir de nossas soluções de Endereço
            Fiscal, Coworking e Salas Privativas em Florianópolis.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-neutral-800 text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                1
              </div>
              <h2 className="text-2xl font-bold text-neutral-950">
                Quem é o Controlador dos seus Dados?
              </h2>
            </div>
            <p>
              O controlador dos dados pessoais coletados neste site é a empresa{" "}
              <strong>{SITE_CONFIG.legalName}</strong>, estabelecida na{" "}
              <strong>
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.complement} —{" "}
                {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}/
                {SITE_CONFIG.address.state}, CEP {SITE_CONFIG.address.zipCode}
              </strong>
              .
            </p>
            <p>
              Para esclarecer qualquer dúvida sobre o tratamento de seus dados ou exercer seus
              direitos como titular, você pode contatar nosso Encarregado de Proteção de Dados
              (DPO) pelo e-mail:{" "}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-[#0284C7] underline font-medium hover:text-[#0369A1]"
              >
                {SITE_CONFIG.contact.email}
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                2
              </div>
              <h2 className="text-2xl font-bold text-neutral-950">
                Quais Dados Pessoais Coletamos e Para Qual Finalidade?
              </h2>
            </div>
            <p>Coletamos apenas as informações estritamente necessárias para atender você:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200">
                <h3 className="font-bold text-neutral-950 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Agendamento de Visitas Presenciais
                </h3>
                <p className="text-xs text-neutral-600 mt-2">
                  Nome completo, e-mail, telefone/WhatsApp e data/horário de interesse para
                  confirmar sua visita às salas e espaço de coworking na SC-401.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200">
                <h3 className="font-bold text-neutral-950 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Contratação de Endereço Fiscal
                </h3>
                <p className="text-xs text-neutral-600 mt-2">
                  Razão Social, CNPJ, dados do sócio responsável e contatos para elaboração do
                  contrato de locação comercial e protocolo nas repartições competentes (JUCESC,
                  Receita Federal e SEFAZ-SC).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200">
                <h3 className="font-bold text-neutral-950 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Avisos de Correspondência via WhatsApp
                </h3>
                <p className="text-xs text-neutral-600 mt-2">
                  Número de telefone com WhatsApp para notificação ágil em tempo real assim que
                  cartas, notificações ou encomendas chegam à nossa recepção.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200">
                <h3 className="font-bold text-neutral-950 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Comunicação Direta
                </h3>
                <p className="text-xs text-neutral-600 mt-2">
                  Mensagens trocadas voluntariamente via WhatsApp ou formulário de contato para
                  sanar dúvidas sobre planos, vagas de estacionamento ou reservas.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                3
              </div>
              <h2 className="text-2xl font-bold text-neutral-950">
                O que são Cookies e Como os Utilizamos?
              </h2>
            </div>
            <p>
              Cookies são pequenos arquivos de texto enviados e armazenados no seu navegador ao
              visitar o nosso site. Eles servem para reconhecer suas preferências de navegação,
              garantir a segurança e agilizar o carregamento das páginas.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-neutral-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-950 text-sm">
                    1. Cookies Estritamente Necessários (Sempre Ativos)
                  </span>
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-black text-white">
                    Obrigatórios
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-2">
                  Fundamentais para o funcionamento básico do site, segurança de conexão HTTPS,
                  carregamento correto das fontes e memorização da sua escolha sobre cookies. Não
                  podem ser desativados nos nossos sistemas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-950 text-sm">
                    2. Cookies Analíticos e de Desempenho
                  </span>
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[#6EC1E4]/20 text-[#0369A1]">
                    Otimização
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-2">
                  Permitem mensurar o volume de acessos e a velocidade de resposta do site de forma
                  totalmente anônima e agregada, ajudando-nos a melhorar continuamente a experiência
                  do usuário.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-neutral-950 text-sm">
                    3. Cookies de Funcionalidade e Integração Externa
                  </span>
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[#61CE70]/20 text-[#15803D]">
                    Interatividade
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-2">
                  Utilizados para integrar recursos de mapa (Google Maps na SC-401) e links diretos
                  com a API oficial do WhatsApp para iniciar conversas com um clique.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                4
              </div>
              <h2 className="text-2xl font-bold text-neutral-950">
                Como Você Pode Desativar ou Limpar Cookies no seu Navegador?
              </h2>
            </div>
            <p>
              Você tem total autonomia para bloquear, desativar ou excluir cookies a qualquer momento
              diretamente nas configurações do seu navegador de internet:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
              <li>
                <strong>Google Chrome:</strong> Configurações &gt; Privacidade e Segurança &gt;
                Cookies e outros dados do site.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Opções &gt; Privacidade e Segurança &gt; Cookies e
                dados do site.
              </li>
              <li>
                <strong>Apple Safari:</strong> Preferências &gt; Privacidade &gt; Gerenciar dados do
                site.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Configurações &gt; Permissões de site &gt; Cookies e
                dados armazenados.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                5
              </div>
              <h2 className="text-2xl font-bold text-neutral-950">
                Seus Direitos como Titular de Dados (Art. 18 da LGPD)
              </h2>
            </div>
            <p>
              Em cumprimento ao artigo 18 da LGPD, você pode, a qualquer momento e mediante
              solicitação formal gratuita, requerer:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                "Confirmação da existência de tratamento dos seus dados;",
                "Acesso aos dados pessoais mantidos pelo At Work SC;",
                "Correção de dados incompletos, inexatos ou desatualizados;",
                "Anonimização, bloqueio ou eliminação de dados desnecessários;",
                "Portabilidade dos dados a outro fornecedor de serviços;",
                "Revogação do consentimento a qualquer momento.",
              ].map((right, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-neutral-200 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                6
              </div>
              <h2 className="text-2xl font-bold text-neutral-950">
                Segurança da Informação e Armazenamento
              </h2>
            </div>
            <p>
              Adotamos medidas técnicas e administrativas aptas a proteger seus dados pessoais contra
              acessos não autorizados e situações acidentais ou ilícitas de destruição, perda,
              alteração ou difusão. Não comercializamos nem transferimos suas informações a terceiros
              para fins publicitários.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 p-8 rounded-3xl bg-[#F8FAFC] border border-neutral-200">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#0284C7]" />
              <h2 className="text-xl font-bold text-neutral-950">
                Fale com Nosso Encarregado de Dados
              </h2>
            </div>
            <p className="text-sm text-neutral-600">
              Para exercer seus direitos ou esclarecer qualquer ponto desta Política, entre em
              contato conosco:
            </p>
            <div className="text-sm space-y-1.5 pt-2">
              <div>
                <strong>E-mail oficial:</strong>{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-[#0284C7] underline"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div>
                <strong>WhatsApp Direto:</strong>{" "}
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16A34A] font-semibold underline"
                >
                  {SITE_CONFIG.contact.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-start gap-1.5 pt-1 text-neutral-600">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.complement} — Florianópolis/SC
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Back Button Bottom */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar à Página Principal</span>
          </Link>
          <Link
            href="/termos-de-uso"
            className="text-sm text-[#0284C7] underline hover:text-[#0369A1] font-medium"
          >
            Ver Termos de Uso →
          </Link>
        </div>
      </main>
    </div>
  );
}
