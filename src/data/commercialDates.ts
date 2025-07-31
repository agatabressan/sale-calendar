export interface CommercialDate {
  id: string;
  title: string;
  date: string;
  month: number;
  quarter: number;
  context: string;
  campaigns: string[];
  channels: string[];
  creatives: string[];
  promotions: string[];
  category: 'major' | 'seasonal' | 'niche';
}

export const commercialDates: CommercialDate[] = [
  // Janeiro
  {
    id: 'liquidacao-janeiro',
    title: 'Liquidação de Janeiro',
    date: '01/01 - 31/01',
    month: 1,
    quarter: 1,
    category: 'major',
    context: 'Período pós-festas onde consumidores buscam renovar guarda-roupa e casa com preços baixos. Momento ideal para desovar estoque do ano anterior.',
    campaigns: [
      'Liquidação de até 70% em toda loja',
      'Combo "Renovação": 3 peças por preço especial',
      'Frete grátis para compras acima de R$ 99',
      'Kit "Novo Ano, Novo Eu" com produtos de autocuidado',
      'Promoção "Saldão Relâmpago" por 48h'
    ],
    channels: ['Meta Ads', 'Google Ads', 'Email Marketing', 'WhatsApp Business', 'Stories Instagram'],
    creatives: [
      '"Renove seu guarda-roupa sem pesar no bolso"',
      '"Liquidação Imperdível: Últimas peças com 70% OFF"',
      '"Novo ano, nova você! Aproveite os menores preços"',
      'Vídeos de antes/depois com produtos em promoção'
    ],
    promotions: [
      'Desconto progressivo: 50%, 60%, 70% na 3ª peça',
      'Frete grátis + parcelamento sem juros',
      'Cashback de 15% para próxima compra',
      'Troca facilitada até 60 dias'
    ]
  },
  // Fevereiro
  {
    id: 'carnaval',
    title: 'Carnaval',
    date: '12/02 - 17/02',
    month: 2,
    quarter: 1,
    category: 'seasonal',
    context: 'Época de fantasias, acessórios, roupas coloridas e produtos para festa. Movimento forte em cosméticos, bebidas e decoração.',
    campaigns: [
      'Coleção Carnaval: fantasias e acessórios',
      'Kit festa: decoração + bebidas + snacks',
      'Looks de Carnaval para diferentes perfis',
      'Promoção "Cai no samba" com produtos temáticos',
      'Bundle "Bloco da sua marca" com itens personalizados'
    ],
    channels: ['Instagram Reels', 'TikTok Ads', 'Meta Ads', 'Influenciadores', 'WhatsApp'],
    creatives: [
      '"Seu Carnaval começa aqui! ✨"',
      '"Brilhe no bloco com nossa coleção exclusiva"',
      '"Carnaval 2024: looks que vão bombar na festa"',
      'Vídeos de transformação com maquiagem de Carnaval'
    ],
    promotions: [
      'Compre 2 fantasias e ganhe acessórios grátis',
      '30% OFF em toda linha Carnaval',
      'Frete expresso gratuito para cidades do Rio e Salvador',
      'Kit customização: personalize sua fantasia'
    ]
  },
  // Março
  {
    id: 'dia-da-mulher',
    title: 'Dia Internacional da Mulher',
    date: '08/03',
    month: 3,
    quarter: 1,
    category: 'major',
    context: 'Data comemorativa com forte apelo emocional. Momento ideal para produtos de beleza, autocuidado, moda feminina e experiências.',
    campaigns: [
      'Coleção especial "Força Feminina"',
      'Kit autocuidado e bem-estar',
      'Promoção "Mulheres que inspiram"',
      'Combo presente: 3 produtos escolhidos por ela',
      'Campanha de empoderamento com influenciadoras'
    ],
    channels: ['Meta Ads', 'Pinterest Ads', 'Email Marketing', 'Stories Instagram', 'Google Shopping'],
    creatives: [
      '"Celebre sua força e beleza única"',
      '"Dia da Mulher: você merece ser celebrada todos os dias"',
      '"Autoestima em alta com nossa coleção especial"',
      'Vídeos de depoimentos de clientes empoderadas'
    ],
    promotions: [
      'Compre 1 leve 2 em produtos selecionados',
      'Desconto de 25% + brinde exclusivo',
      'Parcelamento especial em até 6x sem juros',
      'Frete grátis para todo Brasil'
    ]
  },
  // Abril
  {
    id: 'pascoa',
    title: 'Páscoa',
    date: '31/03',
    month: 4,
    quarter: 2,
    category: 'seasonal',
    context: 'Tradição familiar com forte consumo de chocolates, presentes infantis e decoração temática. Oportunidade para bundling e cross-selling.',
    campaigns: [
      'Coleção Páscoa: chocolates artesanais',
      'Kit família: ovos + brincadeiras',
      'Decoração temática para casa',
      'Cestas personalizadas para presente',
      'Promoção "Caça aos ovos" com descontos escondidos'
    ],
    channels: ['Google Ads', 'Meta Ads', 'Email Marketing', 'WhatsApp Business', 'Pinterest'],
    creatives: [
      '"Páscoa doce e especial para toda família"',
      '"Momentos únicos merecem sabores únicos"',
      '"Sua Páscoa mais saborosa está aqui"',
      'Vídeos de famílias celebrando com produtos da marca'
    ],
    promotions: [
      'Na compra de 2 ovos, ganhe 1 brinde',
      'Desconto de 20% em cestas acima de R$ 150',
      'Frete grátis + embalagem especial',
      'Troca garantida até dia 15 de abril'
    ]
  },
  // Maio
  {
    id: 'dia-das-maes',
    title: 'Dia das Mães',
    date: '12/05',
    month: 5,
    quarter: 2,
    category: 'major',
    context: 'Uma das datas mais importantes do e-commerce brasileiro. Alta conversão em presentes, flores, joias, perfumes e experiências.',
    campaigns: [
      'Presente perfeito para cada tipo de mãe',
      'Kit "Mãe Especial" personalizado',
      'Experiências inesquecíveis para mães',
      'Coleção "Amor de Mãe" exclusiva',
      'Guia de presentes por faixa de preço'
    ],
    channels: ['Google Ads', 'Meta Ads', 'Email Marketing', 'YouTube Ads', 'Influenciadores'],
    creatives: [
      '"Para a mulher mais especial da sua vida"',
      '"Dia das Mães: demonstre seu amor com o presente perfeito"',
      '"Sua mãe merece o melhor, e nós temos"',
      'Vídeos emocionais de filhos presenteando mães'
    ],
    promotions: [
      'Desconto de 30% + frete grátis',
      'Parcelamento em até 10x sem juros',
      'Embalagem premium gratuita',
      'Garantia de entrega até 11/05'
    ]
  },
  // Junho
  {
    id: 'dia-dos-namorados',
    title: 'Dia dos Namorados',
    date: '12/06',
    month: 6,
    quarter: 2,
    category: 'major',
    context: 'Data romântica brasileira com alto potencial de vendas em presentes para casais, lingerie, perfumes, joias e experiências.',
    campaigns: [
      'Presentes românticos para casais',
      'Kit "Noite Especial" para dois',
      'Coleção exclusiva "Amor em Detalhes"',
      'Experiências românticas a dois',
      'Combo "Seu amor merece" personalizado'
    ],
    channels: ['Meta Ads', 'Google Ads', 'Pinterest Ads', 'Instagram Shopping', 'Email Marketing'],
    creatives: [
      '"Demonstre seu amor com presentes únicos"',
      '"Dia dos Namorados: momentos especiais merecem presentes especiais"',
      '"Seu amor é único, seu presente também deve ser"',
      'Vídeos de casais usando/recebendo produtos'
    ],
    promotions: [
      'Compre para ele e para ela com 40% OFF',
      'Kit casal: 2 produtos pelo preço de 1',
      'Frete expresso grátis + embalagem romântica',
      'Desconto progressivo: quanto mais comprar, mais economiza'
    ]
  },
  // Julho
  {
    id: 'ferias-julho',
    title: 'Férias de Julho',
    date: '01/07 - 31/07',
    month: 7,
    quarter: 3,
    category: 'seasonal',
    context: 'Período de férias escolares com foco em viagem, roupas de inverno, entretenimento infantil e produtos para atividades familiares.',
    campaigns: [
      'Coleção inverno: roupas quentinhas',
      'Kit viagem: essenciais para férias',
      'Entretenimento em casa para crianças',
      'Produtos para dias frios e aconchegantes',
      'Promoção "Férias em família"'
    ],
    channels: ['Google Ads', 'Meta Ads', 'YouTube Ads', 'Email Marketing', 'WhatsApp'],
    creatives: [
      '"Férias de julho mais quentinhas e divertidas"',
      '"Inverno chegou: aqueça-se com estilo"',
      '"Diversão garantida para toda família"',
      'Vídeos de famílias aproveitando produtos em casa'
    ],
    promotions: [
      'Liquidação de inverno: até 50% OFF',
      'Compre 3 peças de frio e ganhe 1',
      'Frete grátis para todo Brasil',
      'Kit família: descontos especiais para compras em grupo'
    ]
  },
  // Agosto
  {
    id: 'dia-dos-pais',
    title: 'Dia dos Pais',
    date: '11/08',
    month: 8,
    quarter: 3,
    category: 'major',
    context: 'Data importante para presentes masculinos: eletrônicos, ferramentas, roupas, perfumes e experiências voltadas ao público masculino.',
    campaigns: [
      'Presentes para todos os tipos de pai',
      'Coleção "Pai Herói" exclusiva',
      'Kit "Momento Pai e Filho"',
      'Experiências únicas para pais',
      'Guia do presente perfeito por hobby'
    ],
    channels: ['Google Ads', 'Meta Ads', 'YouTube Ads', 'Email Marketing', 'WhatsApp Business'],
    creatives: [
      '"Para o herói da sua vida"',
      '"Dia dos Pais: presentes à altura do seu amor"',
      '"Seu pai merece o melhor presente"',
      'Vídeos de filhos surpreendendo pais'
    ],
    promotions: [
      'Desconto de 35% em produtos masculinos',
      'Parcelamento em até 8x sem juros',
      'Frete grátis + embalagem especial',
      'Garantia estendida para eletrônicos'
    ]
  },
  // Setembro
  {
    id: 'primavera',
    title: 'Chegada da Primavera',
    date: '22/09',
    month: 9,
    quarter: 3,
    category: 'seasonal',
    context: 'Renovação e mudança de estação. Momento ideal para roupas coloridas, decoração, jardinagem e produtos de beleza.',
    campaigns: [
      'Coleção Primavera: cores vibrantes',
      'Kit "Renovação": casa e guarda-roupa',
      'Produtos para jardim e plantas',
      'Linha "Florescer" de beleza',
      'Decoração primaveril para casa'
    ],
    channels: ['Instagram Reels', 'Pinterest Ads', 'Meta Ads', 'Google Shopping', 'Email Marketing'],
    creatives: [
      '"Primavera chegou: renove-se com cores vibrantes"',
      '"Floresça com nossa nova coleção"',
      '"Sua casa mais florida e colorida"',
      'Vídeos de transformação de ambientes'
    ],
    promotions: [
      'Coleção Primavera com 25% OFF',
      'Kit renovação: desconto progressivo',
      'Frete grátis em plantas e vasos',
      'Troca de produtos de inverno por primavera'
    ]
  },
  // Outubro
  {
    id: 'dia-das-criancas',
    title: 'Dia das Crianças',
    date: '12/10',
    month: 10,
    quarter: 4,
    category: 'major',
    context: 'Data dedicada ao público infantil com alta demanda por brinquedos, roupas, doces e experiências para crianças.',
    campaigns: [
      'Brinquedos educativos e divertidos',
      'Roupas infantis temáticas',
      'Kit "Diversão em Casa"',
      'Experiências para crianças',
      'Doces e guloseimas especiais'
    ],
    channels: ['YouTube Kids', 'Meta Ads', 'Google Ads', 'WhatsApp Business', 'Influenciadores infantis'],
    creatives: [
      '"Dia das Crianças: diversão garantida!"',
      '"Presentes que despertam sorrisos"',
      '"Childhood magic begins here"',
      'Vídeos de crianças brincando com produtos'
    ],
    promotions: [
      'Compre 2 brinquedos e ganhe 1',
      'Desconto de 40% em roupas infantis',
      'Frete grátis + embalagem colorida',
      'Parcelamento especial em até 6x'
    ]
  },
  // Novembro
  {
    id: 'black-friday',
    title: 'Black Friday',
    date: '29/11',
    month: 11,
    quarter: 4,
    category: 'major',
    context: 'Maior evento de vendas do ano. Consumidores esperam grandes descontos e fazem compras antecipadas para o Natal.',
    campaigns: [
      'Mega liquidação com até 80% OFF',
      'Ofertas relâmpago por tempo limitado',
      'Black Week: 7 dias de ofertas',
      'Combo Black: produtos em super promoção',
      'Cyber Monday: ofertas digitais exclusivas'
    ],
    channels: ['Todos os canais disponíveis', 'Google Ads', 'Meta Ads', 'Email Marketing', 'Push Notifications'],
    creatives: [
      '"Black Friday: os menores preços do ano"',
      '"Última chance de economizar BIG"',
      '"Black Friday 2024: ofertas históricas"',
      'Vídeos com countdown e ofertas relâmpago'
    ],
    promotions: [
      'Descontos progressivos até 80%',
      'Frete grátis para todo Brasil',
      'Parcelamento em até 12x sem juros',
      'Cashback especial de 20%'
    ]
  },
  // Dezembro
  {
    id: 'natal',
    title: 'Natal',
    date: '25/12',
    month: 12,
    quarter: 4,
    category: 'major',
    context: 'Época de presentes, confraternizações e celebrações. Maior movimento do ano com foco em presentes para toda família.',
    campaigns: [
      'Guia completo de presentes de Natal',
      'Decoração natalina para casa',
      'Kit "Ceia Perfeita"',
      'Presentes de última hora',
      'Amigo secreto: opções para todos os orçamentos'
    ],
    channels: ['Google Ads', 'Meta Ads', 'Email Marketing', 'WhatsApp Business', 'YouTube Ads'],
    creatives: [
      '"Natal 2024: presentes que emocionam"',
      '"Magia do Natal começa aqui"',
      '"Últimos dias para garantir seu presente"',
      'Vídeos de famílias celebrando o Natal'
    ],
    promotions: [
      'Presentes de Natal com 30% OFF',
      'Embalagem natalina gratuita',
      'Entrega garantida até 23/12',
      'Troca facilitada até 15/01'
    ]
  }
];

export const getDatesByQuarter = (quarter: number): CommercialDate[] => {
  return commercialDates.filter(date => date.quarter === quarter);
};

export const getDatesByMonth = (month: number): CommercialDate[] => {
  return commercialDates.filter(date => date.month === month);
};

export const getDatesByCategory = (category: 'major' | 'seasonal' | 'niche'): CommercialDate[] => {
  return commercialDates.filter(date => date.category === category);
};