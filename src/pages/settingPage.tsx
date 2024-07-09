import React from 'react';
import { Container, ThemeIcon, Title } from '@mantine/core';
import { IconUsers, IconSettings } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const SettingPage = () => {
  const navigate = useNavigate();
  const location = window.location.pathname;

  const settingsMenu: any[] = [
    {
      id: 'general',
      menu: 'General',
      description:
        'Set general settings like company name, location, and recruitment rules. Customize policies to streamline hiring and employee management.',
      icon: <IconUsers />,
      link: '/general',
    },
    {
      id: 'hr',
      menu: 'Human Resources',
      description:
        'Manage Human Resource settings such as input master data for recruitment and employee.',
      icon: <IconSettings />,
      link: '/hr?menu=structures',
    },
  ];

  return (
    <>
      <Title order={3}>Settings</Title>
      <Container
        size="default"
        className="border rounded bg-white mt-3 min-h-[280px]"
      >
        <div className="flex justify-start gap-4 p-5">
          {settingsMenu.map((data) => {
            const { id, menu, description, icon, link } = data;

            return (
              <div
                key={id}
                className="flex p-5 gap-5 w-[350px] cursor-pointer rounded-md border border-orange-100 bg-orange-50"
                onClick={() => {
                  navigate(`${location + link}`);
                }}
              >
                <div className="flex justify-center">
                  <ThemeIcon color="yellow" variant="filled" size={30}>
                    {icon}
                  </ThemeIcon>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-yellow-500">{menu}</h2>
                  <p className="text-[14px] text-slate-500">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default SettingPage;
