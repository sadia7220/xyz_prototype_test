import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImportCSV from './sub_component/importCSV';
import SharedButton from '../shared/SharedButton';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper, Container, Stack, styled } from '@mui/material';
import MaxMinForm from './sub_component/maxMinForm';
import Layout from "./layout"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const SecondPage = (props) => {
    let navigate = useNavigate();

    const { values, values2, prevStep, nextStep, handleInputChange2, setValues2, chartValues, setChartValues,
        file, handleFileOnChange, showChart, setShowChart } = props;


    return (
        <Layout>
            <SharedButton
                onClick={prevStep}
            >
                Back
            </SharedButton>
            <Container maxWidth="sm">
                <Stack spacing={2}>
                    <Item><b>Project Name: </b>{values.projectName}</Item>
                    <Item><b>Project Description: </b>{values.description}</Item>
                    <Item><b>Client: </b>{values.client}</Item>
                    <Item><b>Contractor: </b>{values.contractor}</Item>
                </Stack>
            </Container>

            <ImportCSV
                setValues2={setValues2}
                setChartValues={setChartValues}
                setShowChart={setShowChart}
                file={file}
                handleFileOnChange={handleFileOnChange}
            />

            {showChart && (
                <SharedButton
                    onClick={() => {
                        navigate(`/chart`, {
                            state: {
                                xValues: chartValues.kp_amounts,
                                yValues: chartValues.x_amounts
                            }
                        });
                    }}
                >
                    Show Chart
                </SharedButton>
            )}
            {!file && (
                <div className="form-body-left">
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Or Insert the Values Manually (Numbers only)</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <MaxMinForm
                                values2={values2}
                                handleInputChange2={handleInputChange2}
                            />
                        </AccordionDetails>
                    </Accordion>
                </div>
            )}

            {values2 && Object.values(values2).every(value => value !== '') && (
                <SharedButton
                    onClick={nextStep}
                >
                    Show Result
                </SharedButton>
            )}

        </Layout>
    );
}

export default SecondPage;