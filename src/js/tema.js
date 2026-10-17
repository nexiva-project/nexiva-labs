const CHAVE = 'tema';
const ESCURO = 'escuro';
const CLARO = 'claro';

function temaAtual() {
  return document.documentElement.getAttribute('data-tema') === ESCURO
    ? ESCURO
    : CLARO;
}

function aplicar(tema) {
  const botao = document.querySelector('[data-tema-botao]');
  const escuro = tema === ESCURO;

  if (escuro) document.documentElement.setAttribute('data-tema', ESCURO);
  else document.documentElement.removeAttribute('data-tema');

  if (!botao) return;
  botao.setAttribute('aria-pressed', String(escuro));
  botao.setAttribute(
    'aria-label',
    escuro ? 'Ativar modo claro' : 'Ativar modo escuro'
  );
}

export function iniciarTema() {
  aplicar(temaAtual());

  const botao = document.querySelector('[data-tema-botao]');
  if (!botao) return;

  botao.addEventListener('click', () => {
    const proximo = temaAtual() === ESCURO ? CLARO : ESCURO;
    aplicar(proximo);
    try {
      localStorage.setItem(CHAVE, proximo);
    } catch {
      /* storage indisponível: o tema vale só nesta sessão */
    }
  });
}
