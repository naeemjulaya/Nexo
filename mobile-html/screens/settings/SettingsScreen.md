# SettingsScreen

Referência HTML: [SettingsScreen.html](SettingsScreen.html)

Screenshot: [SettingsScreen.png](SettingsScreen.png)

Fonte: `src/components/mockups/settings/SettingsScreen.tsx`

## Estrutura

- Tela vertical com fundo `#0B0F14` e cabeçalho com ArrowLeft de 18 px.
- Conteúdo verticalmente scrollável com padding inferior de 16 px.
- Cinco grupos: Aparência, Captura, Revisão, Dados e Aplicação.
- Títulos de grupo com padding horizontal de 20 px, tamanho de 10,5 px, Manrope Medium, uppercase e cor `#667582`.
- Cada grupo tem margem superior de 16 px e margem horizontal de 16 px.
- Superfície dos grupos `#111820`, borda `#263440` a 60% e raio de 12 px.
- Linhas com padding horizontal de 16 px e vertical de 12 px; labels em 13 px.
- Divisórias internas em `#263440` a 50%.
- Switch de 36 × 20 px; ligado usa `#2DD4BF`, desligado usa `#263440`, knob de 16 × 16 px.
- Valores e chevrons usam 12 px e cor `#667582`.

## Comportamento

- Switches alteram imediatamente preferências booleanas locais.
- Linhas com valor ou chevron abrem uma seleção ou tela de detalhe.
- “Backup e restauro” abre `BackupScreen`.
- “Procurar atualizações” pode abrir `UpdateAvailableDialog` quando houver versão disponível.
- A lista completa deve ser verticalmente scrollável.

