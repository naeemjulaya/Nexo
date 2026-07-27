# OnboardingStepTwo

Referência HTML: [OnboardingStepTwo.html](OnboardingStepTwo.html)

Screenshot: [OnboardingStepTwo.png](OnboardingStepTwo.png)

Fonte: `src/components/mockups/onboarding/OnboardingStepTwo.tsx`

## Estrutura

- Usa a mesma shell de onboarding, fundo `#0B0F14` e padding horizontal de 20 px.
- Eyebrow “02 · Fluxo de partilha”, título de 22 px e corpo de 13 px.
- Ilustração central com 240 px de largura e gap vertical de 8 px.
- Cartão “Menu Partilhar” com fundo `#17212B`, raio de 12 px e padding de 12 px.
- Linha com ícones Lucide de Instagram, TikTok/Music, YouTube, Facebook, X/Twitter, LinkedIn e Web, todos com 12 px.
- Cores de ícone definidas no componente: Instagram `#E1306C`, YouTube `#EF5A5A`, Facebook e LinkedIn `#4C8BF5`, restantes `#9AA8B5`.
- Seta vertical ChevronDown de 16 px e cor `#2DD4BF`.
- Confirmação “Guardado” com fundo `#0F3A35`, texto `#D8FFFA`, raio de 12 px e padding de 12 px.
- Indicador de etapas com a segunda etapa ativa.
- Botão “Continuar” com 44 px de altura.

## Comportamento

- A ilustração representa a seleção do Nexo no menu Partilhar do sistema.
- “Continuar” deve abrir `OnboardingStepThree`.
- “Ignorar” deve terminar o onboarding.
- A confirmação deve comunicar que um item foi adicionado à Caixa de entrada.

