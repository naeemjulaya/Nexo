# OrganizeContentScreen

Referência HTML: [OrganizeContentScreen.html](OrganizeContentScreen.html)

Screenshot: [OrganizeContentScreen.png](OrganizeContentScreen.png)

Fonte: `src/components/mockups/capture/OrganizeContentScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14` e cabeçalho compartilhado.
- Cabeçalho com seta de 18 px, título “Organizar” em 17 px SemiBold e ação “Guardar” em 12,5 px Medium, cor `#2DD4BF`.
- Conteúdo vertical scrollável com padding horizontal de 20 px e inferior de 16 px.
- Labels uppercase em 11 px, tracking ampliado e cor `#667582`.
- Campo de título com 40 px de altura, fundo `#141D25`, raio de 8 px, padding horizontal de 12 px e texto de 13 px.
- Área de nota com fundo `#141D25`, borda primária a 40%, raio de 8 px e padding de 12 px.
- Coleções e etiquetas em grupos flex-wrap; chips grandes e pequenos usam gap de 6 px.
- Seção “Estado e prioridade” com raio de 8 px, borda `#263440` a 60% e divisória de 1 px.
- Ícones Check de 10 px e ChevronDown de 14 px.

## Comportamento

- A seta deve voltar sem guardar; se existirem alterações, deve solicitar confirmação.
- “Guardar” deve persistir título, nota, coleções, etiquetas, estado e prioridade.
- Coleções e etiquetas devem permitir seleção múltipla.
- “Estado e prioridade” e “Criador e origem” devem expandir/recolher.
- O conteúdo completo deve ser verticalmente scrollável.

