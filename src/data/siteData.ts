export interface PlanItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  badge?: string;
  highlight?: boolean;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
  category: "fiscal" | "coworking";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  coverImage: string;
  content: string[];
  keyTakeaways: string[];
}

export const SITE_CONFIG = {
  name: "At Work SC",
  legalName: "At Work SC Coworking & Endereço Fiscal",
  tagline: "O Seu Endereço Estratégico e Espaço de Trabalho na Rota da Inovação de Florianópolis",
  description:
    "Endereço Fiscal a partir de R$ 54,90/mês (com opção de Inscrição Estadual a R$ 94,90/mês), Escritórios Privativos de 15 a 70m², Coworking 24h e Salas de Reunião na Rodovia SC-401, Florianópolis.",
  url: "https://atworksc.com.br",
  founders: ["Elisa Barbato", "Luiz Barbato"],
  contact: {
    whatsappNumber: "5548984157836",
    whatsappDisplay: "(48) 98415-7836",
    email: "atwork.sc@gmail.com",
    instagram: "https://www.instagram.com/atworksc/",
    instagramHandle: "@atworksc",
  },
  address: {
    street: "Rodovia José Carlos Daux (SC-401), 4190",
    complement: "Bloco B – Saco Grande (Complexo High Tech / Próximo ao Passeio Primavera e ACATE)",
    neighborhood: "Saco Grande",
    city: "Florianópolis",
    state: "SC",
    zipCode: "88032-005",
    country: "BR",
    coordinates: {
      lat: -27.5418,
      lng: -48.5014,
    },
    googleMapsEmbed:
      "https://www.google.com/maps?q=Rod.+Jos%C3%A9+Carlos+Daux,+4190+-+Saco+Grande,+Florian%C3%B3polis+-+SC&output=embed",
  },
  calendar: {
    // Pode ser conectado diretamente ao link público do Google Calendar Appointment Schedule ou Cal.com sincronizado com atwork.sc@gmail.com
    bookingEmail: "atwork.sc@gmail.com",
    calComUrl: "https://cal.com",
  },
};

export const FISCAL_PLANS: PlanItem[] = [
  {
    id: "fiscal-1",
    name: "Plano 1",
    subtitle: "Endereço Fiscal para registro de CNPJ e correspondências",
    price: "R$ 54,90",
    period: "/mês",
    badge: "Mais Procurado",
    highlight: false,
    category: "fiscal",
    features: [
      "Endereço Fiscal para registro de CNPJ na Rodovia SC-401",
      "Recebimento de correspondência com aviso de entrega por WhatsApp",
      "Documentação rápida para Junta Comercial e Prefeitura",
      "Zero custos com condomínio, IPTU ou manutenção predial",
    ],
    ctaText: "Contratar",
    whatsappMessage:
      "Olá! Vim pelo site da At Work SC e quero contratar o Plano 1 de Endereço Fiscal (R$ 54,90/mês).",
  },
  {
    id: "fiscal-2",
    name: "Plano 2",
    subtitle: "Endereço Fiscal com Inscrição Estadual (Comércio & E-commerce)",
    price: "R$ 94,90",
    period: "/mês",
    badge: "Com Inscrição Estadual",
    highlight: true,
    category: "fiscal",
    features: [
      "Endereço Fiscal completo na Rodovia SC-401",
      "Endereço Fiscal com Inscrição Estadual (ICMS / SEF-SC)",
      "Recebimento de correspondência com aviso de entrega por WhatsApp",
      "Documentação pronta para emissão de notas fiscais de venda",
    ],
    ctaText: "Contratar",
    whatsappMessage:
      "Olá! Vim pelo site da At Work SC e quero contratar o Plano 2 de Endereço Fiscal com Inscrição Estadual (R$ 94,90/mês).",
  },
];

