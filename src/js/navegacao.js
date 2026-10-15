/**
 * Navegação da sidebar: mostra a seção escolhida e guarda no endereço (#sobre, #midia, #contato).
 */
export function iniciarNavegacao() {
  const botoes = document.querySelectorAll('nav button');
  const paineis = document.querySelectorAll('.panel');

  function mostrar(id) {
    if (!document.getElementById(id)) id = 'sobre';

    paineis.forEach((painel) =>
      painel.classList.toggle('active', painel.id === id)
    );
    botoes.forEach((botao) => {
      if (botao.dataset.target === id)
        botao.setAttribute('aria-current', 'page');
      else botao.removeAttribute('aria-current');
    });
  }

  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      mostrar(botao.dataset.target);
      history.replaceState(null, '', '#' + botao.dataset.target);
    });
  });

  mostrar(location.hash.slice(1) || 'sobre');
}
