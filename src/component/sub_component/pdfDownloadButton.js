import React from 'react';
import SharedButton from '../../shared/SharedButton';

const PDFDownloadButton = ({ data }) => {
  const downloadPDF = () => {
    const tableHTML = `
      <table>
        <thead>
          <tr>
          <th>Project Name</th>
          <th>Description</th>
          <th>Client</th>
          <th>Contractor</th>
          <th>Max X</th>
          <th>Min X</th>
          <th>Max Y</th>
          <th>Min Y</th>
          <th>Max Z</th>
          <th>Min Z</th>
          </tr>
        </thead>
        <tbody>
          ${data
        .map(
          (row) => `
              <tr>
              <td>${row.projectName}</td>
              <td>${row.description}</td>
              <td>${row.client}</td>
              <td>${row.contractor}</td>
              <td>${row.max_X}</td>
              <td>${row.min_X}</td>
              <td>${row.max_Y}</td>
              <td>${row.min_Y}</td>
              <td>${row.max_Z}</td>
              <td>${row.min_Z}</td>
              </tr>
            `
        )
        .join('')}
        </tbody>
      </table>
    `;

    const win = window.open('', '_blank');
    win.document.write(`
      <html>
        <head>
          <title>Table PDF</title>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
              text-align: left;
            }
          </style>
        </head>
        <body>
          ${tableHTML}
        </body>
      </html>
    `);

    win.document.close();
    win.print();
  };

  return (
    <SharedButton onClick={downloadPDF}>
      Download PDF
    </SharedButton>
  );
};

export default PDFDownloadButton;
