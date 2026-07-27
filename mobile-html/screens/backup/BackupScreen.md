# BackupScreen

Referência HTML: [BackupScreen.html](BackupScreen.html)

Screenshot: [BackupScreen.png](BackupScreen.png)

Fonte: `src/components/mockups/backup/BackupScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14` e cabeçalho compartilhado com ArrowLeft de 18 px.
- Conteúdo verticalmente scrollável com padding horizontal de 20 px e inferior de 16 px.
- Cartão de backup com fundo `#111820`, borda `#263440` a 60%, raio de 12 px e padding de 16 px.
- Eyebrow em 11 px uppercase; título do último backup em 13,5 px; data e tamanho em 11,5 px.
- Estado “ok” com fundo `#0F2B1C`, texto `#4ADE80`, padding horizontal de 8 px e vertical de 2 px.
- Botões “Criar backup” e “Restaurar” com 40 px de altura, raio de 8 px e ícones de 13 px.
- Cartão de exportação com as mesmas cores e raio; ações separadas por bordas superiores de 1 px.
- Linhas de exportação com padding horizontal de 16 px e vertical de 12 px; ChevronRight de 15 px.
- Confirmação final com fundo `#1A2214`, borda interna `#2A361C`, raio de 12 px e padding de 12 px.

## Comportamento

- “Criar backup” deve gerar um ficheiro local e permitir escolher o destino.
- “Restaurar” deve abrir um seletor de ficheiro e solicitar confirmação antes de substituir dados.
- Exportar JSON e CSV deve gerar os formatos indicados.
- O estado, nome, data e tamanho do último backup devem refletir dados reais.
- Todo o conteúdo abaixo do cabeçalho deve ser verticalmente scrollável.

