import React from 'react';
import { User } from '../../models/user';
import {UserForm } from '../user/UserForm';

interface Props {
    users: Array<User>; 
    deleteAction: (id: number) => void;
    updateAction: (user:User) => void;
}

export const UserIndex: React.FC<Props> = (props) => {


    return <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Vorname</th>
                        <th>Name</th>
                        <th>Geburtsdatum</th>
                        <th>E-Mail</th>
                        <th>Geschlecht</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        props.users.map( (user, index) => (
                            <tr key={index}>
                                <td>{user.forname}</td>
                                <td>{user.surname}</td>
                                <td>{user.birthday}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td><UserForm saveUser={props.updateAction} user={user} /></td>
                                <td><button className="red"  onClick={ () => props.deleteAction(user.id)} >Delete</button></td>
                            </tr>
                        ))
                        }   
                </tbody>
            </table>  
        </div>
}