const botoes = document.querySelectorAll(".opcaoBtn"); // Seleciona todos os botões de opção
const chat = document.querySelector(".chatConversas"); // Seleciona a área de chat

// Adiciona evento de clique a cada botão
botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      const pergunta = btn.innerText;
  
      // Mensagem do usuário
      const msgUser = document.createElement("div");
      msgUser.classList.add("msgUser");
      msgUser.innerText = pergunta;
      chat.appendChild(msgUser);
  
      // Mensagem de "digitando..."
      const typing = document.createElement("div");
      typing.classList.add("digitando");
      typing.innerHTML = `Digitando<span class="dots"></span>`;
      chat.appendChild(typing);
  
      // Rolar pra baixo
      chat.scrollTop = chat.scrollHeight;
  
      // Simula resposta após delay
      setTimeout(() => {
        typing.remove();
  
        const resposta = document.createElement("div");
        resposta.classList.add("msgBot");
        resposta.innerText = respostaBot(pergunta);
        chat.appendChild(resposta);
  
        chat.scrollTop = chat.scrollHeight;
      }, 1200);
    });
});

// Função que retorna uma resposta aleatória baseada na pergunta
function respostaBot(pergunta) {
    switch (pergunta) {
        case "📅 Calendário de jogos":
            return escolherAleatoria([
                "Proximo jogo é dia 02/05/2025 - FURIA vs NAVI",
                "Nosso próximo jogo é amanhã contra a NAVI!!",
                "Prepara o grito! Tem jogo dia 02/05!",
                "FURIA encara a NAVI na semana que vem!",
                "Nosso próximo confronto será dia 02/05, não perca!"
            ])
          case "🧠 Curiosidades do time":
            return escolherAleatoria([
                "A FURIA foi fundada em 2017 por ex-jogadores de CS.",
                "Sabia que a FURIA foi fundada em 2017?",
                "A FURIA já ficou entre os 3 melhores do mundo!",
                "A FURIA é uma das poucas organizações brasileiras com estrutura nos EUA.",
                "A pantera da FURIA representa força e agressividade."
            ])
          case "📰 Últimas notícias":
            return escolherAleatoria([
                "FURIA anuncia nova lineup para o segundo split!",
                "Nova collab de uniformes com Adidas lançada! 👕",
                "Tem novidade no canal da FURIA! 👀",
                "Confira os bastidores da última viagem no nosso canal do YouTube!",
                "A torcida tá empolgada com o novo coach! 🔥"
            ])
          case "🛒 Recomendar produtos da loja":
            return escolherAleatoria([
                "A nova jersey preta FURIA x Adidas 2025 tá absurda 🔥",
                "Boné da FURIA disponível com desconto por tempo limitado!",
                "Já viu o moletom oversized FURIA x Zor? Estiloso demais 😎",
                "Garanta já sua sacochila impermeável com o logo da pantera!"
            ])
          case "💻 Estatísticas dos jogadores":
            return escolherAleatoria([
                "FalleN: 1.07 | KSCERATO: 1.15 | yuurih: 1.12",
                "Skullz teve 85% de KAST no último mapa!",
                "Chelo foi o destaque em entry kills na última série.",
                "Equipe com rating médio de 1.09 no campeonato atual."
            ])
          case "🎯 Quiz FURIA":
            return escolherAleatoria([
                "Qual jogador tem o apelido de 'Professor'? 🤔",
                "Qual o jogador que tem o nome de Kaique?",
                "Em que ano a FURIA entrou no cenário de CS:GO?"
            ])
          case "🚀 Nossa história":
            return escolherAleatoria([
                "A FURIA nasceu em 2017 e virou um movimento sociocultural.",
                "Começamos no CS, mas hoje representamos o Brasil em diversos jogos.",
                "Com sede no Brasil e nos EUA, levamos o nome do país ao topo.",
                "A FURIA é mais que esports: é lifestyle, conteúdo e impacto social."
            ])
          default:
            return "Ops! Ainda estou aprendendo sobre isso.";
    }
}

// Função que escolhe uma resposta aleatória de um array
function escolherAleatoria(respostas) {
    const i = Math.floor(Math.random() * respostas.length);
    return respostas[i];
}

// Adiciona evento de clique ao botão de enviar mensagem
const input = document.getElementById("userInput");
const btn = document.getElementById("enviarBtn");

// Adiciona evento de clique ao botão de enviar mensagem
btn.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") return;

  // Mensagem do usuário
  const msgUser = document.createElement("div");
  msgUser.classList.add("msgUser");
  msgUser.innerText = texto;
  chat.appendChild(msgUser);
  input.value = "";

  // "Digitando..."
  const typing = document.createElement("div");
  typing.classList.add("digitando");
  typing.innerHTML = `Digitando<span class="dots"></span>`;
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();

    const resposta = document.createElement("div");
    resposta.classList.add("msgBot");
    resposta.innerText = tratarEntrada(texto);
    chat.appendChild(resposta);
    chat.scrollTop = chat.scrollHeight;
  }, 1000);
});

// Função que trata a entrada do usuário e retorna uma resposta
function tratarEntrada(texto) {
    const msg = texto.toLowerCase();
  
    // Exemplo de reconhecimento de respostas ao quiz
    if (msg.includes("fallen") || msg.includes("FalleN")) {
      return "Acertou! FalleN é conhecido como o Professor. 👨‍🏫";
}
  
    if (msg.includes("2017")) {
      return "Isso mesmo! A FURIA foi fundada em 2017.";
}
  
    if (msg.includes("kscerato")) {
      return "Isso mesmo! Kaike é o Kscerato";
}
  
    if (msg.includes("não sei") || msg.includes("não faço ideia")) {
      return "Sem problema! Vamos pra próxima. 😄";
}
  
    // Se não reconheceu nada
    return "Ops! Ainda estou aprendendo sobre isso.";
}

// Adiciona evento de clique a cada link âncora
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      destino.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Adiciona evento de clique a cada jogo
document.querySelectorAll('.jogo').forEach(function(jogo) {
  var btn = jogo.querySelector('.btnPartida button');
  btn.addEventListener('click', function(e) {
      e.stopPropagation(); // impede de ativar cliques no pai
      jogo.classList.toggle('ativa');
  });
});