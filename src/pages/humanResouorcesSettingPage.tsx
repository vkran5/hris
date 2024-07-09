import React, { useEffect, useState } from 'react';
import { HRSettingTabs } from '@/types/tabs';
import { IconList, IconListSearch } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';
import TabsComponent from '@/components/common/tabsComponent';
import Structures from '@/components/humanResourcesSetting/structures';
import Recruitements from '@/components/humanResourcesSetting/recruitments';

const HumanResourcesSettingPage = () => {
  const [selectedSubTab, setSelectedSubTab] = useState<string>('');

  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const menu = query.get('menu') || 'structures';

  const tabSource: HRSettingTabs[] = [
    {
      id: 0,
      icon: <IconList />,
      text: 'Structures',
      link: 'structures',
    },
    {
      id: 0,
      icon: <IconListSearch />,
      text: 'Recruitements',
      link: 'recruitments',
    },
  ];

  useEffect(() => {
    if (!menu) {
      navigate(`/setting/hr?menu=structures`);
    }

    console.log(menu, selectedSubTab);
  }, []);

  return (
    <main>
      <TabsComponent
        tabSource={tabSource}
        setSelectedSubTab={setSelectedSubTab}
      />

      {menu == 'structures' ? <Structures /> : <Recruitements />}
    </main>
  );
};

export default HumanResourcesSettingPage;
