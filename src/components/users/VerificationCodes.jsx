import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
    TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
     ReferenceInput } from 'react-admin';

const VerificationCodes = (props) => (
    <List {...props} title="کدهای احراز هویت" >
        <Datagrid>
            <TextField source="id" label="#" />
            <TextField source="first_name" label="نام کاربر" />
            <TextField source="mobile" label="تلفن همراه" />
            <TextField source="status" label="کد تاییدیه" />
        </Datagrid>
    </List>
);

export default VerificationCodes;