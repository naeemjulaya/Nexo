# DuplicateContentDialog

Referência HTML: [DuplicateContentDialog.html](DuplicateContentDialog.html)

Screenshot: [DuplicateContentDialog.png](DuplicateContentDialog.png)

Fonte: `src/components/mockups/capture/DuplicateContentDialog.tsx`

## Estrutura

- Fundo coberto por overlay preto a 60%.
- Bottom sheet com fundo `#17212B`, raio superior de 24 px, padding superior de 12 px e inferior de 20 px.
- Handle de 40 × 4 px, cor `#263440` e margem inferior de 12 px.
- Conteúdo com padding horizontal de 20 px.
- Alerta com ícone AlertTriangle de 16 px em `#F4BF50` e título de 14 px SemiBold.
- Preview com fundo `#111820`, raio de 12 px, padding de 12 px e gap de 12 px.
- Thumbnail amber de 44 × 33 px; título em 12,5 px Medium limitado a duas linhas e metadados em 11 px.
- Botão principal com 44 px de altura e texto de 13 px.
- Dois botões secundários com 40 px de altura e texto de 12,5 px.
- Ação “Cancelar” com 36 px de altura, texto de 12 px e cor `#667582`.

## Comportamento

- “Ver conteúdo existente” abre o item já guardado.
- “Atualizar informações” aplica os novos metadados ao item existente.
- “Guardar novamente” cria uma nova entrada apesar da duplicação.
- “Cancelar” fecha o sheet sem alterações.
- O sheet deve bloquear interação com a tela coberta.

