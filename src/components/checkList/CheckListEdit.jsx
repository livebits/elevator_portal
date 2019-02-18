import React from 'react';
import { ReferenceArrayField, SelectField, ReferenceField, DateField, FileField, SimpleForm,
    TextInput, DateInput, AutocompleteInput, DisabledInput, LongTextInput,
     FunctionField, ReferenceInput, Edit, ArrayInput } from 'react-admin';
import { CustomDateTimeInput } from '../CustomComponents/CustomDatePicker';

const Title = ({ record }) => {
    return <span>ویراش   {record ? `"${record.id}"` : ''}</span>;
};

export const CheckListEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm >
            <DisabledInput label="کد" source="id" />
            <TextInput source="title" label="عنوان"/>
        </SimpleForm>
    </Edit>
);