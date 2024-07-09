import ApplicationTable from '@/components/applications/applicationTable';
import ApplicationFilter from '@/components/applications/applicationsFilter';
import { Applications } from '@/types/application';
import { Container, Title, Box, Button, Group } from '@mantine/core';
import React, { useState } from 'react';

const dataSource = [
  {
    id: 0,
    applicantName: 'Vikri Agung',
    jobTitle: 'Front End',
    jobLevel: 'Junior',
    jobStatus: 'Permanent',
    applicationStatus: 'On Processed',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 1,
    applicantName: 'Yessy Indah',
    jobTitle: 'Back End',
    jobLevel: 'Junior',
    jobStatus: 'Permanent',
    applicationStatus: 'On Processed',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 2,
    applicantName: 'Rahmat Hidayat',
    jobTitle: 'Data Scientist',
    jobLevel: 'Middle',
    jobStatus: 'Contract',
    applicationStatus: 'Hired',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 3,
    applicantName: 'Ayu Lestari',
    jobTitle: 'DevOps Engineer',
    jobLevel: 'Senior',
    jobStatus: 'Permanent',
    applicationStatus: 'Rejected',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 4,
    applicantName: 'Dedi Setiawan',
    jobTitle: 'Mobile Developer',
    jobLevel: 'Junior',
    jobStatus: 'Permanent',
    applicationStatus: 'On Processed',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 5,
    applicantName: 'Rina Wijaya',
    jobTitle: 'UI/UX Designer',
    jobLevel: 'Middle',
    jobStatus: 'Contract',
    applicationStatus: 'On Processed',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 6,
    applicantName: 'Budi Santoso',
    jobTitle: 'Full Stack Developer',
    jobLevel: 'Senior',
    jobStatus: 'Permanent',
    applicationStatus: 'On Processed',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 7,
    applicantName: 'Siti Aminah',
    jobTitle: 'Project Manager',
    jobLevel: 'Senior',
    jobStatus: 'Permanent',
    applicationStatus: 'On Processed',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 8,
    applicantName: 'Dian Pratama',
    jobTitle: 'System Analyst',
    jobLevel: 'Middle',
    jobStatus: 'Permanent',
    applicationStatus: 'On Processed',
    updatedAt: 'Jul 4, 2024',
  },
  {
    id: 9,
    applicantName: 'Eka Putri',
    jobTitle: 'QA Engineer',
    jobLevel: 'Junior',
    jobStatus: 'Contract',
    applicationStatus: 'Hired',
    updatedAt: 'Jul 4, 2024',
  },
];

const ApplicationPage = () => {
  const [selectedRows, setSelectedRows] = useState<Applications[]>([]);

  return (
    <main>
      <Title order={3}>Recruitments</Title>
      <Container
        size="default"
        className="border rounded-md bg-white mt-3 min-h-[280px] p-4 flex flex-col gap-4"
      >
        <ApplicationFilter />

        <Box
          component="section"
          id="button-content"
          className="flex justify-between"
        >
          <Button variant="filled" color="yellow">
            Add New Aplicant
          </Button>

          <Group>
            <Button
              className="border border-yellow-400"
              variant="light"
              color="yellow"
              onClick={(event) => event.preventDefault()}
            >
              Import Data
            </Button>

            <Button
              className="border border-yellow-400"
              component="a"
              variant="light"
              color="yellow"
              onClick={(event) => event.preventDefault()}
            >
              Export Data
            </Button>
          </Group>
        </Box>

        <ApplicationTable
          dataSource={dataSource}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        />
      </Container>
    </main>
  );
};

export default ApplicationPage;
