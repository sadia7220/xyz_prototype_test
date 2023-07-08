import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export default function SharedTable({ columns, tableData }) {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {columns && columns.map((column, i) => (
            <TableCell key={i}>
              <TableCell>{column.label}</TableCell>
            </TableCell>
          ))}

        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row, i) => (
          <TableRow
            key={i}
          >
            {columns && columns.map((column, idx) => (
              <TableCell key={idx} align="center" component="th" scope="row">
                {row[column.field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}