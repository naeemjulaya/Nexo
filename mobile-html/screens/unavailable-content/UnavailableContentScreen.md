# UnavailableContentScreen

Referência HTML: [UnavailableContentScreen.html](UnavailableContentScreen.html)

Screenshot: [UnavailableContentScreen.png](UnavailableContentScreen.png)

Fonte: `src/components/mockups/content/UnavailableContentScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14` e cabeçalho “Detalhes” com ArrowLeft de 18 px.
- Conteúdo com padding horizontal de 20 px.
- Placeholder indisponível com 130 px de altura, fundo `#1A1710`, borda tracejada `#3A3218` e raio de 12 px.
- Ícone AlertTriangle de 18 px em `#F4BF50` e mensagem em 12 px, cor `#9AA8B5`.
- Identidade TikTok com logótipo SVG de 12 px.
- Título do conteúdo em Manrope SemiBold, 15,5 px; metadados em 11,5 px e cor `#667582`.
- Cartão de nota preservada com fundo `#111820`, borda `#263440` a 60%, raio de 12 px e padding de 12 px.
- Label da nota em 10,5 px uppercase; texto em 12,5 px.
- Botões “Substituir link” e “Arquivar” com 44 px de altura, texto de 13 px e ícones de 13 px.

## Comportamento

- A nota pessoal deve permanecer disponível mesmo quando a origem desaparecer.
- “Substituir link” abre entrada/validação de uma nova URL mantendo notas e organização.
- “Arquivar” remove o item das listas ativas sem eliminar os dados preservados.
- A seta volta à tela anterior.
- O placeholder não deve tentar apresentar uma imagem quebrada.

