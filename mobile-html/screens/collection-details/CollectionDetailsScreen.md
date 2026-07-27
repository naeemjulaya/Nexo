# CollectionDetailsScreen

Referência HTML: [CollectionDetailsScreen.html](CollectionDetailsScreen.html)

Screenshot: [CollectionDetailsScreen.png](CollectionDetailsScreen.png)

Fonte: `src/components/mockups/collections/CollectionDetailsScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14`.
- Barra superior com padding horizontal de 20 px, padding superior de 12 px e ações ArrowLeft de 18 px e MoreVertical de 17 px.
- Identidade da coleção com caixa de 32 × 32 px, fundo `#0F2B30`, raio de 8 px e Folder de 15 px em `#2DD4BF`.
- Título “Ideias para conteúdo” em 17 px SemiBold e metadados em 11 px.
- Descrição em 12,5 px, cor `#9AA8B5`, line-height relaxed e margem superior de 12 px.
- Fila de chips pequenos horizontalmente scrollável, gap de 6 px e padding inferior de 12 px.
- Lista com três `ContentItem`, thumbnails padrão de 56 × 42 px e separadores de 1 px.
- Borda superior da lista em `#263440` a 50%.

## Comportamento

- ArrowLeft volta à lista de coleções.
- MoreVertical abre ações de editar, partilhar ou eliminar a coleção.
- Chips filtram e ordenam os itens, deslocando horizontalmente quando necessário.
- Cada conteúdo abre `ContentDetailsScreen`.
- Títulos dos conteúdos devem ser limitados a duas linhas.

