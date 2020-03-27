import React, {useState} from 'react';
import { User } from '../../models/user';
import { Gender } from '../../models/gender';
import { Dialog } from '../Dialog';
/* import './UserForm.css'; */
import styled from '@emotion/styled';

const CostumForm = styled.form`
    background-color: blue;
    input {
        display: block;
    }
`;

interface Props {
    saveUser: (user:User) => void,
    user?: User
}


export const UserForm: React.FC<Props> = (props) => {

    const [open, isOpen] = useState<boolean>(false);

    const initialUser = props.user 
        ? props.user
        : {
            id: 0,
            forname:'',
            surname: '',
            birthday: 0,
            email: '',
            gender: Gender.MALE,
        };

    const [currentUser, setCurrentUser] = useState<User>(initialUser);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toggleDialog();
        props.saveUser(currentUser);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value: string|number = event.target.value;
        if(event.target.type === 'date') {
            value = new Date(value).getTime();
        }
        const newCurrentUser = {...currentUser, [event.target.name]:value};
        setCurrentUser(newCurrentUser);
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
        <button className={props.user ? 'edit' : 'new'} onClick={toggleDialog}> {props.user ? 'Edit':'New'}</button>
        <Dialog open={open}>
        <CostumForm onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-25">
                <label htmlFor="forname">Vorname</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="forname" type="text" id="forname" defaultValue={currentUser.forname} />
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label htmlFor="surname">Surname</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="surname" type="text"  id="surname" defaultValue={currentUser.surname}/>
            </div>
        </div>
        <div className="row">    
            <div className="col-25">
                <label htmlFor="email">E-Mail</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="email" type="email" id="email" defaultValue={currentUser.email}/>
            </div>
        </div>
        <div className="row">    
            <div className="col-25">
                <label htmlFor="birthday">Birthday</label>
            </div>
            <div className="col-75">
                <input onChange={handleChange} name="birthday" type="date"  id="birthday"  defaultValue={currentUser.birthday}/>
            </div>
        </div>
      
        <div className="row">    
            <div className="col-25">
                <label htmlFor="gender">Gender</label>
            </div>
            <div className="col-75">
                <select onChange={handleChange} name="gender" id="gender" defaultValue={currentUser.gender}>
                    <option value={Gender.MALE}>Male</option>                
                    <option value={Gender.FEMALE}>Female</option>                
                </select>
            </div>
        </div>
        <div className="btns-end-form">
            <button className="red" onClick={toggleDialog}>Cancel</button>
            <button type="submit">Absenden</button>
        </div>
        </CostumForm>
        
        </Dialog>
        </>
    )
}