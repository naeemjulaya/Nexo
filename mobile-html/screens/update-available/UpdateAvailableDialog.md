# UpdateAvailableDialog

Referência HTML: [UpdateAvailableDialog.html](UpdateAvailableDialog.html)

Screenshot: [UpdateAvailableDialog.png](UpdateAvailableDialog.png)

Fonte: `src/components/mockups/settings/UpdateAvailableDialog.tsx`

## Estrutura

- Tela coberta por overlay preto a 60%.
- Diálogo posicionado junto ao fundo, com margem horizontal de 20 px e inferior de 24 px.
- Superfície `#17212B`, raio de 16 px e padding de 20 px.
- Cabeçalho com ícone RefreshCw de 14 px em `#2DD4BF`, eyebrow de 10,5 px e tamanho do download em 11 px.
- Título “Nexo 1.4.2 disponível” em Manrope SemiBold, 16 px.
- Changelog em lista vertical, texto de 12 px, cor `#9AA8B5`, line-height relaxed e gap de 6 px.
- Linha de ações com gap de 8 px.
- Botões “Lembrar mais tarde” e “Atualizar” com 40 px de altura, raio de 8 px e texto de 12,5 px.
- “Atualizar” usa fundo `#2DD4BF`; a ação secundária usa borda `#263440` a 60%.

## Comportamento

- “Atualizar” deve iniciar o download de 4,7 MB e apresentar progresso/resultado.
- “Lembrar mais tarde” fecha o diálogo sem atualizar.
- O diálogo deve bloquear interação com o conteúdo coberto.
- O changelog deve refletir a versão realmente disponível.
- O sistema deve preservar os dados locais durante a atualização.

