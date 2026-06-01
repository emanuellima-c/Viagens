// ================================================
// KAYAK • Portfólio de Experiências
// Design consistente com o site principal
// ================================================

const experiences = [
  {
    id: 'paris',
    title: 'Paris Romântica — 6 dias',
    location: 'Paris, França',
    date: 'Fevereiro 2024',
    region: 'europa',
    image: '../assets/paris.jpeg',
    rating: 4.9,
    tag: 'Europa • Romântico',
    shortDesc: 'Um roteiro perfeito para casais que querem viver a cidade mais romântica do mundo com conforto e exclusividade.',
    story: 'Uma das viagens mais elogiadas do nosso portfólio. O casal Camila e Pedro viveu uma experiência cuidadosamente planejada: jantar no Sena com vista para a Torre Eiffel, visita privada após o fechamento da Torre, e um hotel boutique no Marais. O roteiro equilibra os clássicos com momentos íntimos e autênticos.',
    highlights: [
      'Visita privada à Torre Eiffel ao pôr do sol',
      'Passeio de barco exclusivo no Rio Sena',
      'Hotel charmoso no bairro do Marais',
      'Jantar romântico com vista para a Torre'
    ],
    tip: 'Para casais, recomendamos sempre incluir pelo menos um jantar especial e uma atividade privada. Isso faz toda a diferença na memória emocional da viagem.',
    duration: '6 dias',
    clients: 'Casal'
  },
  {
    id: 'jeri',
    title: 'Jericoacoara Selvagem — 8 dias',
    location: 'Jericoacoara, CE',
    date: 'Outubro 2024',
    region: 'brasil',
    image: '../assets/jeri.jpg',
    rating: 4.7,
    tag: 'Brasil • Aventura',
    shortDesc: 'Aventura, dunas, kitesurf e o pôr do sol mais bonito do Brasil em uma experiência de grupo inesquecível.',
    story: 'Grupo de amigos de São Paulo viveu uma das melhores viagens em grupo que já organizamos. O passeio de buggy nas dunas ao entardecer, as aulas de kitesurf, as noites de forró na praia e a estrutura da pousada foram os grandes destaques. Jericoacoara entrega uma mistura perfeita de aventura e relaxamento.',
    highlights: [
      'Pôr do sol nas dunas de Jeri (momento mais fotografado)',
      'Aulas de kitesurf com instrutores locais',
      'Noites de forró na areia',
      'Passeio de buggy até a Lagoa do Paraíso'
    ],
    tip: 'Para grupos de amigos, deixar 1 ou 2 dias mais livres no roteiro costuma ser a melhor decisão. As pessoas querem curtir sem pressa também.',
    duration: '8 dias',
    clients: 'Grupo de amigos'
  },
  {
    id: 'canada',
    title: 'Moraine Lake & Rockies — 12 dias',
    location: 'Alberta, Canadá',
    date: 'Julho 2023',
    region: 'america-norte',
    image: '../assets/canada.jpg',
    rating: 4.9,
    tag: 'Canadá • Natureza',
    shortDesc: 'Uma viagem em família para um dos cenários naturais mais impressionantes do planeta.',
    story: 'A família Mendes viveu uma experiência transformadora nas Montanhas Rochosas. Paisagens absurdas, trilhas bem planejadas, cabanas confortáveis e muito contato com a natureza. O nascer do sol no Moraine Lake ficou marcado para sempre na memória das crianças.',
    highlights: [
      'Nascer do sol no Moraine Lake',
      'Trilha até o Peyto Lake',
      'Observação de animais na estrada',
      'Noites em cabanas com lareira'
    ],
    tip: 'No Canadá, o inverno é rigoroso. Sempre orientamos nossos clientes a levarem roupas técnicas mesmo no verão — as noites são frias.',
    duration: '12 dias',
    clients: 'Família'
  },
  {
    id: 'berlim',
    title: 'Berlim Criativa — 7 dias',
    location: 'Berlim, Alemanha',
    date: 'Maio 2024',
    region: 'europa',
    image: '../assets/berlim.jpeg',
    rating: 4.7,
    tag: 'Europa • Cultura',
    shortDesc: 'Arte de rua, história, vida noturna e a energia criativa mais forte da Europa.',
    story: 'Berlim é uma cidade que entrega cultura em cada esquina. Street art, galerias alternativas, história pesada e uma cena noturna vibrante. Nossos clientes amam a liberdade de explorar bairros como Kreuzberg e Prenzlauer Berg com o suporte de um roteiro inteligente.',
    highlights: [
      'Street art tour pelo Kreuzberg',
      'Noite de techno em clube histórico',
      'Cafés incríveis e vida local',
      'Memorial do Holocausto ao entardecer'
    ],
    tip: 'Berlim recompensa quem anda devagar. Não tente ver tudo. Escolha 2-3 bairros e se aprofunde neles.',
    duration: '7 dias',
    clients: 'Viajante solo'
  },
  {
    id: 'fortaleza',
    title: 'Fortaleza + Canoa Quebrada — 5 dias',
    location: 'Ceará, Brasil',
    date: 'Janeiro 2024',
    region: 'brasil',
    image: '../assets/fortaleza.jpg',
    rating: 4.5,
    tag: 'Brasil • Praia',
    shortDesc: 'Sol, mar, falésias e a hospitalidade nordestina em uma experiência de custo-benefício excelente.',
    story: 'Uma das viagens mais procuradas por famílias e casais que querem sol garantido com boa estrutura. Canoa Quebrada entrega charme de vila de praia com excelente custo-benefício. O passeio de buggy pelas falésias é sempre o ponto alto.',
    highlights: [
      'Buggy pelas falésias de Canoa Quebrada',
      'Camarão na brasa com vista para o mar',
      'Pôr do sol na Praia do Mucuripe',
      'Noite de forró local'
    ],
    tip: 'Para quem busca custo-benefício alto, essa é uma das melhores opções do Nordeste que oferecemos.',
    duration: '5 dias',
    clients: 'Família / Casal'
  },
  {
    id: 'miami',
    title: 'Miami Colorida — 6 dias',
    location: 'Miami, EUA',
    date: 'Março 2025',
    region: 'america-norte',
    image: '../assets/miami.jpeg',
    rating: 4.3,
    tag: 'EUA • Urbano',
    shortDesc: 'Cores, cultura latina, praias e a energia vibrante de uma das cidades mais fotogênicas dos Estados Unidos.',
    story: 'Miami entrega uma experiência urbana diferente. Little Havana, Wynwood, South Beach e uma cena gastronômica incrível. Ideal para quem gosta de cidade, mas quer praia e calor também.',
    highlights: [
      'Café cubano em Little Havana',
      'Street art no Wynwood Walls',
      'Passeio pela Ocean Drive',
      'Noite de salsa ao ar livre'
    ],
    tip: 'Alugar bike ou patinete é a melhor forma de explorar Miami. A cidade foi feita para ser descoberta devagar.',
    duration: '6 dias',
    clients: 'Amigas / Jovens'
  }
];

