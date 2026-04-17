# Matilha Thai - Academia de Muay Thai

Site institucional premium da Matilha Thai, academia de Muay Thai localizada no Rio de Janeiro. O site é uma landing page focada em conversão, autoridade e experiência do usuário, projetada para atrair e converter visitantes em alunos.

## 🐺 Sobre o Projeto

A Matilha Thai é o 1º Estúdio de Muay Thai do RJ, com foco em qualidade de vida, formação de atletas e disciplina. O site apresenta:
- Treinos para jovens, adultos e FitClub (área feminina).
- Formação de campeões e atletas.
- Professores especializados.
- Loja de produtos oficiais.
- Sistema interativo de depoimentos.

## 🚀 Funcionalidades

- **Landing Page Responsiva**: Design moderno com animações suaves.
- **Foco em Conversão**: CTAs persuasivos, urgência e prova social.
- **Modal de Imagens**: Clique para ampliar fotos de atletas.
- **Depoimentos Interativos**: Usuários podem deixar comentários que aparecem dinamicamente.
- **Integração com WhatsApp**: Botões para agendamento e compras.
- **Formulário Externo**: Link para Google Forms de contato.

## 🛠 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: Layout moderno, responsivo e animações (sem frameworks externos).
- **JavaScript ES6**: Funcionalidades dinâmicas, localStorage para depoimentos.
- **Imagens**: JPG/PNG locais para atletas, logo e banner.

## 📁 Estrutura do Projeto

```
academia-site/
├── index.html          # Página principal com todas as seções
├── style.css           # Estilos premium e responsivos
├── script.js           # Lógica JS para interações e renderização
├── atletas.json        # Dados dos atletas (professores e campeões)
├── produtos.json       # Dados dos produtos da loja
├── add-item.ps1        # Script PowerShell para adicionar itens
├── img/                # Imagens organizadas por pastas
│   ├── logo/
│   │   └── logo.png
│   ├── banner/
│   │   └── banner.jpg
│   ├── professores/
│   │   └── laerte-dias.jpg
│   ├── competidores/
│   │   ├── cleiton-leite.jpg
│   │   ├── vinicius-junior.jpg
│   │   └── lucas-silva.jpg
│   └── loja/            # Imagens dos produtos
└── README.md           # Este arquivo
```

## 🎯 Como Executar

1. **Clone ou baixe** os arquivos para seu diretório local.
2. **Abra `index.html`** em qualquer navegador moderno (Chrome, Firefox, Edge).
3. O site é estático, então funciona offline (exceto links externos).

## 🛠 Gerenciamento de Conteúdo

Para adicionar professores, competidores ou produtos sem mexer no código:

1. Execute o script `add-item.ps1` no PowerShell (no diretório do site).
2. Siga as instruções: escolha categoria, digite nome, forneça caminho da imagem.
3. O script copia a imagem para a pasta correta e atualiza o JSON.
4. Recarregue o site para ver as mudanças.

**Exemplo:**
- Escolha "1 - Professor"
- Nome: "Novo Professor"
- Caminho: "C:\fotos\professor.jpg"
- Resultado: Imagem em `img/professores/professor_novo_professor.jpg`, JSON atualizado.

Não há necessidade de servidor ou dependências. Tudo roda no navegador.

## 📋 Changelog das Atualizações

### v1.0 - Redesign Inicial (Base Moderna)
- Reestruturação completa: Hero, Sobre, Treinos, Professores, Campeões, Loja, Eventos, Contato.
- Header fixo com navegação.
- Design premium: Preto, vermelho, dourado.
- Modal de imagens.
- Botões flutuantes para WhatsApp/Instagram/Maps.

### v1.1 - Adição de Formulário de Contato
- Link para Google Forms na seção Contato.
- Integração para captação de leads.

### v1.2 - Otimizações de Conversão e UX
- Botão sticky "Agendar Aula" no header.
- Hero aprimorado: Headline emocional, prova social, urgência.
- CTAs persuasivos em todas as seções.
- Nova seção de depoimentos com cards.
- Tags "Mais Vendido" na loja, botões verdes para WhatsApp.
- Animações fade-in ao scroll.
- Responsividade aprimorada para mobile.

### v1.3 - Sistema Interativo de Depoimentos
- Botão "Deixar Meu Depoimento" abre modal com formulário.
- Depoimentos salvos em localStorage, aparecem dinamicamente.
- Prova social sustentável e interativa.

### v1.4 - Organização de Imagens e Aluno Destaque
- Reorganização das imagens em pastas: logo, banner, professores, competidores, loja.
- Nova seção "Aluno Destaque do Mês" com card especial.
- Melhor estrutura para manutenção e escalabilidade.

### v1.5 - Sistema de Gerenciamento de Conteúdo
- Dados movidos para JSON (atletas.json, produtos.json) para dinamismo.
- Script PowerShell (add-item.ps1) para adicionar itens via interface simples.
- Site carrega dados dinamicamente dos JSON, permitindo atualizações sem editar código.

## 📞 Contato

- **WhatsApp**: [Link direto](https://wa.me/5567996714731)
- **Instagram**: [@matilhathai](https://www.instagram.com/matilhathai/)
- **Endereço**: [Inserir endereço físico]
- **Desenvolvido por**: Allan Delon Pedro ([Instagram](https://www.instagram.com/allandelonpedro/))

## 🔧 Próximos Passos

- Integração com backend para depoimentos em banco de dados.
- Adição de Google Analytics para rastreamento.
- Otimização SEO (meta tags, alt texts).
- Testes A/B para melhorar conversão.

---

**© 2026 Matilha Thai. Todos os direitos reservados.**</content>
<parameter name="filePath">D:\academia-site\README.md