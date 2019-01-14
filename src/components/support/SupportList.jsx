// in src/users.js
import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';

export const SupportList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>}  title="پشتیبانی" >
    
        <Datagrid rowClick="edit">
            <TextField source="id" label="#" />
            <TextField source="id" label="کد کاربر" />
            <TextField source="first_name" label="شماره تلفن" />
            <TextField source="last_name" label="نام کاربر" />
            <TextField source="username" label="تاریخ ایجاد" />
            <TextField source="status" label="کد خطا" />
            <TextField source="status" label="متن" />
            
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);