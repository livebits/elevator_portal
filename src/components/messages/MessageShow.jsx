// in src/users.js
import React from 'react';
import { Show, SimpleShowLayout, TextField, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, FunctionField, Edit, ReferenceField } from 'react-admin';
import jMoment from 'moment-jalaali';
jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

const Title = ({ record }) => {
    return <span>مشاهده پیام</span>;
};

export const MessageShow = props => (
    <Show {...props}  title="مشاهده پیام" >
        <SimpleShowLayout>
            <TextField label="کد" source="id" />
            <TextField label="عنوان پیام" source="title" />
            <TextField label="متن پیام" source="body" />
            <TextField label="نوع کاربر" source="userType" />
            <ReferenceField label="نام کاربر" source="appUserId" reference="AppUsers">
                <FunctionField source="id" render={
                    record => `${record.firstname} ${record.lastname}`
                }/>
            </ReferenceField>
            {/* <TextField label="" source="sendType" /> */}
            {/* <DateField label="تاریخ" source="createdAt" /> */}
            <FunctionField label="تاریخ" source="createdAt" render={
                record => (record.createdAt === null) ? '' : (record.createdAt._d === undefined ? jMoment((new Date(record.createdAt)).getTime()).format('jYYYY/jM/jD') : jMoment((new Date(record.createdAt._d.toISOString())).getTime()).format('jYYYY/jMM/jDD') )
            }/>
            {/* <DateField label="" source="modifiedAt" /> */}
        </SimpleShowLayout>
    </Show>
);