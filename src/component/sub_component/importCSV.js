import React from 'react';
import SharedButton from '../../shared/SharedButton';
import { TextImport } from '../../shared/TextInput';

const ImportCSV = (props) => {

    const { setShowChart, file, handleFileOnChange, setValues2, setChartValues } = props;

    const handleImport = (e) => {
        e.preventDefault();

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
                setShowChart(true);
            };
            reader.readAsText(file);
        }
    };

    const csvFileToArray = (text) => {
        const lines = text.split(/\r\n|\n/);
        const csvHeaders = lines[0].split(",");

        const results = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(",");
            if (values.length === csvHeaders.length) {
                const row = {};
                for (let j = 0; j < csvHeaders.length; j++) {
                    row[csvHeaders[j]] = values[j];
                }
                results.push(row);
            }
        }

        const kp_amounts = results.map((item) => parseFloat(item.KP));
        const x_amounts = results.map((item) => parseFloat(item.X));

        const [x_max, x_min, y_max, y_min, z_max, z_min] = [
            'X',
            'Y',
            'Z'
        ].reduce(
            (acc, header) => [
                ...acc,
                Math.max(...results.map(item => parseFloat(item[header]))),
                Math.min(...results.map(item => parseFloat(item[header])))
            ],
            []
        );

        const updatedValues2 = {
            max_X: x_max,
            min_X: x_min,
            max_Y: y_max,
            min_Y: y_min,
            max_Z: z_max,
            min_Z: z_min,
        };

        const updatedChartValues = {
            kp_amounts: kp_amounts,
            x_amounts: x_amounts
        };

        setValues2(updatedValues2);
        setChartValues(updatedChartValues);
    };

    return (
        <div className="form-body">
            <h3>Import CSV</h3>
            <TextImport
                onChange={handleFileOnChange}
            />
            {file && (
                <SharedButton
                    onClick={(e) => {
                        handleImport(e);
                    }}
                >
                    IMPORT CSV
                </SharedButton>
            )}
        </div>
    );
}

export default ImportCSV;