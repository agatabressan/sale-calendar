export interface CommercialDate {
  id: string;
  title: string;
  date: string;
  day: number;
  month: number;
  category: 'major' | 'seasonal' | 'niche' | 'international';
  context: string;
  campaigns: string[];
  channels: string[];
  creatives: string[];
  promotions: string[];
  preparation: string;
  physicalProducts: string[];
  digitalProducts: string[];
}

export const commercialDates: CommercialDate[] = [
  {
    id: '1',
    title: 'Ano Novo',
    date: '1º de Janeiro',
    day: 1,
    month: 1,
    category: 'major',
    context: 'Período de renovação e novos objetivos. Ideal para vendas de produtos relacionados à mudança de hábitos, organização e bem-estar.',
    campaigns: [
      'Resolução de Ano Novo - produtos para organização',
      'Detox digital - cursos e aplicativos',
      'Vida saudável - suplementos e equipamentos fitness',
      'Renovação do guarda-roupa - moda e acessórios',
      'Planos e metas 2025 - planejadores e agendas'
    ],
    channels: ['Meta Ads', 'Google Ads', 'E-mail Marketing', 'WhatsApp Business', 'Influencers'],
    creatives: [
      '"2025 chegou! Hora de conquistar seus objetivos"',
      '"Novo ano, nova versão de você"',
      '"Comece 2025 do jeito certo"',
      '"Transforme suas metas em realidade"'
    ],
    promotions: [
      'Desconto progressivo: quanto mais comprar, maior o desconto',
      'Kit completo para começar bem o ano',
      'Primeira compra de 2025 com frete grátis',
      'Parcelamento em até 12x sem juros'
    ],
    preparation: '15-20 dias antes',
    physicalProducts: ['Organizadores', 'Agendas', 'Produtos fitness', 'Suplementos', 'Roupas esportivas'],
    digitalProducts: ['Cursos online', 'E-books de produtividade', 'Apps de organização', 'Planejadores digitais']
  },
  {
    id: '2',
    title: 'Carnaval',
    date: '28 de Fevereiro',
    day: 28,
    month: 2,
    category: 'major',
    context: 'Maior festa popular do Brasil. Excelente para vendas de fantasias, acessórios, produtos de beleza e itens para festa.',
    campaigns: [
      'Fantasias criativas e originais',
      'Maquiagem e produtos de beleza para festa',
      'Acessórios carnavalescos',
      'Decoração para festas caseiras',
      'Produtos para pós-carnaval (detox, cuidados)'
    ],
    channels: ['Meta Ads', 'Instagram', 'TikTok', 'WhatsApp Business', 'Google Ads'],
    creatives: [
      '"Brilhe no carnaval com nossos produtos"',
      '"Sua fantasia dos sonhos está aqui"',
      '"Carnaval 2025: seja a atração da festa"',
      '"Do makeup às fantasias, temos tudo"'
    ],
    promotions: [
      'Combo fantasia + acessórios com desconto',
      'Frete expresso para última hora',
      'Desconto progressivo: compre mais, pague menos',
      '2ª via da fantasia por metade do preço'
    ],
    preparation: '30-45 dias antes',
    physicalProducts: ['Fantasias', 'Maquiagem', 'Acessórios', 'Purpurina', 'Decoração'],
    digitalProducts: ['Tutoriais de maquiagem', 'Playlists de carnaval', 'Filtros para redes sociais']
  },
  {
    id: '3',
    title: 'Dia das Mães',
    date: '11 de Maio',
    day: 11,
    month: 5,
    category: 'major',
    context: 'Terceira maior data comercial do Brasil. Foco em presentes especiais, experiências e produtos para o lar.',
    campaigns: [
      'Presentes únicos para mães',
      'Experiências relaxantes (spa, massagem)',
      'Produtos para casa e decoração',
      'Joias e acessórios especiais',
      'Tecnologia que facilita a vida'
    ],
    channels: ['Meta Ads', 'Google Ads', 'E-mail Marketing', 'WhatsApp Business', 'TV'],
    creatives: [
      '"Para a mulher mais especial da sua vida"',
      '"Mãe: amor incondicional merece presente especial"',
      '"Demonstre sua gratidão com carinho"',
      '"Toda mãe merece ser rainha"'
    ],
    promotions: [
      'Kit especial dia das mães',
      'Embalagem premium de presente grátis',
      'Parcelamento sem juros especial',
      'Entrega garantida no domingo'
    ],
    preparation: '20-30 dias antes',
    physicalProducts: ['Joias', 'Perfumes', 'Produtos para casa', 'Eletrônicos', 'Flores'],
    digitalProducts: ['Vouchers de spa', 'Cursos online', 'Assinaturas de streaming', 'Apps de bem-estar']
  },
  {
    id: '4',
    title: 'Dia dos Namorados',
    date: '12 de Junho',
    day: 12,
    month: 6,
    category: 'major',
    context: 'Segunda maior data comercial do Brasil. Foco em presentes românticos, experiências e produtos para casais.',
    campaigns: [
      'Presentes românticos únicos',
      'Experiências para casais',
      'Kits românticos personalizados',
      'Jantares e escapadas românticas',
      'Joias e acessórios especiais'
    ],
    channels: ['Meta Ads', 'Google Ads', 'E-mail Marketing', 'Pinterest', 'WhatsApp Business'],
    creatives: [
      '"Demonstre seu amor de forma especial"',
      '"O presente perfeito para quem você ama"',
      '"Namorados 2025: criando momentos únicos"',
      '"Amor em cada detalhe do presente"'
    ],
    promotions: [
      'Kit romântico com desconto especial',
      'Compre um ganhe outro para casais',
      'Parcelamento sem juros em presentes',
      'Embalagem premium grátis'
    ],
    preparation: '20-30 dias antes',
    physicalProducts: ['Joias', 'Perfumes', 'Chocolates', 'Flores', 'Presentes personalizados'],
    digitalProducts: ['Cursos para casais', 'Playlists românticas', 'Vouchers de experiência']
  },
  {
    id: '5',
    title: 'Dia dos Pais',
    date: '10 de Agosto',
    day: 10,
    month: 8,
    category: 'major',
    context: 'Quarta maior data comercial do Brasil. Foco em presentes masculinos, tecnologia e experiências.',
    campaigns: [
      'Presentes tecnológicos para pais',
      'Roupas e acessórios masculinos',
      'Experiências para pais (churrasco, esportes)',
      'Ferramentas e equipamentos',
      'Produtos para carros'
    ],
    channels: ['Meta Ads', 'Google Ads', 'YouTube Ads', 'E-mail Marketing', 'WhatsApp Business'],
    creatives: [
      '"Para o homem mais importante da sua vida"',
      '"Pai: exemplo de força e dedicação"',
      '"Presente especial para quem é especial"',
      '"Mostre sua gratidão ao seu herói"'
    ],
    promotions: [
      'Kit dia dos pais com desconto',
      'Parcelamento especial sem juros',
      'Embalagem de presente grátis',
      'Entrega garantida no domingo'
    ],
    preparation: '20-25 dias antes',
    physicalProducts: ['Eletrônicos', 'Roupas masculinas', 'Ferramentas', 'Acessórios para carro', 'Produtos esportivos'],
    digitalProducts: ['Cursos online', 'Assinaturas de streaming', 'Apps esportivos', 'E-books']
  },
  {
    id: '6',
    title: 'Dia das Crianças',
    date: '12 de Outubro',
    day: 12,
    month: 10,
    category: 'major',
    context: 'Data dedicada às crianças. Foco em brinquedos, roupas infantis e produtos educativos.',
    campaigns: [
      'Brinquedos e jogos infantis',
      'Roupas e calçados para crianças',
      'Produtos educativos e pedagógicos',
      'Livros e material didático infantil',
      'Eletrônicos e gadgets para crianças'
    ],
    channels: ['Meta Ads', 'YouTube Ads', 'Google Ads', 'WhatsApp Business', 'TV'],
    creatives: [
      '"Toda criança merece sorrir"',
      '"Presentes que fazem a diferença"',
      '"Alegria e diversão garantidas"',
      '"Para os pequenos grandes sonhadores"'
    ],
    promotions: [
      'Kit dia das crianças completo',
      'Compre 1 brinquedo leve 2',
      'Parcelamento sem juros',
      'Embalagem de presente grátis'
    ],
    preparation: '20-30 dias antes',
    physicalProducts: ['Brinquedos', 'Roupas infantis', 'Livros infantis', 'Eletrônicos', 'Material escolar'],
    digitalProducts: ['Jogos educativos', 'Apps infantis', 'Conteúdo educativo', 'Filmes infantis']
  },
  {
    id: '7',
    title: 'Black Friday',
    date: '28 de Novembro',
    day: 28,
    month: 11,
    category: 'major',
    context: 'Maior data do e-commerce brasileiro. Descontos massivos e oportunidade de liquidar estoque.',
    campaigns: [
      'Descontos de até 70% em categorias estratégicas',
      'Flash sales por tempo limitado',
      'Kits promocionais exclusivos',
      'Antecipação para clientes VIP',
      'Queima de estoque geral'
    ],
    channels: ['Todos os canais digitais', 'TV', 'Rádio', 'Marketplace', 'Comparadores'],
    creatives: [
      '"Black Friday 2025: economize como nunca"',
      '"Descontos históricos por tempo limitado"',
      '"A oportunidade do ano chegou"',
      '"Não perca: ofertas imperdíveis"'
    ],
    promotions: [
      'Até 70% de desconto',
      'Frete grátis para todo Brasil',
      'Parcelamento em até 24x',
      'Cashback em compras acima de R$ 500'
    ],
    preparation: '45-60 dias antes',
    physicalProducts: ['Eletrônicos', 'Moda', 'Casa e decoração', 'Esportes', 'Beleza'],
    digitalProducts: ['Cursos online', 'Software', 'Assinaturas', 'E-books', 'Apps premium']
  },
  {
    id: '8',
    title: 'Natal',
    date: '25 de Dezembro',
    day: 25,
    month: 12,
    category: 'major',
    context: 'Principal data comercial do varejo. Foco em presentes, ceia e decoração natalina.',
    campaigns: [
      'Presentes para toda família',
      'Decoração natalina completa',
      'Produtos para ceia de natal',
      'Roupas para festividades',
      'Experiências e viagens de natal'
    ],
    channels: ['Todos os canais', 'TV', 'Rádio', 'Outdoor', 'Marketplace'],
    creatives: [
      '"Natal 2025: momentos mágicos em família"',
      '"O presente perfeito está aqui"',
      '"Magia do natal em cada produto"',
      '"Celebre o amor e a união"'
    ],
    promotions: [
      'Kit presente família completo',
      'Embalagem de natal grátis',
      'Parcelamento especial sem juros',
      'Entrega garantida até 24/12'
    ],
    preparation: '60-90 dias antes',
    physicalProducts: ['Presentes diversos', 'Decoração natalina', 'Alimentos', 'Roupas festivas', 'Eletrônicos'],
    digitalProducts: ['Vouchers de experiência', 'Cursos online', 'Entretenimento digital', 'Apps premium']
  }
];

export const getDatesByMonth = (month: number): CommercialDate[] => {
  return commercialDates.filter(date => date.month === month);
};

export const getDatesByQuarter = (quarter: number): CommercialDate[] => {
  const quarterMonths = {
    1: [1, 2, 3],
    2: [4, 5, 6], 
    3: [7, 8, 9],
    4: [10, 11, 12]
  };
  
  const months = quarterMonths[quarter as keyof typeof quarterMonths] || [];
  return commercialDates.filter(date => months.includes(date.month));
};