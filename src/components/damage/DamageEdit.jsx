import React from 'react';
import { ReferenceArrayField, SelectField, ReferenceField, DateField, FileField, SimpleForm,
    TextInput, DateInput, AutocompleteInput, DisabledInput, LongTextInput,
     FunctionField, ReferenceInput, Edit, ArrayInput } from 'react-admin';
import { CustomDateTimeInput } from '../CustomComponents/CustomDatePicker';

const Title = ({ record }) => {
    return <span>ویراش خرابی {record ? `"${record.id}"` : ''}</span>;
};

export const DamageEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm >
            <DisabledInput label="کد" source="id" />
            <ReferenceField label="نام مشتری" source="appUserId" reference="Customers">
                <FunctionField source="firstname" render={record => `${record.firstname} ${record.lastname}`} />
            </ReferenceField>
            <ReferenceInput label="سرویس کار" source="serviceId" reference="ServiceUsers">
                <AutocompleteInput optionValue="id" optionText={choice => `${choice.firstname} ${choice.lastname}`} options={{
                    fullWidth: true,
                }} />
            </ReferenceInput>
            <ReferenceField label="" source="serviceId" reference="ServiceUsers">
                <FunctionField source="firstname" render={record => `${record.firstname} ${record.lastname}`} />
            </ReferenceField>
            {/* <DateInput label="تاریخ بازدید" source="visitDate" /> */}
            <CustomDateTimeInput source="visitDate" label="تاریخ بازدید " type="datetime"/>
            <LongTextInput label="شرح خرابی" source="description" />
            {/* <TextInput label="وضعیت" source="status" /> */}
        </SimpleForm>
    </Edit>
);