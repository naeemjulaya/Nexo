import { copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { format } from "prettier";
import react from "@vitejs/plugin-react";
import { createServer } from "vite";

const projectRoot = resolve(import.meta.dirname, "..");
const outputRoot = join(projectRoot, "mobile-html");
const screensRoot = join(outputRoot, "screens");
const assetsRoot = join(outputRoot, "assets");

const screens = [
  {
    folder: "onboarding-welcome",
    component: "OnboardingStepOne",
    label: "01 · Boas-vindas",
    caption: "Visão geral e proposta de valor",
    nav: null,
  },
  {
    folder: "onboarding-share",
    component: "OnboardingStepTwo",
    label: "02 · Fluxo de partilha",
    caption: "Captura direta via sistema",
    nav: null,
  },
  {
    folder: "onboarding-find",
    component: "OnboardingStepThree",
    label: "03 · Encontrar mais tarde",
    caption: "Organização e pesquisa",
    nav: null,
  },
  {
    folder: "library",
    component: "LibraryScreen",
    label: "Biblioteca",
    caption: "248 itens · filtros rápidos",
    nav: "library",
  },
  {
    folder: "quick-capture",
    component: "QuickCaptureScreen",
    label: "Captura rápida",
    caption: "bottom sheet · um toque para guardar",
    nav: null,
  },
  {
    folder: "organize-content",
    component: "OrganizeContentScreen",
    label: "Organizar",
    caption: "opcional · nota pessoal em destaque",
    nav: null,
  },
  {
    folder: "content-details",
    component: "ContentDetailsScreen",
    label: "Detalhes do conteúdo",
    caption: "ação principal: abrir original",
    nav: null,
  },
  {
    folder: "search",
    component: "SearchScreen",
    label: "Pesquisa",
    caption: "filtros ativos + resultados",
    nav: "search",
  },
  {
    folder: "collections",
    component: "CollectionsScreen",
    label: "Coleções",
    caption: "grelha compacta e consistente",
    nav: "collections",
  },
  {
    folder: "collection-details",
    component: "CollectionDetailsScreen",
    label: "Detalhes da coleção",
    caption: "42 itens · Ideias para conteúdo",
    nav: null,
  },
  {
    folder: "review",
    component: "ReviewScreen",
    label: "Revisão",
    caption: "12 conteúdos · progresso 3/12",
    nav: "review",
  },
  {
    folder: "content-saved",
    component: "ContentSavedScreen",
    label: "Guardado com sucesso",
    caption: "snackbar + item recém-guardado",
    nav: "library",
  },
  {
    folder: "backup",
    component: "BackupScreen",
    label: "Backup e exportação",
    caption: "ficheiro local · JSON ou CSV",
    nav: null,
  },
  {
    folder: "settings",
    component: "SettingsScreen",
    label: "Configurações",
    caption: "agrupadas por área",
    nav: null,
  },
  {
    folder: "update-available",
    component: "UpdateAvailableDialog",
    label: "Atualização disponível",
    caption: "diálogo com changelog",
    nav: null,
  },
  {
    folder: "duplicate-content",
    component: "DuplicateContentDialog",
    label: "Conteúdo duplicado",
    caption: "ação principal: ver existente",
    nav: null,
  },
  {
    folder: "offline",
    component: "OfflineScreen",
    label: "Sem ligação",
    caption: "biblioteca continua acessível",
    nav: "library",
  },
  {
    folder: "empty-inbox",
    component: "EmptyInboxScreen",
    label: "Caixa de entrada vazia",
    caption: "ação: adicionar link manual",
    nav: "library",
  },
  {
    folder: "unavailable-content",
    component: "UnavailableContentScreen",
    label: "Conteúdo indisponível",
    caption: "notas preservadas · substituir link",
    nav: null,
  },
];

const vite = await createServer({
  configFile: false,
  root: projectRoot,
  appType: "custom",
  plugins: [react()],
  resolve: {
    alias: {
      "@": join(projectRoot, "src"),
    },
  },
  server: {
    middlewareMode: true,
    hmr: false,
  },
});

try {
  const mockups = await vite.ssrLoadModule("/src/components/mockups/index.ts");
  const { PhoneFrame } = await vite.ssrLoadModule(
    "/src/components/shared/PhoneFrame.tsx",
  );

  await mkdir(screensRoot, { recursive: true });
  await mkdir(assetsRoot, { recursive: true });

  const builtAssets = join(projectRoot, ".output", "public", "assets");
  const compiledCssName = (await readdir(builtAssets)).find(
    (file) => file.startsWith("styles-") && file.endsWith(".css"),
  );

  if (!compiledCssName) {
    throw new Error("CSS compilado não encontrado. Execute `npm run build` primeiro.");
  }

  const compiledCss = await readFile(join(builtAssets, compiledCssName), "utf8");
  const formattedCss = await format(compiledCss, { parser: "css" });
  await writeFile(join(assetsRoot, "nexo.css"), formattedCss);
  await copyFile(
    join(projectRoot, "public", "favicon.ico"),
    join(assetsRoot, "favicon.ico"),
  );

  for (const screen of screens) {
    const screenOutput = join(screensRoot, screen.folder);
    await mkdir(screenOutput, { recursive: true });
    const ScreenComponent = mockups[screen.component];
    const markup = renderToStaticMarkup(
      React.createElement(
        PhoneFrame,
        {
          label: screen.label,
          caption: screen.caption,
          nav: screen.nav,
        },
        React.createElement(ScreenComponent),
      ),
    );

    const document = `<!doctype html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0B0F14" />
    <title>Nexo — ${screen.label}</title>
    <link rel="icon" href="../../assets/favicon.ico" />
    <style>
      @font-face {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url("../../assets/manrope-regular.ttf") format("truetype");
      }

      @font-face {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 500;
        font-display: block;
        src: url("../../assets/manrope-medium.ttf") format("truetype");
      }

      @font-face {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 600;
        font-display: block;
        src: url("../../assets/manrope-semibold.ttf") format("truetype");
      }

      @font-face {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 700;
        font-display: block;
        src: url("../../assets/manrope-bold.ttf") format("truetype");
      }

      ${formattedCss}

      html,
      body {
        min-height: 100%;
        margin: 0;
        background: #07090c;
      }

      body {
        display: grid;
        place-items: center;
        padding: 24px;
        font-family: var(--font-nx);
      }

      @media (max-width: 390px) {
        body {
          padding: 12px 0;
        }
      }
    </style>
  </head>
  <body>
    ${markup}
  </body>
</html>`;

    await writeFile(
      join(screenOutput, `${screen.component}.html`),
      await format(document, { parser: "html" }),
    );
  }

  const links = screens
    .map(
      (screen) => `
        <a class="screen-link" href="screens/${screen.folder}/${screen.component}.html">
          <strong>${screen.label}</strong>
          <span>${screen.caption}</span>
        </a>`,
    )
    .join("");

  const indexDocument = `<!doctype html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nexo — interfaces HTML</title>
    <link rel="icon" href="assets/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
    />
    <style>
      :root {
        color-scheme: dark;
        font-family: "Manrope", ui-sans-serif, system-ui, sans-serif;
        background: #07090c;
        color: #f3f6f8;
      }

      body {
        margin: 0;
        padding: 48px 24px;
      }

      main {
        max-width: 960px;
        margin: auto;
      }

      h1 {
        margin-bottom: 8px;
      }

      p {
        color: #9aa8b5;
      }

      .screens {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 10px;
        margin-top: 28px;
      }

      .screen-link {
        padding: 14px;
        border: 1px solid #263440;
        border-radius: 12px;
        background: #111820;
        color: #f3f6f8;
        text-decoration: none;
      }

      .screen-link:hover {
        border-color: #2dd4bf;
      }

      .screen-link span {
        display: block;
        margin-top: 4px;
        color: #667582;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Nexo · interfaces mobile</h1>
      <p>
        Renderizações HTML produzidas diretamente a partir dos componentes do
        projeto.
      </p>
      <nav class="screens">${links}</nav>
    </main>
  </body>
</html>`;

  await writeFile(
    join(outputRoot, "index.html"),
    await format(indexDocument, { parser: "html" }),
  );
} finally {
  await vite.close();
}
