import React from 'react';
import { ReferenceArrayField, DateInput, SingleFieldList, DateTimeInput, Create, SimpleForm,
     ReferenceInput, FileField, TextInput, FileInput, LongTextInput,
     ReferenceField, DisabledInput, Edit, NumberInput } from 'react-admin';
import { CustomDateInput, CustomDateTimeInput } from '../CustomComponents/CustomDatePicker';

export const CheckListCreate = props => (
    <Create title="ثبت مورد جدید" {...props}>
        <SimpleForm >
            <TextInput source="title" label="عنوان"/>
        </SimpleForm>
    </Create>
);