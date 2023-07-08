import React from 'react';
import TextInput from '../../shared/TextInput';

const maxMinForm = (props) => {
    const { values2, handleInputChange2 } = props;
    return (
        <React.Fragment>
            <TextInput
                label="X Max Value"
                type="number"
                name="max_X"
                value={values2.max_X}
                onChange={(e) => handleInputChange2(e)}
            />
            <TextInput
                label="X Min Value"
                type="number"
                name="min_X"
                value={values2.min_X}
                onChange={(e) => handleInputChange2(e)}
            />
            <TextInput
                label="Y Max Value"
                type="number"
                name="max_Y"
                value={values2.max_Y}
                onChange={(e) => handleInputChange2(e)}
            />
            <TextInput
                label="Y Min Value"
                type="number"
                name="min_Y"
                value={values2.min_Y}
                onChange={(e) => handleInputChange2(e)}
            />
            <TextInput
                label="Z Max Value"
                type="number"
                name="max_Z"
                value={values2.max_Z}
                onChange={(e) => handleInputChange2(e)}
            />
            <TextInput
                label="Z Min Value"
                type="number"
                name="min_Z"
                value={values2.min_Z}
                onChange={(e) => handleInputChange2(e)}
            />
        </React.Fragment>
    );
}

export default maxMinForm;