import React, { useState, useEffect } from 'react';
import '../custom/style.css'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import FirstPage from './firstPage';
import SecondPage from './secondPage';
import ResultPage from './resultPage';

const Initial = () => {
    const location = useLocation();
    const [step, setStep] = useState(1);

    const [values, setValues] = useState({
        projectName: '',
        description: '',
        client: '',
        contractor: ''
    });

    const [values2, setValues2] = useState({
        max_X: '',
        min_X: '',
        max_Y: '',
        min_Y: '',
        max_Z: '',
        min_Z: ''
    });

    const [chartValues, setChartValues] = useState({
        kp_amounts: '',
        x_amounts: ''
    });

    const [showChart, setShowChart] = useState(false);

    useEffect(() => {
        const queryParams = queryString.parse(location.search);
        if (Object.keys(queryParams).length > 0) {
            setValues(queryParams);
        }
    }, [location]);

    const nextStep = () => {
        setStep(step + 1);
        const queryParams = queryString.stringify(values);
        window.history.pushState(null, '', `${location.pathname}?${queryParams}`);
    };

    const prevStep = () => {
        setStep(step - 1);
        const queryParams = queryString.stringify(values);
        window.history.pushState(null, '', `${location.pathname}?${queryParams}`);
    };

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleInputChange2 = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues2((prevValues2) => ({ ...prevValues2, [name]: value }));
    };

    const [file, setFile] = useState();

    const handleFileOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    switch (step) {
        case 1:
            return (
                <FirstPage
                    nextStep={nextStep}
                    handleInputChange={handleInputChange}
                    values={values}
                />
            );
        case 2:
            return (
                <SecondPage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange2={handleInputChange2}
                    values={values}
                    values2={values2}
                    setValues2={setValues2}
                    chartValues={chartValues}
                    setChartValues={setChartValues}
                    file={file}
                    handleFileOnChange={handleFileOnChange}
                    showChart={showChart}
                    setShowChart={setShowChart}
                />
            );
        case 3:
            return (
                <ResultPage
                    prevStep={prevStep}
                    values={values}
                    values2={values2}
                />
            );
        default:
            console.log('default');
    }
};

export default Initial;
