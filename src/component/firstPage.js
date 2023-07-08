import React from 'react';
import TextInput from '../shared/TextInput';
import SharedButton from '../shared/SharedButton';
import Layout from "./layout"

function FirstPage(props) {

    const { values, handleInputChange, nextStep } = props;

    return (
        <Layout>
            <div className="form-body">
                <TextInput
                    label="Project Name"
                    type="text"
                    name="projectName"
                    value={values.projectName}
                    onChange={(e) => handleInputChange(e)}
                />
                <TextInput
                    label="Project Description"
                    type="text"
                    name="description"
                    value={values.description || ""}
                    onChange={(e) => handleInputChange(e)}
                />

                <TextInput
                    label="Client"
                    type="text"
                    name="client"
                    value={values.client || ""}
                    onChange={(e) => handleInputChange(e)}
                />

                <TextInput
                    label="Contractor"
                    type="text"
                    name="contractor"
                    value={values.contractor || ""}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div className="footer">
                <SharedButton onClick={nextStep}>
                    Next
                </SharedButton>
            </div>
        </Layout>
    )
}

export default FirstPage;
