import React from 'react';
import { User } from '../../models/user';
import {UserForm } from '../user/UserForm';
import { UserFormAnt } from './UserFormAnt';
import { Table, Button   } from 'antd';

interface Props {
    users: Array<User>; 
    deleteAction: (id: number) => void;
    updateAction: (user:User) => void;
}

export const UserIndexAnt: React.FC<Props> = (props) => {

    const columns = [
        {
          title: 'Vorname',
          dataIndex: 'forname',
          key: 'forname',
          render: (text:string) => <a>{text}</a>,
        },
        {
          title: 'Nachname',
          dataIndex: 'surname',
          key: 'surname',
        },
        {
          title: 'Geburtsdatum',
          dataIndex: 'birthday',
          key: 'birthday',
        },
        {
          title: 'E-Mail',
          dataIndex: 'birthday',
          key: 'birthday',
        },
        {
          title: 'Geschlecht',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
          title: 'ändern',
          key: 'change',
          render: (text:string, record:any) => (
            <UserFormAnt saveUser={props.updateAction} user={record} />
          ),
        },
        {
          title: 'löschen',
          key: 'delete',
          render: (text:string, record:any) => (
            <Button type="danger"  onClick={ () => props.deleteAction(record.id)} >Delete</Button>
          ),
        },
      ];
      
      const data =  props.users;


    return ( 
    <>
        <Table columns={columns} dataSource={data} />
    </>
    )
}