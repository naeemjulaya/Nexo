# ContentSavedScreen

Referência HTML: [ContentSavedScreen.html](ContentSavedScreen.html)

Screenshot: [ContentSavedScreen.png](ContentSavedScreen.png)

Fonte: `src/components/mockups/states/ContentSavedScreen.tsx`

## Estrutura

- Variante da Biblioteca com fundo `#0B0F14`.
- Cabeçalho com título de 17 px, contador “249 itens · 1 novo” em 11,5 px e Settings de 16 px.
- Fila de chips horizontalmente scrollável com padding horizontal de 20 px.
- Primeiro item destacado dentro de superfície `#111820`, margem horizontal de 20 px, raio de 12 px e borda esquerda de 2 px em `#C7F36B`.
- O conteúdo novo usa thumbnail padrão de 56 × 42 px, tag “novo” com fundo `#1A2214` e texto `#C7F36B`.
- Itens seguintes usam o layout normal de `ContentItem` e separadores de 1 px.
- Snackbar absoluto com inset horizontal de 20 px, posição inferior de 96 px, fundo `#17212B`, raio de 12 px e padding de 12 px.
- Ícone Check de 12 px dentro de círculo de 24 × 24 px com fundo `#0F2B30`.
- Bottom navigation com “Biblioteca” ativa.

## Comportamento

- O snackbar é informativo e não deve capturar eventos fora da ação “Organizar”.
- “Organizar” abre `OrganizeContentScreen` para o item recém-guardado.
- O destaque de novo deve desaparecer após leitura ou organização.
- Chips devem deslocar horizontalmente.
- A lista deve permanecer contida acima da navegação inferior e o snackbar deve ficar acima dela.

