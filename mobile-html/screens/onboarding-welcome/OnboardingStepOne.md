# OnboardingStepOne

Referência HTML: [OnboardingStepOne.html](OnboardingStepOne.html)

Screenshot: [OnboardingStepOne.png](OnboardingStepOne.png)

Fonte: `src/components/mockups/onboarding/OnboardingStepOne.tsx`

## Estrutura

- Tela flexível vertical com fundo `#0B0F14`.
- Cabeçalho do onboarding com padding horizontal de 20 px e padding superior de 16 px.
- Marca “NEXO” em Manrope SemiBold, 11 px, tracking de `0.18em` e cor `#2DD4BF`.
- Ação “Ignorar” em 12 px e cor `#667582`.
- Eyebrow “01 · Boas-vindas” em 11 px, uppercase e cor `#667582`.
- Título “Tudo o que guardas, num só lugar.” em Manrope SemiBold, 22 px.
- Corpo em 13 px, cor `#9AA8B5`, com largura máxima de 260 px.
- Exemplo central com 240 px de largura, padding de 12 px, raio de 16 px, fundo `#111820` e borda `#263440` a 60%.
- Logótipo SVG do Instagram, texto de 10,5 px, chip “Aplicar” e ícone Bookmark de 13 px.
- Indicador de três etapas com altura de 4 px; etapa ativa com 22 px de largura e etapas inativas com 6 px.
- Botão “Continuar” com 44 px de altura, raio de 12 px, fundo `#2DD4BF` e texto de 14 px.

## Comportamento

- “Ignorar” deve terminar ou saltar o onboarding.
- “Continuar” deve abrir `OnboardingStepTwo`.
- O indicador deve manter somente a primeira etapa ativa.
- O conteúdo central deve ocupar o espaço flexível sem deslocar o botão para fora da tela.

