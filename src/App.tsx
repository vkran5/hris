import '@mantine/core/styles.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import HeaderComponent from '@components/common/headerComponent';
import SidebarComponent from '@/components/sideBar/sidebar';
import SettingPage from '@pages/settingPage';
import ApplicationPage from '@pages/applicationsPage';
import HumanResourcesSettingPage from '@pages/humanResouorcesSettingPage';
import GeneralSettingPage from './pages/generalSettingPage';
import EmployeePage from './pages/employeesPage';

function App() {
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
        }}
        padding="md"
      >
        <AppShell.Header>
          <HeaderComponent />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <SidebarComponent />
        </AppShell.Navbar>
        <AppShell.Main className="bg-slate-100">
          <Routes>
            <Route path="/" element={<ApplicationPage />} />
            <Route path="/settings" element={<SettingPage />} />
            <Route path="/settings/general" element={<GeneralSettingPage />} />
            <Route path="/employees" element={<EmployeePage />} />
            <Route
              path="/settings/hr"
              element={<HumanResourcesSettingPage />}
            />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default App;
