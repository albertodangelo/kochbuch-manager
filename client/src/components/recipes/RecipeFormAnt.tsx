import React, {useState} from 'react';
import { Foodtype } from '../../models/foodtype';
import { Recipe } from '../../models/recipe';
import axios from 'axios';
import { Dialog } from '../Dialog';
import { Form, Input, Button, DatePicker, Select, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const normFile = (e:any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

interface Props {
    saveRecipe: (recipe:Recipe) => void,
    recipe?: Recipe
}


export const RecipeFormAnt: React.FC<Props> = (props) => {

    const onFinish = (values: any) => {

        console.log('Success:', values);
        
        handleUpload(values);
       
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

    const initialRecipe = props.recipe 
        ? props.recipe
        : {  id: 0,
            mealImg: '',
            titleMeal: '',
            shortDesc: '',
            ingredients: '',
            directions: [],
            prepTime: '',
            cookTime: '',
            rated: '',
            file: '',
            foodtype: Foodtype.VEGETARIAN
        };

    const handleUpload = async ( values: any ) => {
        

        const file = values.upload[0].originFileObj

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });

            
            const { fileName, filePath} = res.data;
            const updateRecipe = { ...values, 'mealImg': fileName};   
        
            props.saveRecipe(updateRecipe);

        } catch (err) {
            if(err.response.status === 500) {
                console.log("there was an error with the server");
            } else {
                console.log(err.response.data.msg)
            }
        }        
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>  
          <Button size="large"  shape="round" type="primary" style={{margin: "20px", width: "100px", background: "green"}} className={props.recipe ? 'edit-recipe' : 'new-recipe'} onClick={toggleDialog}> {props.recipe ? 'ändern':'neu'}</Button>
        
        <Dialog open={open}>
        <Form
        {...layout}
        name="basic"
        initialValues={initialRecipe}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
    >
          <Form.Item
            style={{ display: "none"}}
            label="Id"
            name="id"
            rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item
            label="Rezeptname"
            name="titleMeal"
            rules={[{ required: true }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true }]}
            extra="Es wird nur 1 Bild angezeigt!"
        >
            <Upload name="logo" listType="picture">
            <Button>
                <UploadOutlined /> Bitte nur 1 Bild hochladen
            </Button>
            </Upload>
        </Form.Item>

        <Form.Item
            label="Kurzbeschreibung"
            name="shortDesc"
            rules={[{ required: true }]}
        >
            <TextArea />
        </Form.Item>

        <Form.Item
            label="Anleitung"
            name="directions"
            rules={[ { required: true }]}
        >
            <TextArea />
        </Form.Item>

        <Form.Item
            label="Zutaten"
            name="ingredients"
            rules={[ { required: true }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Zubereitungszeit"
            name="prepTime"
            rules={[ {type: "number", min: 0, max: 600}, { required: true }]}
        >
            <InputNumber />
        </Form.Item>
        

        <Form.Item
            label="Kochzeit"
            name="cookTime"
            rules={[ {type: "number", min: 0, max: 180}, { required: true }]}
        >
            <InputNumber />
        </Form.Item>
        

        <Form.Item
            label="Bewertung"
            name="rated"
            rules={[ {type: "number",min: 0, max: 4}, { required: true }]}
        >
            <InputNumber />
        </Form.Item>
        
        <Form.Item 
            name="foodtype"
            label="Art des Rezeptes"
            rules={[ { required: true }]}
            >
            <Select>
                <Select.Option value={Foodtype.MEAT}>Fleisch</Select.Option>
                <Select.Option value={Foodtype.VEGAN}>Vegan</Select.Option>
                <Select.Option value={Foodtype.VEGETARIAN}>Vegetarisch</Select.Option>
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