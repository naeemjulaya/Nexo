import {
  ScreenHeader,
  SettingRow,
  SettingsGroup,
} from "@/components/shared";

export function SettingsScreen() {
  return (
    <div className="flex h-full flex-col bg-nx-bg">
      <ScreenHeader title="Configurações" back />
      <div className="flex-1 overflow-y-auto pb-4">
        <SettingsGroup title="Aparência">
          <SettingRow label="Tema escuro" toggle="on" />
          <SettingRow label="Seguir o sistema" toggle="off" />
          <SettingRow label="Alto contraste" toggle="off" />
        </SettingsGroup>
        <SettingsGroup title="Captura">
          <SettingRow label="Guardar na Caixa de entrada" toggle="on" />
          <SettingRow label="Mostrar categorias rápidas" toggle="on" />
          <SettingRow label="Ao encontrar duplicados" value="Perguntar" />
        </SettingsGroup>
        <SettingsGroup title="Revisão">
          <SettingRow label="Lembretes locais" toggle="on" />
          <SettingRow label="Frequência" value="Semanal" />
          <SettingRow label="Considerar antigo após" value="30 dias" />
        </SettingsGroup>
        <SettingsGroup title="Dados">
          <SettingRow label="Backup e restauro" value="ok" />
          <SettingRow label="Exportar" />
          <SettingRow label="Limpar cache de thumbnails" value="8,4 MB" />
        </SettingsGroup>
        <SettingsGroup title="Aplicação">
          <SettingRow label="Procurar atualizações" value="v1.4.2" />
          <SettingRow label="Privacidade" />
          <SettingRow label="Sobre" />
        </SettingsGroup>
      </div>
    </div>
  );
}