const galleryPhotos = [
  { src: '../assets/paris.jpeg', caption: 'Paris • Jantar romântico com vista para a Torre Eiffel' },
  { src: '../assets/jeri.jpg', caption: 'Jericoacoara • Pôr do sol nas dunas' },
  { src: '../assets/canada.jpg', caption: 'Canadá • Nascer do sol no Moraine Lake' },
  { src: '../assets/berlim.jpeg', caption: 'Berlim • Street art no Muro de Berlim' },
  { src: '../assets/fortaleza.jpg', caption: 'Canoa Quebrada • Falésias ao entardecer' },
  { src: '../assets/miami.jpeg', caption: 'Miami • Cores de South Beach' }
];

// Renderiza os cards de experiências
function renderExperiences(filter = 'all') {
  const container = document.getElementById('experiences-grid');
  if (!container) return;

  container.innerHTML = '';

  const filtered = filter === 'all' 
    ? experiences 
    : experiences.filter(e => e.region === filter);

  filtered.forEach(exp => {
    const isLiked = isExpLiked(exp.id);

    const card = document.createElement('div');
    card.className = 'exp-card';
    card.innerHTML = `
      <img src="${exp.image}" alt="${exp.title}">
      <div class="exp-card-content">
        <h3>${exp.title}</h3>
        <div class="meta">${exp.location} • ${exp.date}</div>
        <p class="desc">${exp.shortDesc}</p>
        
        <div class="exp-card-footer">
          <span class="exp-tag">${exp.tag}</span>
          <div style="display:flex; align-items:center; gap:10px;">
            <div class="exp-rating">
              <span>★</span> ${exp.rating}
            </div>
            <button class="exp-heart ${isLiked ? 'liked' : ''}" data-id="${exp.id}">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.exp-heart')) {
        openStoryModal(exp.id);
      }
    });

    const heart = card.querySelector('.exp-heart');
    heart.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLike(exp.id, heart);
    });

    container.appendChild(card);
  });
}

// Filtros
function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      renderExperiences(filter);
    });
  });
}

// Função auxiliar para filtrar pela região (usada nos cards de destinos)
function filterByRegion(region) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  
  const targetBtn = document.querySelector(`.filter-btn[data-filter="${region}"]`);
  if (targetBtn) targetBtn.classList.add('active');

  renderExperiences(region);

  // Scroll suave até a seção
  document.getElementById('experiencias').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Sistema de favoritos
function getLikedExps() {
  try {
    return JSON.parse(localStorage.getItem('kayak_liked_exps') || '[]');
  } catch {
    return [];
  }
}

function isExpLiked(id) {
  return getLikedExps().includes(id);
}

function toggleLike(id, heartElement) {
  let liked = getLikedExps();
  
  if (liked.includes(id)) {
    liked = liked.filter(x => x !== id);
    heartElement.classList.remove('liked');
  } else {
    liked.push(id);
    heartElement.classList.add('liked');
  }
  
  localStorage.setItem('kayak_liked_exps', JSON.stringify(liked));
}

// Modal
let currentExp = null;

function openStoryModal(id) {
  const exp = experiences.find(e => e.id === id);
  if (!exp) return;

  currentExp = exp;

  document.getElementById('modal-hero').style.backgroundImage = `url('${exp.image}')`;
  document.getElementById('modal-tag').textContent = exp.tag;
  document.getElementById('modal-date').textContent = `${exp.date} • ${exp.duration} • ${exp.clients}`;
  document.getElementById('modal-title').textContent = exp.title;
  document.getElementById('modal-rating').innerHTML = `★ ${exp.rating} / 5`;
  document.getElementById('modal-story').innerHTML = `<p>${exp.story}</p>`;
  
  const list = document.getElementById('modal-highlights');
  list.innerHTML = exp.highlights.map(h => `<li>${h}</li>`).join('');
  
  document.getElementById('modal-tip').textContent = exp.tip;

  const modal = document.getElementById('story-modal');
  modal.style.display = 'flex';
  modal.classList.add('active');

  document.addEventListener('keydown', handleEscClose, { once: true });
}

function handleEscClose(e) {
  if (e.key === 'Escape') {
    closeStoryModal();
  }
}

function closeStoryModal(event) {
  const modal = document.getElementById('story-modal');
  if (event && event.target !== modal) return;
  
  modal.style.display = 'none';
  modal.classList.remove('active');
}

// Lightbox
function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');

  img.src = src;
  cap.textContent = caption || '';
  lightbox.style.display = 'flex';
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
  lightbox.classList.remove('active');
}

// Render Galeria
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  container.innerHTML = '';

  galleryPhotos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${photo.src}" alt="${photo.caption}">`;
    
    item.addEventListener('click', () => openLightbox(photo.src, photo.caption));
    container.appendChild(item);
  });
}

// Menu mobile
function setupMobileMenu() {
  const toggle = document.querySelector('.kayak-nav-toggle');
  const links = document.querySelector('.kayak-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('active');
      const icon = toggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    });
  });
}

// Formulário
function handleKayakForm(e) {
  e.preventDefault();
  const form = e.target;
  const feedback = document.getElementById('kayak-feedback');

  feedback.textContent = "Enviando sua mensagem para nossa equipe...";
  feedback.style.color = "#f56c11";

  setTimeout(() => {
    feedback.textContent = "Recebemos sua solicitação! Nossa equipe entrará em contato em até 24h.";
    feedback.style.color = "#22c55e";
    form.reset();

    setTimeout(() => {
      feedback.textContent = "";
    }, 4500);
  }, 950);
}

// Inicialização
function init() {
  renderExperiences();
  setupFilters();
  renderGallery();
  setupMobileMenu();

  // ESC para fechar modais
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightbox = document.getElementById('lightbox');
      const modal = document.getElementById('story-modal');
      
      if (lightbox.classList.contains('active')) closeLightbox();
      else if (modal.classList.contains('active')) closeStoryModal();
    }
  });

  console.log('%c[KAYAK Portfólio] Experiências carregadas com sucesso', 'color:#f56c11');
}

init();