# ContentDetailsScreen

Referência HTML: [ContentDetailsScreen.html](ContentDetailsScreen.html)

Screenshot: [ContentDetailsScreen.png](ContentDetailsScreen.png)

Fonte: `src/components/mockups/content/ContentDetailsScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14`.
- Barra superior com padding horizontal de 20 px e superior de 12 px.
- Ações ArrowLeft de 18 px, Star de 16 px em `#C7F36B` e MoreVertical de 17 px.
- Conteúdo vertical scrollável com padding horizontal de 20 px, superior de 8 px e inferior de 16 px.
- Preview de vídeo com altura de 130 px, raio de 12 px e gradiente `#14343A → #0F2429`.
- Botão play circular de 44 × 44 px com overlay preto a 40% e ícone de 17 px.
- Identidade Instagram com logótipo SVG de 12 px; metadados em 11 px.
- Título em Manrope SemiBold, 17 px, seguido de chips pequenos.
- Cartões “Nota pessoal” e “Texto partilhado” com fundo `#111820`, raio de 12 px, borda `#263440` a 60% e padding de 12 px.
- Cartão de link com fundo `#111820`, padding de 12 × 10 px e ícone Share2 de 15 px.
- Botão principal “Abrir original” com 44 px de altura; botões secundários com 40 px.

## Comportamento

- A seta volta à origem; estrela alterna favorito; menu abre ações adicionais.
- O preview e “Abrir original” devem abrir o URL de origem.
- O link visível deve truncar numa linha.
- “Editar” abre `OrganizeContentScreen`; “Arquivar” altera o estado do conteúdo.
- Todo o corpo abaixo da barra superior deve ser verticalmente scrollável.

