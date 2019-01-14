import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.name}"` : ''}</span>;
};

export const RoleEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm >
            <DisabledInput source="id" />
            <TextInput label="نام" source="name" />
            <TextInput label="توضیحات" source="description" />
        </SimpleForm>
    </Edit>
);