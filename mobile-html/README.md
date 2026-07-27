# Interfaces HTML do Nexo

Esta pasta contém uma renderização HTML para cada uma das 19 interfaces mobile.
O conteúdo é gerado diretamente a partir dos componentes React do projeto, sem
reconstruções visuais manuais.

- Abra `index.html` para navegar por todas as interfaces.
- Abra um ficheiro de `screens/` para visualizar uma interface isolada.
- Cada HTML contém o CSS compilado e fica junto do respetivo Markdown e PNG, para
  poder ser entregue ao Google AI Studio.
- A fonte é exatamente a mesma do projeto: Manrope 400, 500, 600 e 700.
- Os quatro ficheiros Manrope usados pelos HTMLs estão em `assets/`, permitindo
  renderização e screenshots sem depender do Google Fonts durante a execução.
- Os logótipos das plataformas e os ícones são SVGs incorporados diretamente no
  HTML gerado.
- Gradientes, cores, espaçamentos, tamanhos e a moldura Android vêm dos mesmos
  componentes e estilos utilizados pela galeria original.

## Documentação para implementação

- Cada subpasta de `screens/` contém o HTML, o Markdown e o PNG da interface.
- `tokens.json` contém os valores exatos encontrados no tema e nos componentes.
- As medidas documentadas são pixels CSS do mockup. Ao reproduzir a interface em
  Android, elas podem ser tratadas como dp para dimensões e sp para texto dentro
  do viewport de referência.
- O código atual não declara alturas fixas globais para `ScreenHeader`, bottom
  navigation ou chips; por isso o ficheiro de tokens registra os paddings e as
  dimensões internas reais em vez de atribuir alturas inexistentes.

## Organização

```text
screens/
├── library/
│   ├── LibraryScreen.html
│   ├── LibraryScreen.md
│   └── LibraryScreen.png
├── quick-capture/
│   ├── QuickCaptureScreen.html
│   ├── QuickCaptureScreen.md
│   └── QuickCaptureScreen.png
└── ...
```

## Voltar a gerar os ficheiros

Sempre que um componente do projeto mudar, execute:

```sh
npx playwright install chromium
npm run generate:mobile-html
```

O comando recompila os estilos Tailwind e volta a renderizar os 19 ficheiros com
formatação legível. Em seguida, abre cada HTML no Chromium headless e atualiza o
PNG de 390 × 844 px que se encontra na mesma pasta.
