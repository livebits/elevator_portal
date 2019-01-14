import React from 'react';
import { ReferenceArrayField, SelectField, ReferenceField, DateField, FileField, SimpleForm,
    TextInput, NumberInput, Datagrid, DisabledInput, TextField,
     FunctionField, EditButton, Edit, ReferenceInput } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش موارد فاکتور {record ? `` : ''}</span>;
};

const redirect = (basePath, id, data) => `/Factors/${data.factorId}`;

export const FactorItemEdit = (props) => (

    <Edit title={<Title />} {...props}>
        <SimpleForm redirect={redirect}>
            <DisabledInput label="کد" source="id" />

            <ReferenceField label="کد فاکتور" source="factorId" reference="Factors">
                <FunctionField source="id" render={record => `${record.id}`} />
            </ReferenceField>
            <TextInput label="نام کالا" source="name" />
            <NumberInput label="تعداد" source="quantity" />
            <NumberInput label="قیمت واحد" source="unitPrice" />
            {/* <NumberInput label="جمع" source="total" /> */}
        </SimpleForm>
    </Edit>
);