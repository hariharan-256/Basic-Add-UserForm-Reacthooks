import React, { useState } from 'react';
import Button from '../UI/Button';
import Label from '../UI/Label';
import TextBox from '../UI/TextBox';
import ToastErr from '../UI/ToastErr';


const AddUser = (props) => {
    const [value, setValue] = useState({
        username: "",
        age: ""
    });
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Load = () => setTimeout(() => {
            setIsValid(null)
        }, 5000);

        if (value.username.trim().length === 0 || value.age.trim().length === 0) {
            setIsValid({
                variant: 'err',
                error: 'Please fill the required field'
            });
            Load();
            return;
        } else {
            setIsValid({
                variant: 'success',
                error: 'Sucessfully User Added'
            });
            Load();
        }
        if (+value.age < 18) {
            setIsValid({
                variant: 'err',
                error: 'Age Should be greater than 18'
            });
            Load();
            return;
        } else {
            setIsValid({
                variant: 'success',
                error: 'Sucessfully User Added'
            });
            Load();
        }
        props.receiveData(value);
        setValue({
            username: "",
            age: ""
        });
    }

    const errHandler = () => {
        setIsValid(null);
    }


    return <>
        {isValid && <ToastErr error={isValid.error} change={isValid.variant} close={errHandler} />}
        <form onSubmit={handleSubmit} className="space-50">
            <Label label="Username" />
            <TextBox onChange={handleChange} value={value.username} type="text" name="username" placeholder="Enter Your Name" />
            <Label label="Age (Years)" />
            <TextBox onChange={handleChange} value={value.age} type="number" name="age" placeholder="Enter Your Age" />
            <Button type="submit" label="Add User" />
        </form>
    </>
}

export default AddUser;