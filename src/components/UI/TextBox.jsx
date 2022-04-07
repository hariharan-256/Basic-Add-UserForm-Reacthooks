import React from 'react';

const TextBox = (props) => {
    const { type, onChange, placeholder, name, value } = props;
    return <>
        <input type={type} onChange={onChange} value={value} name={name} placeholder={placeholder} />
    </>
}

export default TextBox;