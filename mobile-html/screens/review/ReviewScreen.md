# ReviewScreen

Referência HTML: [ReviewScreen.html](ReviewScreen.html)

Screenshot: [ReviewScreen.png](ReviewScreen.png)

Fonte: `src/components/mockups/review/ReviewScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14`.
- Cabeçalho com título de 17 px, contador de 11,5 px e ícone Bell de 16 px.
- Conteúdo principal com padding horizontal de 20 px.
- Metadados de progresso em 11 px e cor `#667582`.
- Barra de progresso com altura de 4 px, fundo `#1D2A35`, raio total e preenchimento de 25% em `#2DD4BF`.
- Cartão principal com fundo `#111820`, borda `#263440` a 60%, raio de 16 px e padding de 16 px.
- Identidade YouTube com logótipo SVG de 12 px e metadados em 11 px.
- Preview com 120 px de altura, raio de 8 px e gradiente `#2A1F10 → #1A1409`.
- Play circular de 40 × 40 px e ícone de 16 px.
- Título em 14 px Medium; explicação em 11,5 px.
- Quatro ações em grelha de duas colunas, gap de 6 px e altura de 36 px.
- Fila final de chips pequenos horizontalmente scrollável.
- Bottom navigation com “Revisão” ativa em `#2DD4BF`.

## Comportamento

- “Manter”, “Assistir depois”, “Para aplicar” e “Arquivar” avançam a revisão e atualizam o progresso.
- “Eliminar” deve exigir confirmação antes de remover o conteúdo.
- Os chips inferiores alteram os critérios da fila de revisão.
- O ícone Bell abre preferências de lembretes locais.
- A barra deve representar a fração revista: 3 de 12, ou 25%.

