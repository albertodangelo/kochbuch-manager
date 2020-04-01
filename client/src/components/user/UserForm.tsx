import React, { useState } from 'react';
import { Gender } from '../../models/gender';
import { User } from '../../models/user';
import { Dialog } from '../Dialog';
import styled from '@emotion/styled';

const CustomForm = styled.form`
    input, label {
        display: block;
    }
`;

interface Props {
    saveUser: (user: User) => void;
    user?: User;
}

export const UserForm: React.FC<Props> = (props) => {
    const initialUser = props.user 
        ? props.user
        : {
            id: 0,
            forname: '',
            surname: '',
            birthday: 0,
            email: '',
            gender: Gender.MALE,
        };
    const [open, isOpen] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User>(initialUser);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toggleDialog();
        props.saveUser(currentUser);
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCurrentUser = {...currentUser, [event.target.name]: event.target.valueAsDate?.getTime()};
        setCurrentUser(newCurrentUser);
    }


    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newCurrentUser = {...currentUser, [event.target.name]: event.target.value};
        setCurrentUser(newCurrentUser);
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
            <button onClick={toggleDialog}>
                {props.user ? 'Edit' : 'New'}
            </button>
            <Dialog open={open}>
                <CustomForm onSubmit={handleSubmit}>
                    <label htmlFor='forename'>Forename</label>
                    <input onChange={handleValueChange} required name='forename' type='text' id='forename' defaultValue={currentUser.forname} />
                    <label htmlFor='surname'>Surname</label>
                    <input onChange={handleValueChange} required name='surname' type='text' id='surname' defaultValue={currentUser.surname} />
                    <label htmlFor='birthday'>Birthday</label>
                    <input onChange={handleDateChange} required name='birthday' type='date' id='birthday' defaultValue={new Date(currentUser.birthday).toISOString().substr(0, 10)} />
                    <label htmlFor='email'>Email</label>
                    <input onChange={handleValueChange} name='email' type='email' id='email' defaultValue={currentUser.email} />
                    <label htmlFor='gender'>Gender</label>
                    <select onChange={handleValueChange} name='gender' id='gender' defaultValue={currentUser.gender}>
                        <option value={Gender.MALE}>Male</option>
                        <option value={Gender.FEMALE}>Female</option>
                    </select>
                    <input type='submit' value={props.user ? 'Save user' : 'Create new user'} />
                </CustomForm>
                <button onClick={toggleDialog}>Cancel</button>
            </Dialog>
        </>
    );
}