import { Box } from '@mantine/core';
import { IconSettings, IconUsers } from '@tabler/icons-react';
import { LinksGroup } from '@/components/sideBar/linksGroup';

const SidebarComponent = () => {
  const navigation = [
    {
      label: 'Human Resources',
      icon: IconUsers,
      link: '',
      links: [
        { label: 'Recruitments', link: '/' },
        { label: 'Employees', link: '/employees' },
      ],
    },
    {
      label: 'Setting',
      icon: IconSettings,
      link: 'settings',
    },
  ];

  return (
    <>
      {navigation.map((val, idx) => (
        <Box key={idx}>
          <LinksGroup {...val} />
        </Box>
      ))}
    </>
  );
};

export default SidebarComponent;
