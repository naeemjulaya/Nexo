# SearchScreen

Referência HTML: [SearchScreen.html](SearchScreen.html)

Screenshot: [SearchScreen.png](SearchScreen.png)

Fonte: `src/components/mockups/search/SearchScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14`.
- Área superior com padding horizontal de 20 px e superior de 12 px.
- Campo de pesquisa com fundo `#141D25`, raio de 12 px, padding de 12 × 10 px e borda `#2DD4BF` a 40%.
- Ícone Search de 14 px em `#2DD4BF`, texto de entrada de 13 px e ícone X de 13 px.
- Fila de filtros horizontalmente scrollável com margem superior de 12 px, gap de 6 px e chips pequenos.
- Chip ativo “2 filtros” com ícone Filter de 9 px, fundo `#0F3A35` e texto `#D8FFFA`.
- Contador de resultados em 11 px, cor `#667582`, padding de 20 × 8 px e borda superior `#263440` a 50%.
- Resultados construídos com `ContentItem`: padding de 20 × 12 px, thumbnail de 56 × 42 px e título de 13,5 px.
- Separadores de 1 px entre resultados.
- Bottom navigation com “Pesquisa” ativa em `#2DD4BF`.

## Comportamento

- A pesquisa deve atualizar resultados a partir do texto digitado.
- X deve limpar a consulta.
- Os filtros devem deslocar horizontalmente e abrir os respetivos seletores.
- Resultados devem abrir `ContentDetailsScreen`.
- Títulos devem ocupar no máximo duas linhas e a lista deve terminar antes da navegação inferior.

