export interface Applications {
  id: number;
  applicantName: string;
  jobTitle: string;
  jobLevel: string;
  jobStatus: string;
  applicationStatus: string;
  updatedAt: string;
}

export interface ApplicationTableProps {
  dataSource: Applications[];
  selectedRows: Applications[];
  setSelectedRows: React.Dispatch<React.SetStateAction<Applications[]>>;
}