export const COWORKING_PLANS: PlanItem[] = [
  {
    id: "cowork-day",
    name: "Day Use · Posição Individual",
    subtitle: "Pague apenas pelo dia que usar, com estrutura completa na SC-401",
    price: "R$ 30,00",
    period: "/dia",
    badge: "Passe Diário Flexível",
    highlight: false,
    category: "coworking",
    features: [
      "Estação de trabalho em mesa compartilhada ergonômica",
      "Internet fibra óptica de altíssima velocidade e redundância",
      "Acesso à cozinha completa (geladeira, 2 micro-ondas, café e copa)",
      "Uso da Sala de Reunião (conforme disponibilidade)",
      "Desconto exclusivo no estacionamento 24/7 do condomínio",
    ],
    ctaText: "Reservar Diária",
    whatsappMessage:
      "Olá! Gostaria de reservar uma Diária (Day Use) de Coworking na At Work SC.",
  },
  {
    id: "cowork-monthly",
    name: "Mensalista · Estação Compartilhada 24/7",
    subtitle: "Sua rotina produtiva com acesso 24 horas todos os dias da semana",
    price: "R$ 450,00",
    period: "/mês",
    badge: "Acesso Livre 24h / 7 dias",
    highlight: true,
    category: "coworking",
    features: [
      "Acesso 24 horas por dia, 7 dias por semana (inclusive feriados)",
      "Mesa compartilhada em ambiente climatizado e silencioso",
      "Uso de Sala de Reunião climatizada com TV de 55 polegadas",
      "Cozinha completa liberada e networking no polo tecnológico",
      "Desconto para mensalistas no estacionamento monitorado 24h",
    ],
    ctaText: "Ser Mensalista 24/7",
    whatsappMessage:
      "Olá! Tenho interesse no plano Mensalista de Posição Individual (R$ 450/mês com acesso 24h) na At Work SC.",
  },
  {
    id: "cowork-private",
    name: "Salas Privativas · 15m² a 70m²",
    subtitle: "Escritórios exclusivos e mobiliados para equipes de todos os portes",
    price: "Sob Consulta",
    period: "personalizado",
    badge: "Para Times & Empresas",
    highlight: true,
    category: "coworking",
    features: [
      "Salas privativas mobiliadas de 15m² até 70m² prontas para operar",
      "Permite revezamento inteligente entre membros da sua equipe",
      "Link de Internet Dedicada exclusiva e acesso 24/7 com segurança",
      "Sala de reunião executiva, copa completa e endereço fiscal incluso",
      "Contrato sem fiador e zero obras ou custos de condomínio/IPTU",
    ],
    ctaText: "Consultar Disponibilidade de Salas",
    whatsappMessage:
      "Olá! Gostaria de consultar valores e disponibilidade das Salas Privativas (15m² a 70m²) na At Work SC.",
  },
  {
    id: "cowork-meeting",
    name: "Sala de Reunião Executiva",
    subtitle: "Receba clientes, investidores e faça apresentações de alto impacto",
    price: "Sob Consulta",
    period: "por hora ou turno",
    badge: "Até 8 Pessoas",
    highlight: false,
    category: "coworking",
    features: [
      "Acomoda confortavelmente de 7 a 8 pessoas em ambiente climatizado",
      "Equipada com Monitor/TV 4K de 55 polegadas para apresentações",
      "Internet fibra de alta performance para videoconferências sem travar",
      "Acesso à cozinha/copa compartilhada para recepção de convidados",
      "Estacionamento amplo no local (aberto ou coberto) com segurança 24h",
    ],
    ctaText: "Reservar Sala de Reunião",
    whatsappMessage:
      "Olá! Quero verificar disponibilidade e valores para reservar a Sala de Reunião Executiva na At Work SC.",
  },
];

