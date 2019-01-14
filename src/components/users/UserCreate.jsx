import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput } from 'react-admin';

export const UserCreate = props => (
    <Create title="ثبت کاربر" {...props}>
        <SimpleForm>
            <TextInput label="نام" source="first_name" />
            <TextInput label="نام خانوادگی" source="last_name" />
            <TextInput label="ایمیل" source="email" type="email" />
            <TextInput label="موبایل" source="mobile" />

            <SelectInput label="وضعیت" source="status" choices={[
                { key: '0', id: '0', name: 'بلاک' },
                { key: '1', id: '1', name: 'آزاد' },
            ]} />

            <SelectInput label="فعالیت" source="action" choices={[
                { key: '0', id: '0', name: 'فعال' },
                { key: '1', id: '1', name: 'غیرفعال' },
            ]} />

        </SimpleForm>
    </Create>
);