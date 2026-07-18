import { Chip, ContentItem, PhoneFrame } from "@/components/shared";
import {
  BackupScreen,
  CollectionDetailsScreen,
  CollectionsScreen,
  ContentDetailsScreen,
  ContentSavedScreen,
  DuplicateContentDialog,
  EmptyInboxScreen,
  LibraryScreen,
  OfflineScreen,
  OnboardingStepOne,
  OnboardingStepThree,
  OnboardingStepTwo,
  OrganizeContentScreen,
  QuickCaptureScreen,
  ReviewScreen,
  SearchScreen,
  SettingsScreen,
  UnavailableContentScreen,
  UpdateAvailableDialog,
} from "@/components/mockups";
import { libraryItems } from "@/data/mockData";
import { Section } from "./Section";
import { Swatch } from "./Swatch";

export function MockupsGallery() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% -10%, #0e1a1d 0%, transparent 60%), radial-gradient(900px 500px at 100% 0%, #0f1a20 0%, transparent 50%), #07090c",
        fontFamily: "var(--font-nx)",
      }}
    >
      <header className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-md"
            style={{ background: "#0f2b30" }}
          >
            <span
              className="h-2 w-2 rounded-sm"
              style={{ background: "#2DD4BF" }}
            />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
            Nexo · mockup set
          </span>
        </div>
        <h1 className="mt-6 max-w-3xl text-[42px] font-semibold leading-[1.05] tracking-[-0.01em] text-white">
          Uma biblioteca pessoal para o que guardas das redes sociais.
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
          Mockups de alta fidelidade para um aplicativo Android local-first. Fluxo
          de captura em um toque via Partilhar, organização opcional, revisão
          periódica e backup exportável — sem contas, sem nuvem, sem ruído.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-white/60">
          <span className="rounded-full border border-white/10 px-3 py-1">
            Android · 390 px
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Tema escuro
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Local-first
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Pronto para Jetpack Compose
          </span>
        </div>
      </header>

      <Section
        eyebrow="01 · Paleta"
        title="Superfícies escuras, um único verde a puxar a atenção."
        desc="A cor principal ocupa menos de 10% da interface; o verde-lima menos de 3%. Tudo o resto é hierarquia de cinzas azulados."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
          <Swatch hex="#0B0F14" name="Fundo" note="app" />
          <Swatch hex="#111820" name="Superfície" note="listas" />
          <Swatch hex="#17212B" name="Elevada" note="sheets" />
          <Swatch hex="#1D2A35" name="Interativa" note="press" />
          <Swatch hex="#141D25" name="Input" />
          <Swatch hex="#0F151C" name="Nav" />
          <Swatch hex="#263440" name="Bordas" />
          <Swatch hex="#F3F6F8" name="Texto" />
          <Swatch hex="#9AA8B5" name="Texto 2" />
          <Swatch hex="#667582" name="Texto 3" />
          <Swatch hex="#2DD4BF" name="Primária" note="< 10%" />
          <Swatch hex="#C7F36B" name="Destaque" note="< 3%" />
          <Swatch hex="#4ADE80" name="Sucesso" />
          <Swatch hex="#F4BF50" name="Atenção" />
          <Swatch hex="#F87171" name="Erro" />
          <Swatch hex="#60A5FA" name="Info" />
        </div>
      </Section>

      <Section
        eyebrow="02 · Tipografia"
        title="Manrope, com hierarquia funcional."
        desc="Compacta, muito legível, personalidade discreta. Sem títulos gigantes; a hierarquia vem do peso e do espaço."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { size: 28, weight: 600, label: "Título principal · 28 / 600", sample: "Biblioteca" },
            {
              size: 18,
              weight: 600,
              label: "Secção · 18 / 600",
              sample: "Ideias para conteúdo",
            },
            {
              size: 15,
              weight: 500,
              label: "Conteúdo · 15 / 500",
              sample: "Como estruturar um vídeo de produto",
            },
            {
              size: 13,
              weight: 400,
              label: "Corpo · 13 / 400",
              sample:
                "Escreve por que este conteúdo é importante para ti — a nota fica só no teu dispositivo.",
            },
            {
              size: 11,
              weight: 500,
              label: "Metadados · 11 / 500",
              sample: "Instagram · @marina.films · há 2 h",
            },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="text-[10.5px] uppercase tracking-wider text-white/40">
                {t.label}
              </div>
              <div
                className="mt-2 text-white"
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight,
                  lineHeight: 1.25,
                }}
              >
                {t.sample}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="03 · Componentes"
        title="Peças reutilizáveis, densas e consistentes."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div
            className="rounded-2xl border border-white/5 p-5"
            style={{ background: "#0B0F14" }}
          >
            <div className="mb-3 text-[10.5px] uppercase tracking-wider text-white/40">
              Botões
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="h-10 rounded-lg text-[12.5px] font-semibold"
                style={{ background: "#2DD4BF", color: "#07110F" }}
              >
                Guardar na Caixa de entrada
              </button>
              <button className="h-10 rounded-lg border border-nx-border/70 text-[12.5px] text-nx-text">
                Organizar agora
              </button>
              <button className="h-10 rounded-lg text-[12.5px] text-nx-error">
                Eliminar item
              </button>
            </div>
          </div>
          <div
            className="rounded-2xl border border-white/5 p-5"
            style={{ background: "#0B0F14" }}
          >
            <div className="mb-3 text-[10.5px] uppercase tracking-wider text-white/40">
              Chips e filtros
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Chip active>Todos</Chip>
              <Chip>Entrada</Chip>
              <Chip>Assistir depois</Chip>
              <Chip>Aplicar</Chip>
              <Chip tone="warn" small>
                Assistir depois
              </Chip>
              <Chip tone="info" small>
                Aplicar
              </Chip>
              <Chip tone="accent" small>
                novo
              </Chip>
            </div>
          </div>
          <div
            className="rounded-2xl border border-white/5 p-5"
            style={{ background: "#0B0F14", fontFamily: "var(--font-nx)" }}
          >
            <div className="mb-3 text-[10.5px] uppercase tracking-wider text-white/40">
              Item de conteúdo
            </div>
            <div className="rounded-xl bg-nx-surface">
              <ContentItem item={libraryItems[0]} />
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="04 · Onboarding"
        title="Três ecrãs curtos, sem ilustrações genéricas."
      >
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <PhoneFrame label="01 · Boas-vindas" nav={null}>
            <OnboardingStepOne />
          </PhoneFrame>
          <PhoneFrame label="02 · Fluxo de partilha" nav={null}>
            <OnboardingStepTwo />
          </PhoneFrame>
          <PhoneFrame label="03 · Encontrar mais tarde" nav={null}>
            <OnboardingStepThree />
          </PhoneFrame>
        </div>
      </Section>

      <Section
        eyebrow="05 · Fluxos principais"
        title="Da captura à revisão, sem fricção."
        desc="Biblioteca compacta como página inicial; captura rápida via bottom sheet; organização opcional; detalhes com nota preservada; pesquisa que também procura em notas."
      >
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <PhoneFrame label="Biblioteca" caption="248 itens · filtros rápidos" nav="library">
            <LibraryScreen />
          </PhoneFrame>
          <PhoneFrame
            label="Captura pelo menu Partilhar"
            caption="bottom sheet · um toque para guardar"
            nav={null}
          >
            <QuickCaptureScreen />
          </PhoneFrame>
          <PhoneFrame label="Organizar" caption="opcional · nota pessoal em destaque" nav={null}>
            <OrganizeContentScreen />
          </PhoneFrame>
          <PhoneFrame label="Detalhes do conteúdo" caption="ação principal: abrir original" nav={null}>
            <ContentDetailsScreen />
          </PhoneFrame>
          <PhoneFrame label="Pesquisa" caption="filtros ativos + resultados" nav="search">
            <SearchScreen />
          </PhoneFrame>
          <PhoneFrame label="Coleções" caption="grelha compacta e consistente" nav="collections">
            <CollectionsScreen />
          </PhoneFrame>
          <PhoneFrame label="Detalhes da coleção" caption="42 itens · Ideias para conteúdo" nav={null}>
            <CollectionDetailsScreen />
          </PhoneFrame>
          <PhoneFrame label="Revisão" caption="12 conteúdos · progresso 3/12" nav="review">
            <ReviewScreen />
          </PhoneFrame>
          <PhoneFrame label="Guardado com sucesso" caption="snackbar + item recém-guardado" nav="library">
            <ContentSavedScreen />
          </PhoneFrame>
        </div>
      </Section>

      <Section
        eyebrow="06 · Dados e definições"
        title="Controlo total sobre o que fica guardado."
      >
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <PhoneFrame label="Backup e exportação" caption="ficheiro local · JSON ou CSV" nav={null}>
            <BackupScreen />
          </PhoneFrame>
          <PhoneFrame label="Configurações" caption="agrupadas por área" nav={null}>
            <SettingsScreen />
          </PhoneFrame>
          <PhoneFrame label="Atualização disponível" caption="diálogo com changelog" nav={null}>
            <UpdateAvailableDialog />
          </PhoneFrame>
        </div>
      </Section>

      <Section
        eyebrow="07 · Estados especiais"
        title="O que acontece quando algo corre mal."
      >
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <PhoneFrame label="Conteúdo duplicado" caption="ação principal: ver existente" nav={null}>
            <DuplicateContentDialog />
          </PhoneFrame>
          <PhoneFrame label="Sem ligação" caption="biblioteca continua acessível" nav="library">
            <OfflineScreen />
          </PhoneFrame>
          <PhoneFrame label="Caixa de entrada vazia" caption="ação: adicionar link manual" nav="library">
            <EmptyInboxScreen />
          </PhoneFrame>
          <PhoneFrame label="Conteúdo indisponível" caption="notas preservadas · substituir link" nav={null}>
            <UnavailableContentScreen />
          </PhoneFrame>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-6 py-14 text-[12px] text-white/40">
        Mockup set · Nexo (nome provisório). Sem logotipo definitivo. Dark-first,
        Android vertical, viável em Jetpack Compose.
      </footer>
    </main>
  );
}
