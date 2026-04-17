// Data loaded from JSON
let atletas = [];

const eventos = [
  "Treino especial todo sábado às 08h00",
  "Sparring aberto apenas para alunos toda sexta às 10h00",
];

const depoimentosPadrao = [
  { nome: "João Silva", comentario: "A Matilha Thai mudou minha vida. Ganhei disciplina e força que jamais imaginei." },
  { nome: "Maria Oliveira", comentario: "Treino aqui há 2 anos e me sinto parte de uma família. Recomendo a todos!" },
  { nome: "Ana Costa", comentario: "O FitClub é incrível! Perdi peso e ganhei confiança em poucos meses." }
];

// Render Functions
function renderCard(person, container) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${person.foto}" alt="${person.nome}" onclick="abrirModal('${person.foto}')">
    <h3>${person.nome}</h3>
    <p>Lutas: ${person.lutas}</p>
    <p>Vitórias: ${person.vitorias}</p>
    <p>Derrotas: ${person.derrotas}</p>
    <p class="bio">${person.bio}</p>
  `;
  container.appendChild(card);
}

function renderProfessores() {
  const professoresGrid = document.getElementById('professores-grid');
  atletas.filter(a => a.type === 'professor').forEach(p => renderCard(p, professoresGrid));
}

function renderCampeoes() {
  const campeoesGrid = document.getElementById('campeoes-grid');
  atletas.filter(a => a.type === 'campeao').forEach(c => renderCard(c, campeoesGrid));
}

function renderEventos() {
  const eventosUl = document.getElementById('eventos-list');
  eventos.forEach(e => {
    const li = document.createElement('li');
    li.textContent = e;
    eventosUl.appendChild(li);
  });
}

// Modal Functions
function abrirModal(src) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('modalImg');
  img.src = src;
  modal.style.display = 'flex';
  // Adicionar evento de clique no overlay para fechar
  modal.onclick = function(event) {
    if (event.target === modal) {
      fecharModal();
    }
  };
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
  // Limpar specs e nav se existir
  const specs = document.getElementById('modalSpecs');
  if (specs) specs.innerHTML = '';
  const nav = document.getElementById('modalNav');
  if (nav) nav.style.display = 'none';
}

// Modal Produto com Galeria
let currentFotoIndex = 0;
let currentFotos = [];

function abrirModalProduto(nome, fotos) {
  currentFotos = fotos;
  currentFotoIndex = 0;
  const modal = document.getElementById('modal');
  const img = document.getElementById('modalImg');
  img.src = currentFotos[currentFotoIndex].foto;
  img.alt = nome;

  // Adicionar navegação se houver múltiplas fotos
  if (currentFotos.length > 1) {
    if (!document.getElementById('modalNav')) {
      const nav = document.createElement('div');
      nav.id = 'modalNav';
      nav.innerHTML = `
        <button id="prevBtn" onclick="changeFoto(-1)">‹</button>
        <button id="nextBtn" onclick="changeFoto(1)">›</button>
      `;
      nav.style.position = 'absolute';
      nav.style.top = '50%';
      nav.style.width = '100%';
      nav.style.display = 'flex';
      nav.style.justifyContent = 'space-between';
      nav.style.pointerEvents = 'none';
      modal.appendChild(nav);
      // Botões com pointer events
      document.getElementById('prevBtn').style.pointerEvents = 'auto';
      document.getElementById('nextBtn').style.pointerEvents = 'auto';
    }
  }

  updateModalSpecs(nome);
  modal.style.display = 'flex';
  // Evento de clique no overlay
  modal.onclick = function(event) {
    if (event.target === modal || event.target === img) {
      // Não fechar se clicar na imagem ou nav
      return;
    }
    fecharModal();
  };
}

function changeFoto(direction) {
  currentFotoIndex += direction;
  if (currentFotoIndex < 0) currentFotoIndex = currentFotos.length - 1;
  if (currentFotoIndex >= currentFotos.length) currentFotoIndex = 0;
  document.getElementById('modalImg').src = currentFotos[currentFotoIndex].foto;
  updateModalSpecs(document.getElementById('modalSpecs').querySelector('h3').textContent);
}

function updateModalSpecs(nome) {
  if (!document.getElementById('modalSpecs')) {
    const specsDiv = document.createElement('div');
    specsDiv.id = 'modalSpecs';
    specsDiv.style.marginTop = '20px';
    specsDiv.style.textAlign = 'center';
    specsDiv.style.color = '#fff';
    document.getElementById('modal').appendChild(specsDiv);
  }
  const specs = currentFotos[currentFotoIndex].specs;
  document.getElementById('modalSpecs').innerHTML = `<h3>${nome}</h3><p>${specs}</p>`;
}

// Depoimento Modal Functions
function abrirModalDepoimento() {
  document.getElementById('modalDepoimento').style.display = 'flex';
}

function fecharModalDepoimento() {
  document.getElementById('modalDepoimento').style.display = 'none';
}

function renderDepoimentos() {
  const grid = document.getElementById('depoimentos-grid');
  // Carregar depoimentos do localStorage ou usar padrão
  const depoimentos = JSON.parse(localStorage.getItem('depoimentos')) || depoimentosPadrao;

  grid.innerHTML = ''; // Limpar grid

  depoimentos.forEach(dep => {
    const card = document.createElement('div');
    card.className = 'depoimento-card';
    card.innerHTML = `
      <p>"${dep.comentario}"</p>
      <cite>- ${dep.nome}</cite>
    `;
    grid.appendChild(card);
  });
}

// Agendamento Functions
function agendar1() {
  window.open("https://agendamento.nextfit.com.br/0b453864-19d3-4259-a29b-18a1538b960e", "_blank");
}

function agendar2() {
  window.open("https://agendamento.nextfit.com.br/2b711ac4-e65b-4a6c-8b68-4e2a5d5d1697", "_blank");
}

function whatsappCompra(produto) {
  const message = encodeURIComponent(`Olá, gostaria de comprar ${produto}`);
  window.open(`https://wa.me/5567996714731?text=${message}`, '_blank');
}

