import React from 'react';
import { ReferenceArrayField, DateInput, SingleFieldList, DateTimeInput, Create, SimpleForm,
     ReferenceInput, FileField, TextInput, FileInput, LongTextInput,
     ReferenceField, AutocompleteInput, Edit, NumberInput } from 'react-admin';
import { CustomDateInput, CustomDateTimeInput } from '../CustomComponents/CustomDatePicker';

export const EmergencyCreate = props => (
    <Create title="ثبت مورد امداد جدید" {...props}>
        <SimpleForm >
            <ReferenceInput label="نام مشتری" source="appUserId" reference="Customers">
                <AutocompleteInput optionValue="id" optionText={choice => `${choice.firstname} ${choice.lastname}`} options={{
                    fullWidth: true,
                }} />
            </ReferenceInput>
            <ReferenceInput label="سرویس کار" source="serviceId" reference="ServiceUsers">
                <AutocompleteInput optionValue="id" optionText={choice => `${choice.firstname} ${choice.lastname}`} options={{
                    fullWidth: true,
                }} />
            </ReferenceInput>
            <CustomDateTimeInput source="visitDate" label="تاریخ بازدید " type="datetime"/>
            <LongTextInput label="شرح خرابی" source="description" />
            {/* <TextInput label="وضعیت" source="status" /> */}
        </SimpleForm>
    </Create>
);