// in src/users.js
import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, EmailField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';

export const UserList = props => (
    <List {...props} title="کاربران اپ" >

        <Datagrid rowClick="edit">
            <TextField source="id" label="کد کاربر" />
            <TextField source="first_name" label="نام" />
            <TextField source="last_name" label="نام خانوادگی" />
            <EmailField source="email" label="ایمیل" />
            <TextField source="invitation" label="تعداد دعوت کننده" />
            <TextField source="mobile" label="موبایل" />
            <TextField source="status" label="وضعیت" />
            <TextField source="action" label="فعالیت" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
        
    </List>
);