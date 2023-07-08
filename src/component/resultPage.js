import React from 'react';
import PDFDownloadButton from './sub_component/pdfDownloadButton';
import SharedButton from '../shared/SharedButton';
import SharedTable from '../shared/SharedTable';
import { TableContainer, Paper } from '@mui/material';
import Layout from "./layout"

const Result = (props) => {
  const { values, values2, prevStep } = props;
  const tableData = [{ ...values, ...values2 }];

  const columns = [
    {
      label: "Project Name",
      field: 'projectName',
    },
    {
      label: "Description",
      field: 'description',
    },
    {
      label: "Client",
      field: 'client',
    },
    {
      label: "Contractor",
      field: 'contractor',
    },
    {
      label: "Max X",
      field: 'max_X',
    },
    {
      label: "Min X",
      field: 'min_X',
    },
    {
      label: "Max Y",
      field: 'max_Y',
    },
    {
      label: "Min Y",
      field: "min_Y",
    },
    {
      label: "Max Z",
      field: 'max_Z',
    },
    {
      label: "Min Z",
      field: "min_Z",
    }
  ];

  return (
    <Layout>
      <SharedButton
        onClick={prevStep}
      >
        Back
      </SharedButton>
      <PDFDownloadButton data={tableData} />

      <TableContainer component={Paper} >
        <SharedTable
          columns={columns}
          tableData={tableData}
        />
      </TableContainer>
    </Layout>
  );
};

export default Result;
