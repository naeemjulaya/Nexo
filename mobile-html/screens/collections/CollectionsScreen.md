# CollectionsScreen

Referência HTML: [CollectionsScreen.html](CollectionsScreen.html)

Screenshot: [CollectionsScreen.png](CollectionsScreen.png)

Fonte: `src/components/mockups/collections/CollectionsScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14`.
- Cabeçalho com padding horizontal de 20 px, título de 17 px, contador de 11,5 px e ação Plus de 17 px.
- Área de conteúdo verticalmente scrollável com padding horizontal de 20 px e inferior de 16 px.
- Grelha de duas colunas com gap de 10 px.
- Cada coleção usa fundo `#111820`, borda `#263440` a 60%, raio de 12 px e padding de 12 px.
- Ícone Folder de 15 px dentro de caixa de 32 × 32 px e raio de 8 px.
- As seis tonalidades de coleção vêm de `CollectionCard`: teal, amber, violet, rose, olive e slate.
- Nome em 12,5 px Medium, limitado a duas linhas; contador em 10,5 px e atualização em 10 px.
- Miniaturas decorativas internas medem 24 × 16 px.
- Bottom navigation com “Coleções” ativa em `#2DD4BF`.

## Comportamento

- A grelha deve ser verticalmente scrollável.
- Cada cartão abre `CollectionDetailsScreen` para a coleção selecionada.
- Plus deve iniciar a criação de uma coleção.
- Nomes longos devem usar no máximo duas linhas.
- O conteúdo não deve passar por baixo da bottom navigation.

