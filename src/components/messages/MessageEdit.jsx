// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.first_name} ${record.last_name}"` : ''}</span>;
};

export const MessageEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput label="نام" source="first_name" />
            <TextInput label="نام خانوادگی" source="last_name" />
            <TextInput label="نام کاربری" source="username" />

            <SelectInput label="وضعیت" source='status' choices={[
                { id: 0, name: 'چک نشده' },
                { id: 1, name: 'تایید شده' },
                { id: -1, name: 'حذف شده' },
            ]} />

            <ReferenceArrayInput label="نقش ها و سطوح دسترسی" source="roles" reference="role">
                <SelectArrayInput optionText="title"/>
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);