export const SPACE_GALLERY = [
  {
    id: "ai-lounge",
    title: "Hub Executivo na Rota da Inovação (SC-401)",
    category: "Visão Conceitual & Atmosfera",
    image: "/images/ai/hero-coworking-sc401.jpg",
    description: "Ambiente projetado para máxima produtividade ao lado do Passeio Primavera.",
    isReal: false,
  },
  {
    id: "real-reuniao",
    title: "Sala de Reunião Climatizada (TV 55\")",
    category: "Foto Real do Espaço",
    image: "/images/original/sala-reuniao.jpeg",
    description: "Capacidade para até 8 pessoas com monitor de 55 polegadas e mesa executiva.",
    isReal: true,
  },
  {
    id: "real-espaco-1",
    title: "Estações de Trabalho & Escritórios",
    category: "Foto Real do Espaço",
    image: "/images/original/espaco-01.jpg",
    description: "Mobiliário moderno, iluminação planejada e cadeiras ergonômicas.",
    isReal: true,
  },
  {
    id: "ai-private",
    title: "Salas Privativas para Times (15m² a 70m²)",
    category: "Configuração p/ Equipes",
    image: "/images/ai/private-office-tech.jpg",
    description: "Espaços sob medida com possibilidade de revezamento híbrido da equipe.",
    isReal: false,
  },
  {
    id: "real-cozinha",
    title: "Copa & Cozinha Completa",
    category: "Foto Real do Espaço",
    image: "/images/original/cozinha-01.jpg",
    description: "Equipada com geladeira, dois micro-ondas, sanduicheira, cafeteira, louças e talheres.",
    isReal: true,
  },
  {
    id: "real-cowork-2",
    title: "Ambiente Colaborativo & Silencioso",
    category: "Foto Real do Espaço",
    image: "/images/original/coworking-mesa.jpeg",
    description: "Perfeito para foco individual ou integração com outros profissionais de tecnologia e negócios.",
    isReal: true,
  },
  {
    id: "real-espaco-3",
    title: "Infraestrutura Pronta para Crescer",
    category: "Foto Real do Espaço",
    image: "/images/original/espaco-03.jpg",
    description: "Salas climatizadas com internet dedicada e acesso 24 horas para mensalistas.",
    isReal: true,
  },
  {
    id: "real-cozinha-2",
    title: "Área de Descompressão & Café",
    category: "Foto Real do Espaço",
    image: "/images/original/cozinha-02.jpg",
    description: "Espaço acolhedor para pausas estratégicas e networking diário.",
    isReal: true,
  },
];

