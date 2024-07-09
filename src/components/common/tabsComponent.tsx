import { HRSettingTabProps } from '@/types/tabs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TabsComponent = ({ tabSource }: HRSettingTabProps) => {
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const menu = query.get('menu') || 'structures';

  const handleTabChange = (tab: string) => {
    navigate(`/settings/hr?menu=${tab}`);
  };

  return (
    <section className="flex justify-start gap-4">
      {tabSource.map((val, idx) => {
        const { icon, text, link } = val;
        return (
          <div
            key={idx}
            onClick={() => {
              handleTabChange(link);
            }}
            className={`${menu == link ? 'bg-yellow-500' : 'bg-slate-300'} border p-3 rounded-md  text-white font-semibold flex justify-start gap-2 items-center cursor-pointer`}
          >
            <>{icon}</>
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default TabsComponent;
