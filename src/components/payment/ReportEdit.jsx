import React from 'react';
import { ReferenceArrayField, SelectField, ReferenceField, DateField, FileField, SimpleForm,
    TextInput, DateInput, AutocompleteInput, DisabledInput, LongTextInput,
     FunctionField, ReferenceInput, Edit, ArrayInput } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش گزارش {record ? `"${record.id}"` : ''}</span>;
};

export const ReportEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm >
            <DisabledInput label="کد" source="id" />
            <ReferenceField label="خرابی" source="damageId" reference="Damages">
                <FunctionField source="firstname" render={record => `${record.id}`} />
            </ReferenceField>
            <LongTextInput label="متن گزارش" source="body" />
            <TextInput label="وضعیت" source="status" />
        </SimpleForm>
    </Edit>
);