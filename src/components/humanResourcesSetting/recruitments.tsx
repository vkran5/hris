import React from 'react';
import { Container, Tabs } from '@mantine/core';
import StageTab from './recruitmentStageTab';

const Recruitements = () => {
  return (
    <Container
      size="default"
      className="border rounded-md bg-white mt-3 min-h-[280px] p-4 flex flex-col gap-4"
    >
      <Tabs color="yellow" defaultValue="recruitmentStages">
        <Tabs.List>
          <Tabs.Tab value="recruitmentStages">Recruitments Stages</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="recruitmentStages">
          <StageTab />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Recruitements;
