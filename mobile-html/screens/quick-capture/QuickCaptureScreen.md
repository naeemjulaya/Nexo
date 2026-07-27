# QuickCaptureScreen

Referência HTML: [QuickCaptureScreen.html](QuickCaptureScreen.html)

Screenshot: [QuickCaptureScreen.png](QuickCaptureScreen.png)

Fonte: `src/components/mockups/capture/QuickCaptureScreen.tsx`

## Estrutura

- Fundo da tela coberto por overlay preto a 60%.
- Bottom sheet ancorado ao fundo com fundo `#17212B`, raio superior de 24 px, padding superior de 12 px e inferior de 20 px.
- Handle central de 40 × 4 px, cor `#263440`.
- Conteúdo interno com padding horizontal de 20 px.
- Identificação do Instagram com logótipo SVG de 12 × 12 px e texto de 11 px.
- Preview com fundo `#111820`, raio de 12 px, padding de 12 px e gap de 12 px.
- Thumbnail Instagram de 48 × 36 px com gradiente rose e título limitado a duas linhas.
- Categorias em chips flex-wrap com gap de 6 px; “Aplicar” usa fundo ativo `#0F3A35` e texto `#D8FFFA`.
- Botão principal com 48 px de altura, fundo `#2DD4BF`, texto de 14 px e ícone Bookmark de 15 px.
- Botão “Organizar agora” com 44 px de altura e borda `#263440` a 70%.

## Comportamento

- “Fechar” deve descartar ou fechar a captura rápida.
- Apenas uma categoria rápida deve ser selecionada por vez.
- “Guardar na Caixa de entrada” deve guardar e fechar o sheet.
- “Organizar agora” deve abrir `OrganizeContentScreen` com os dados capturados.
- O sheet deve permanecer ancorado ao fundo sobre o conteúdo anterior.

