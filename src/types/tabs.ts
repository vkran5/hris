export interface HRSettingTabs {
  id: number;
  icon: React.ReactNode;
  text: string;
  link: string;
}

export interface HRSettingTabProps {
  tabSource: HRSettingTabs[];
}
