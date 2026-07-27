# EmptyInboxScreen

Referência HTML: [EmptyInboxScreen.html](EmptyInboxScreen.html)

Screenshot: [EmptyInboxScreen.png](EmptyInboxScreen.png)

Fonte: `src/components/mockups/library/EmptyInboxScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14`.
- Cabeçalho “Caixa de entrada” em 17 px e contador “0 itens novos” em 11,5 px.
- Estado vazio centralizado vertical e horizontalmente, com padding horizontal de 32 px e texto alinhado ao centro.
- Caixa de ícone de 48 × 48 px, fundo `#0F2B30`, raio de 16 px e margem inferior de 16 px.
- Ícone Bookmark de 18 px em `#2DD4BF`.
- Título “Nada de novo por aqui.” em 15 px SemiBold.
- Descrição em 12,5 px, cor `#9AA8B5`, line-height relaxed e margem superior de 6 px.
- Ação com margem superior de 16 px, raio de 12 px, borda `#263440` a 60%, padding horizontal de 12 px e vertical de 8 px.
- Ícone Link de 12 px e texto da ação em 12 px.
- Bottom navigation com “Biblioteca” ativa.

## Comportamento

- O estado vazio só deve aparecer quando a Caixa de entrada tiver zero itens.
- “Adicionar link manualmente” abre o fluxo de captura manual.
- Novos conteúdos recebidos pelo menu Partilhar devem substituir imediatamente o estado vazio pela lista.
- A mensagem deve permanecer centralizada no espaço disponível acima da bottom navigation.

