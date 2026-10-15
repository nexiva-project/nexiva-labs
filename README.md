# NEXIVA LABS: site de notícias e mídia

Site em HTML, CSS e JavaScript puros, com Vite só para o servidor de desenvolvimento.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que o terminal mostrar (normalmente http://localhost:5173).

Para gerar a versão final: `npm run build` (a pasta `dist/`).

## Estrutura

```
index.html            página única, com as seções Sobre, Mídia e Contato
src/css/
  base.css            cores (variáveis), reset e corpo da página
  aurora.css          fundo com aurora prateada, azul e roxo
  layout.css          sidebar e área principal
  componentes.css     painel, ícone, selo e barra de progresso
  responsivo.css      ajustes para celular
src/js/
  main.js             ponto de entrada
  navegacao.js        troca de seção pela sidebar
public/assets/img/    imagens e logo (coloque a logo aqui)
```

## Estado atual

Sobre, Mídia e Contato estão "em manutenção".
# nexiva-labs