export const BENEFITS = [
  {
    title: "Acesso 24h p/ Mensalistas",
    description:
      "Trabalhe no seu próprio ritmo. Mensalistas têm acesso liberado 24 horas por dia, 7 dias por semana, com total autonomia.",
    icon: "Clock",
  },
  {
    title: "Localização de Prestígio (SC-401)",
    description:
      "Posicione sua empresa no Centro Tecnológico de Florianópolis, próximo ao Passeio Primavera e ACATE.",
    icon: "MapPin",
  },
  {
    title: "Contrato Simples Sem Fiador",
    description:
      "Zero burocracia imobiliária. Aprovação ágil com pagamento no início da locação para você focar no seu negócio.",
    icon: "FileCheck",
  },
  {
    title: "Aviso de Correspondência no WhatsApp",
    description:
      "Assim que qualquer carta, documento fiscal ou encomenda chegar, nossa equipe notifica você em tempo real pelo WhatsApp.",
    icon: "MessageSquareCheck",
  },
  {
    title: "Segurança Monitorada 24h",
    description:
      "Condomínio empresarial monitorado por câmeras de alta definição e equipe de segurança presencial 24 horas.",
    icon: "ShieldCheck",
  },
  {
    title: "Estacionamento & Praça Gastronômica",
    description:
      "Estacionamento aberto ou coberto 24/7 com desconto para clientes e praça de alimentação no próprio condomínio.",
    icon: "Car",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Qual a diferença entre Endereço Fiscal (Plano 1) e Endereço Fiscal com Inscrição Estadual (Plano 2)?",
    answer:
      "O Endereço Fiscal (Plano 1 - R$ 54,90/mês) fornece toda a documentação legal e alvarás do imóvel na SC-401 para abrir ou transferir seu CNPJ na Junta Comercial e Prefeitura de Florianópolis, perfeito para empresas de serviços, consultores, tecnologia e profissionais liberais. Já o Plano 2 (R$ 94,90/mês) inclui também a habilitação para Inscrição Estadual (ICMS / SEF-SC), exigida pela Secretaria da Fazenda para empresas de comércio físico ou e-commerce que emitem notas fiscais de venda de produtos.",
  },
  {
    question: "Como funciona o contrato? Precisa de fiador ou caução?",
    answer:
      "Nosso contrato é 100% desburocratizado e sem fiador! O pagamento é feito de forma simples no início da locação e a documentação para contabilidade é liberada rapidamente após a assinatura digital.",
  },
  {
    question: "O que é coworking e por que vale mais a pena do que alugar uma sala tradicional?",
    answer:
      "Coworking é um modelo inteligente onde profissionais e empresas utilizam uma estrutura corporativa pronta, economizando até 75% em comparação ao aluguel tradicional. Na At Work SC, você não paga IPTU, condomínio, instalação de internet dedicada, limpeza, segurança 24h ou compra de mobiliário — tudo já está pronto para uso.",
  },
  {
    question: "Existe restaurante ou praça de alimentação próximo ao At Work SC?",
    answer:
      "Sim! No próprio condomínio empresarial (Rod. SC-401, 4190) existe praça de alimentação com ótimas opções para almoço e café, além de estarmos ao lado do Passeio Primavera, um dos principais polos gastronômicos e empresariais de Florianópolis.",
  },
  {
    question: "Como funciona o estacionamento para clientes e visitantes?",
    answer:
      "O complexo conta com estacionamento amplo (opções abertas e cobertas), seguro e monitorado 24/7, operando na modalidade diária, horista ou mensal. Clientes dos nossos planos de coworking e salas privativas contam com descontos exclusivos no estacionamento High Tech.",
  },
  {
    question: "Minha equipe trabalha em modelo híbrido. Podemos revezar o uso da Sala Privativa?",
    answer:
      "Com certeza! Nossas salas privativas mobiliadas (de 15m² a 70m²) são perfeitas para times de todos os portes e permitem o revezamento flexível entre os membros da sua equipe, com acesso 24 horas para mensalistas.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "endereco-fiscal-inscricao-estadual-florianopolis-sc401",
    title: "Endereço Fiscal em Florianópolis com Inscrição Estadual: Guia Definitivo (2026)",
    excerpt:
      "Descubra como registrar seu CNPJ de Serviços ou Comércio na Rodovia SC-401 pagando a partir de R$ 54,90/mês, 100% aprovado pela Junta Comercial e SEFAZ/SC.",
    category: "Legalização & CNPJ",
    readTime: "4 min de leitura",
    date: "21 Out 2026",
    author: "Equipe At Work SC",
    coverImage: "/images/ai/hero-coworking-sc401.jpg",
    keyTakeaways: [
      "Florianópolis oferece incentivos e ecossistema tecnológico de ponta na SC-401.",
      "Prestadores de serviço podem ativar o CNPJ a partir de R$ 54,90/mês sem alugar sala física.",
      "Empresas de comércio e e-commerce contam com plano específico com Inscrição Estadual por R$ 94,90/mês.",
    ],
    content: [
      "Abrir uma empresa em Florianópolis — hoje reconhecida como a Capital Nacional das Startups — é o desejo de milhares de empreendedores de tecnologia, consultoria e comércio digital. Porém, alugar uma sala comercial tradicional envolve custos elevados de aluguel, condomínio, IPTU, fiador e reformas.",
      "É exatamente para resolver esse gargalo que o Endereço Fiscal na At Work SC foi estruturado. Localizado no número 4190 da Rodovia José Carlos Daux (SC-401), no coração do bairro Saco Grande e ao lado do Passeio Primavera, nosso espaço fornece o endereço oficial e toda a documentação exigida pela Prefeitura de Florianópolis, JUCESC e Receita Federal.",
      "Para prestadores de serviços (desenvolvedores, médicos, arquitetos, agências, consultores e holdings), o Plano de R$ 54,90/mês garante o registro completo do CNPJ com aviso imediato no WhatsApp sempre que uma correspondência chegar.",
      "Já para negócios que comercializam produtos e necessitam de Inscrição Estadual ativa na SEFAZ-SC, o Plano de R$ 94,90/mês entrega toda a conformidade tributária, além de incluir horas de sala de reunião, desconto no estacionamento e uma diária mensal no coworking.",
    ],
  },
  {
    slug: "por-que-posicionar-empresa-rodovia-sc-401-florianopolis",
    title: "Por que posicionar sua empresa na SC-401 (Rota da Inovação de Florianópolis)?",
    excerpt:
      "Entenda o impacto de ter sua sede empresarial no metro quadrado mais tecnológico e valorizado de Santa Catarina, ao lado da ACATE e do Passeio Primavera.",
    category: "Ecossistema & Negócios",
    readTime: "3 min de leitura",
    date: "18 Out 2026",
    author: "Elisa & Luiz Barbato",
    coverImage: "/images/original/espaco-01.jpg",
    keyTakeaways: [
      "A Rodovia SC-401 concentra a maior densidade de empresas de tecnologia e inovação de SC.",
      "Estar no Saco Grande facilita o acesso tanto ao Centro quanto ao Norte da Ilha.",
      "Receber clientes em uma sala de reunião equipada na SC-401 eleva instantaneamente a percepção de valor da sua marca.",
    ],
    content: [
      "A localização da sua empresa comunica o nível de maturidade do seu negócio antes mesmo da primeira reunião começar. Em Florianópolis, a Rodovia José Carlos Daux (SC-401) consolidou-se como a famosa Rota da Inovação.",
      "Estar sediado no Bloco B do número 4190 da SC-401 coloca a sua empresa a poucos metros do Passeio Primavera e do CIA Primavera (ACATE), onde decisões estratégicas, rodadas de investimento e parcerias B2B acontecem diariamente.",
      "Além do prestígio institucional no cartão de visitas e no contrato social, a At Work SC oferece estacionamento 24/7 no próprio condomínio, praça de alimentação interna e salas de reunião com TV de 55 polegadas para que cada encontro presencial com seus clientes seja impecável.",
    ],
  },
  {
    slug: "sala-comercial-tradicional-vs-sala-privativa-coworking-comparativo",
    title: "Aluguel Comercial vs. Sala Privativa em Coworking: Quanto sua empresa economiza?",
    excerpt:
      "Colocamos na ponta do lápis todos os custos ocultos de um aluguel convencional em Florianópolis versus uma Sala Privativa mobiliada de 15m² a 70m².",
    category: "Gestão Financeira",
    readTime: "5 min de leitura",
    date: "12 Out 2026",
    author: "Equipe At Work SC",
    coverImage: "/images/ai/private-office-tech.jpg",
    keyTakeaways: [
      "Um escritório tradicional exige de R$ 15.000 a R$ 40.000 apenas em setup inicial (móveis, ar-condicionado, caução e reforma).",
      "Nas salas privativas da At Work SC (15 a 70m²), o contrato não exige fiador e a internet dedicada já está pronta.",
      "Equipes híbridas podem revezar as estações de trabalho com acesso 24 horas por dia.",
    ],
    content: [
      "Ao procurar uma sala comercial para equipes de 3 a 20 pessoas em Florianópolis, muitos gestores olham apenas para o valor nominal do aluguel. No entanto, a conta real inclui: condomínio comercial, IPTU, energia elétrica, dois links de internet empresarial, limpeza, insumos de copa, monitoramento de segurança e manutenção.",
      "Na At Work SC, nossas Salas Privativas de 15m² a 70m² eliminam 100% dessas despesas variáveis e dores de cabeça operacionais. Sua empresa recebe a sala mobiliada, climatizada, com internet dedicada de alta velocidade e acesso 24/7.",
      "Além disso, você ganha acesso imediato à sala de reunião executiva e à cozinha completa, com um contrato simples, sem fiador e com flexibilidade para crescer conforme o seu time expande.",
    ],
  },
];
