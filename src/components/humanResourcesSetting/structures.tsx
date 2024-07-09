import React from 'react';
import { Container, Tabs } from '@mantine/core';
import JobTitleTab from '@/components/humanResourcesSetting/jobTitleTab';
import JobLevelTab from './jobLevelTab';
import EmploymentStatusTab from './employmentStatusTab';
const Structures = () => {
  return (
    <Container
      size="default"
      className="border rounded-md bg-white mt-3 min-h-[280px] p-4 flex flex-col gap-4"
    >
      <Tabs color="yellow" defaultValue="jobPosition">
        <Tabs.List>
          <Tabs.Tab value="jobPosition">Job Title</Tabs.Tab>
          <Tabs.Tab value="jobLevel">Job Level</Tabs.Tab>
          <Tabs.Tab value="employmentStatus">Employment Status</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="jobPosition">
          <JobTitleTab />
        </Tabs.Panel>

        <Tabs.Panel value="jobLevel">
          <JobLevelTab />
        </Tabs.Panel>

        <Tabs.Panel value="employmentStatus">
          <EmploymentStatusTab />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Structures;
