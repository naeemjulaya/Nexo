# OfflineScreen

Referência HTML: [OfflineScreen.html](OfflineScreen.html)

Screenshot: [OfflineScreen.png](OfflineScreen.png)

Fonte: `src/components/mockups/states/OfflineScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14`.
- Cabeçalho “Biblioteca” em 17 px e estado “offline” em 11,5 px.
- Aviso com margem horizontal de 20 px, fundo `#111820`, borda `#263440` a 60%, raio de 12 px e padding de 12 px.
- Ícone WifiOff de 15 px em `#F4BF50`; mensagem em 12 px e cor `#9AA8B5`.
- Lista compacta com quatro conteúdos e margem superior de 8 px.
- Cada item mantém padding de 20 × 12 px, thumbnail padrão de 56 × 42 px e título de 13,5 px limitado a duas linhas.
- O modo compacto omite plataforma, criador, data e chips.
- Separadores de 1 px entre itens.
- Bottom navigation com “Biblioteca” ativa.

## Comportamento

- Conteúdos armazenados localmente devem continuar acessíveis sem rede.
- A tela não deve tentar mostrar metadados que dependam de atualização remota.
- A abertura do conteúdo deve usar os dados locais e indicar quando o original exigir ligação.
- A aplicação deve regressar ao estado online automaticamente quando a ligação voltar.
- A lista deve permanecer contida acima da navegação inferior.

