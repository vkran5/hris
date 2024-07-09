import React, { useState } from 'react';
import {
  Button,
  Table,
  Checkbox,
  ThemeIcon,
  Box,
  Group,
  Pagination,
} from '@mantine/core';
import { IconTrash, IconEdit } from '@tabler/icons-react';
import { JobLevel } from '@/types/jobLevel';

const dataSource: JobLevel[] = [
  {
    id: 'A',
    jobLevelCode: 'JR',
    jobLevelName: 'Junior',
  },
  {
    id: 'B',
    jobLevelCode: 'MD',
    jobLevelName: 'Middle',
  },
  {
    id: 'C',
    jobLevelCode: 'SR',
    jobLevelName: 'Senior',
  },
];

const JobLevelTab = () => {
  const [selectedRows, setSelectedRows] = useState<JobLevel[]>([]);

  const rows = dataSource.map((element: JobLevel) => (
    <Table.Tr
      key={element.id}
      bg={selectedRows.includes(element) ? 'orange.1' : undefined}
    >
      <Table.Td>
        <Checkbox
          color="yellow"
          variant="outline"
          aria-label="Select row"
          checked={selectedRows.includes(element)}
          onChange={(event) => {
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element]
                : selectedRows.filter((data: any) => data.id !== element.id),
            );
          }}
        />
      </Table.Td>
      <Table.Td>{element.jobLevelCode}</Table.Td>
      <Table.Td>{element.jobLevelName}</Table.Td>
      <Table.Td className="flex justify-end gap-2">
        <ThemeIcon color="red" variant="light">
          <IconTrash />
        </ThemeIcon>

        <ThemeIcon color="green" variant="light">
          <IconEdit />
        </ThemeIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <main className="mt-4">
      <Box
        component="section"
        id="button-content"
        className="flex justify-between"
      >
        <Button variant="filled" color="yellow">
          Add New Job Level
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

      <Table
        className="rounded-md mt-3"
        striped
        highlightOnHover
        withTableBorder
        withRowBorders={false}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th />
            <Table.Th>Job Level Code</Table.Th>
            <Table.Th>Job Level Name</Table.Th>
            <Table.Th className="flex justify-end pr-4">Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Pagination total={3} color="yellow" className="mt-3" />
    </main>
  );
};

export default JobLevelTab;
