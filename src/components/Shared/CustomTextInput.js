import React from 'react';
import { TextInput } from 'react-native-paper';

const CustomTextInput = ({ style, ...props }) => {
    return (
        <TextInput
            {...props}
            mode="outlined"
            outlineColor="#e7e7e7"
            outlineStyle={{ borderRadius: 10 }}
            style={[style]}
        />
    );
};

export default CustomTextInput;
