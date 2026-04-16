// 👊 Atletas (simulando banco)
const atletas = [
  {
    nome: "Cleiton Leite",
    lutas: 1,
    vitorias: 1,
    derrotas: 0,
    foto: "img/cleiton-leite.jpg",
    bio:" Cleiton é um dos professores da Matilha Thai, conhecido por seus alunos como um professor dedicado. "
  },
  {
    nome: "Vinicius Junior",
    lutas: 8,
    vitorias: 6,
    derrotas: 2,
    foto: "img/vinicius-junior.jpg",
    bio:" Vinicius é um professor de Muay Thai, conhecido por seus alunos como o mestre do clinch. "
  }, 
  {
    nome: "Lucas Silva",
    lutas: 8,
    vitorias: 6,
    derrotas: 2,
    foto: "img/lucas-silva.jpg",
    bio:" Lucas é um professor de Muay Thai, conhecido por seus alunos como o cotoco ambidestro. "
  },
  {
    nome: "Laerte Dias",
    lutas: 8,
    vitorias: 6,
    derrotas: 2,
    foto: "img/laerte-dias.jpg",
    bio:" Laerte é o fundador da Matilha Thai. Ele é um professor de Muay Thai, conhecido por seus alunos como o mestre da Matilha. "
  }
];

// 📅 Eventos
const eventos = [
  "Treino especial todo sábado às 08h00",
  "Sparring aberto apenas para alunos toda sexta às 10h00",
];

// 🥊 Resultados
const resultados = [
  "Cleiton Leite - Vitória por notaute",
  "Vinicius Junior - KO no 2º round",
  "Lucas Silva - Vitória por decisão unânime",
  "Laerte Dias - Derrota por finalização"
];

// Render atletas
// Render atletas
const atletasDiv = document.getElementById("atletas");

atletas.forEach(a => {
  atletasDiv.innerHTML += `
    <div class="card">
      <img src="${a.foto}" class="foto" onclick="abrirModal('${a.foto}')">
      
      <h3>${a.nome}</h3>
      <p>Lutas: ${a.lutas}</p>
      <p>Vitórias: ${a.vitorias}</p>
      <p>Derrotas: ${a.derrotas}</p>

      <p class="bio">${a.bio}</p>
    </div>
  `;
});

// Modal abrir e fechar imagens
function abrirModal(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");

  img.src = src;
  modal.style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Render eventos
const eventosUl = document.getElementById("eventos");

eventos.forEach(e => {
  eventosUl.innerHTML += `<li>${e}</li>`;
});

// Render resultados
const resultadosUl = document.getElementById("resultados");

resultados.forEach(r => {
  resultadosUl.innerHTML += `<li>${r}</li>`;
});

// Botão agendar
function agendar1() {
  window.open("https://agendamento.nextfit.com.br/0b453864-19d3-4259-a29b-18a1538b960e", "_blank");
}

function agendar2() {
  window.open("https://agendamento.nextfit.com.br/2b711ac4-e65b-4a6c-8b68-4e2a5d5d1697", "_blank");
}

function dev() {
  window.open("https://www.instagram.com/allandelonpedro/", "_blank");
}