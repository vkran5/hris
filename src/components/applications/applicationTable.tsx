import React, { useState } from 'react';
import { Box, Table, Checkbox, Pagination, ThemeIcon } from '@mantine/core';
import { ApplicationTableProps, Applications } from '@/types/application';
import { IconTrash, IconEdit } from '@tabler/icons-react';

const ApplicationTable = ({
  dataSource,
  selectedRows,
  setSelectedRows,
}: ApplicationTableProps) => {
  const [activePage, setPage] = useState<number>(1);
  const rows = dataSource.map((element: Applications) => (
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
      <Table.Td>{element.applicantName}</Table.Td>
      <Table.Td>{element.jobTitle}</Table.Td>
      <Table.Td>{element.jobLevel}</Table.Td>
      <Table.Td>{element.jobStatus}</Table.Td>
      <Table.Td>{element.applicationStatus}</Table.Td>
      <Table.Td>{element.updatedAt}</Table.Td>
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

  function chunk<T>(array: T[], size: number): T[][] {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }

  const data = chunk(dataSource, 5);

  return (
    <Box component="section" id="table-content" className="flex flex-col gap-4">
      <Table
        className="rounded-md"
        striped
        highlightOnHover
        withTableBorder
        withRowBorders={false}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th />
            <Table.Th>Applicant Name</Table.Th>
            <Table.Th>Job Position</Table.Th>
            <Table.Th>Job Level</Table.Th>
            <Table.Th>Position Status</Table.Th>
            <Table.Th>Application Status</Table.Th>
            <Table.Th>Updated At</Table.Th>
            <Table.Th className="text-end pr-5">Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Pagination
        total={data.length}
        color="yellow"
        value={activePage}
        onChange={setPage}
      />
    </Box>
  );
};

export default ApplicationTable;