function dev() {
  window.open("https://www.instagram.com/allandelonpedro/", "_blank");
}

// Scroll Animation (Light)
function handleScroll() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('fade-in');
    }
  });
}

// Load data from JSON
async function loadData() {
  try {
    console.log('Carregando atletas.json...');
    const atletasResponse = await fetch('atletas.json');
    const atletasData = await atletasResponse.json();
    atletas = [...atletasData.professores, ...atletasData.campeoes];
    console.log('Atletas carregados:', atletas);

    console.log('Carregando produtos.json...');
    const produtosResponse = await fetch('produtos.json');
    const produtosData = await produtosResponse.json();
    renderProdutos(produtosData);
    console.log('Produtos carregados:', produtosData);
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    // Fallback: carregar dados hardcoded se fetch falhar
    atletas = [
      { nome: "Laerte Dias", lutas: 8, vitorias: 6, derrotas: 2, foto: "img/professores/laerte-dias.jpg", bio: "Laerte é o fundador da Matilha Thai.", type: "professor" },
      { nome: "Cleiton Leite", lutas: 1, vitorias: 1, derrotas: 0, foto: "img/professores/professor_cleiton_leite.jpg", bio: "Professor de Muay Thai da Matilha Thai", type: "professor" },
      { nome: "Vinicius Junior", lutas: 8, vitorias: 6, derrotas: 2, foto: "img/competidores/vinicius-junior.jpg", bio: "Mestre do clinch.", type: "campeao" },
      { nome: "Lucas Silva", lutas: 8, vitorias: 6, derrotas: 2, foto: "img/competidores/lucas-silva.jpg", bio: "Cotoco ambidestro.", type: "campeao" }
    ];
    console.log('Usando dados fallback:', atletas);
    renderProdutos([
      { nome: "Luvas de Muay Thai", foto: "img/loja/luvas.jpg", tag: "Mais Vendido" },
      { nome: "Bandagens", foto: "img/loja/bandagens.jpg", tag: null },
      { nome: "Caneleiras", foto: "img/loja/caneleiras.jpg", tag: null },
      { nome: "Roupas da Marca", foto: "img/loja/roupas.jpg", tag: "Produto Oficial" }
    ]);
  }
}

// Render produtos
function renderProdutos(produtos) {
  const lojaGrid = document.querySelector('.loja-grid');
  lojaGrid.innerHTML = ''; // Limpar

  produtos.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'produto-card';
    const tagHtml = prod.tag ? `<span class="tag ${prod.tag === 'Mais Vendido' ? 'mais-vendido' : 'produto-oficial'}">${prod.tag}</span>` : '';
    // Usar primeira foto para thumbnail
    const firstFoto = prod.fotos[0].foto;
    card.innerHTML = `
      ${tagHtml}
      <img src="${firstFoto}" alt="${prod.nome}" onclick="abrirModalProduto('${prod.nome}', ${JSON.stringify(prod.fotos).replace(/"/g, '&quot;')})" onerror="this.src='https://via.placeholder.com/200x150?text=${prod.nome.replace(/\s+/g, '+')}'">
      <h3>${prod.nome}</h3>
      <button onclick="whatsappCompra('${prod.nome}')" class="cta-btn shop-btn">Comprar Agora</button>
    `;
    lojaGrid.appendChild(card);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadData().then(() => {
    renderProfessores();
    renderCampeoes();
    renderDepoimentos();
  });
  renderEventos();

  // Formulário de depoimento
  document.getElementById('depoimentoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nomeDepoimento').value.trim();
    const comentario = document.getElementById('comentarioDepoimento').value.trim();

    if (nome && comentario) {
      const depoimentos = JSON.parse(localStorage.getItem('depoimentos')) || depoimentosPadrao;
      depoimentos.push({ nome, comentario });
      localStorage.setItem('depoimentos', JSON.stringify(depoimentos));
      renderDepoimentos();
      fecharModalDepoimento();
      document.getElementById('depoimentoForm').reset();
      alert('Depoimento enviado com sucesso! Obrigado por compartilhar.');
    }
  });

  // Add scroll animations
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('fade-in');
  });

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on load
});