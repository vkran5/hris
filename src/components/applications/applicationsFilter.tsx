import React from 'react';
import { Box, Input, Select, Button, Group } from '@mantine/core';

const ApplicationFilter = () => {
  return (
    <Box
      className="bg-orange-50 p-5 w-[750px] rounded-md flex flex-grow justify-start gap-5"
      component="section"
      id="filter-content"
    >
      <div className="border-r-2 pr-5 border-orange-100">
        <p className="text-[14px] pt-1 font-semibold">Filter :</p>
      </div>

      <div className="flex justify-start gap-5">
        <Input.Wrapper label="Input label" description="" error="">
          <Input placeholder="Search by name" type="" />
        </Input.Wrapper>
        <Input.Wrapper label="Select Status" description="" error="">
          <Select
            placeholder="Pick status"
            data={['On Process', 'Rejected', 'Hired']}
          />
        </Input.Wrapper>

        <div className="flex gap-3">
          <Button variant="filled" color="yellow" mt={24}>
            Apply
          </Button>

          <Button
            className="border border-yellow-400"
            variant="light"
            color="yellow"
            mt={24}
          >
            Reset
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ApplicationFilter;
