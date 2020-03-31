import React, { useState } from 'react';
import { User } from '../../models/user';
import { Gender } from '../../models/gender';
import { Dialog } from '../Dialog';
/* import './UserForm.css'; */
import { Form, Input, Button, DatePicker, Select } from 'antd';
import moment from 'moment';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface Props {
    saveUser: (user: User) => void,
    user?: User
}


export const UserFormAnt: React.FC<Props> = (props) => {


    /// ANT FORM
    const onFinish = (values: any) => {

        console.log('Success:', values);
        console.log('Datum formatiert', values['birthday'].format('YYYY-MM-DD') );
        props.saveUser({...values, birthday : values['birthday'].format('YYYY-MM-DD') });
        toggleDialog();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const validateMessages = {
        required: 'Dies ist ein Pflichtfeld!',
        types: {
            email: 'Bitte eine gültige E-Mail Adresse erfassen!',
            number: 'Bitte einen numerischen Wert verwenden!',
            object: 'Bitte ein Datum wählen!',
        }
    };

    const [open, isOpen] = useState<boolean>(false);

    const initialUser = props.user
        ? { ...props.user, birthday : moment(props.user.birthday)} 
        : {
            id: 0,
            forname: '',
            surname: '',
            birthday: 0,
            email: '',
            gender: Gender.MALE,
        };

  
    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
            <Button type="primary" style={{margin: "20px", width: "100px", background: "green"}} className={props.user ? 'edit' : 'new'} onClick={toggleDialog}> {props.user ? 'ändern' : 'neu'}</Button>
            <Dialog open={open}>

                <Form
                    {...layout}
                    name="basic"
                    initialValues={initialUser}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        label="Vorname"
                        name="forname"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        style={{ display: "none"}}
                        label="Id"
                        name="id"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Nachname"
                        name="surname"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="E-Mail"
                        name="email"
                        rules={[{ type: 'email' }, { required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item 
                        name="birthday" 
                        label="Geburtsdatum"
                        rules={[{ type: 'object' }, { required: true }]}
                        >
                        <DatePicker />
                    </Form.Item>
                    
                    <Form.Item 
                        name="gender"
                        label="Geschlecht"
                        rules={[ { required: true }]}
                        >
                        <Select>
                            <Select.Option value={Gender.FEMALE}>Frau</Select.Option>
                            <Select.Option value={Gender.MALE}>Mann</Select.Option>
                        </Select>
                    </Form.Item>
                    
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            senden
                        </Button>
                        <Button type="danger" onClick={toggleDialog}>
                            zurück
                        </Button>
                    </Form.Item>
                </Form>



            </Dialog>
        </>
    )
}