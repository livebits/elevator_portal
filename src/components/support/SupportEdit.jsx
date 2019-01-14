// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش پیام پشتیبانی</span>;
};

export const SupportEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput label="نام کاربر" source="first_name" />
            <TextInput label="کد خطا" source="first_name" />
            <LongTextInput label="متن" source="first_name" />

            <SelectInput label="وضعیت" source='status' choices={[
                { id: 0, name: 'چک نشده' },
                { id: 1, name: 'تایید شده' },
                { id: -1, name: 'حذف شده' },
            ]} />

        </SimpleForm>
    </Edit>
);