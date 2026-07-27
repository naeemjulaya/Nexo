# LibraryScreen

Referência HTML: [LibraryScreen.html](LibraryScreen.html)

Screenshot: [LibraryScreen.png](LibraryScreen.png)

Fonte: `src/components/mockups/library/LibraryScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14`.
- `ScreenHeader` com padding horizontal de 20 px e padding vertical de 12 px.
- Título “Biblioteca” em Manrope SemiBold, 17 px, e subtítulo em 11,5 px, cor `#667582`.
- Ações Plus de 17 px e Settings de 16 px dentro de alvos circulares de 32 × 32 px.
- Painel de estatísticas com margem horizontal de 20 px, fundo `#111820`, raio de 12 px e quatro colunas.
- Números em 15 px SemiBold; “Rever” usa `#C7F36B`; rótulos em 10 px.
- Fila de chips horizontalmente scrollável com padding horizontal de 20 px e gap de 6 px.
- Lista vertical sem cartões flutuantes para os itens normais.
- Cada item usa padding de 20 × 12 px e gap de 12 px.
- Thumbnail padrão de 56 × 42 px, raio de 10 px, gradiente por categoria e logótipo SVG da plataforma.
- Título do item em 13,5 px Medium, limitado a duas linhas; metadados em 11 px.
- Separador de 1 px com margem horizontal de 20 px e cor `#263440` a 50%.
- Bottom navigation com fundo `#0F151C`, quatro destinos e ícones de 19 px.

## Comportamento

- Os chips devem deslocar horizontalmente sem quebrar linha.
- Cada item deve abrir `ContentDetailsScreen`; o menu vertical abre ações contextuais.
- Plus inicia captura manual e Settings abre `SettingsScreen`.
- O título de cada item deve usar no máximo duas linhas.
- A área de conteúdo é flexível e recortada antes da bottom navigation.

