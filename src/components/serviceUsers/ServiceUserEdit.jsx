import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.firstname} ${record.lastname}"` : ''}</span>;
};

export const ServiceUserEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm >
            <DisabledInput label="کد" source="id" />
            <TextInput source="firstname" label="نام" />
            <TextInput source="lastname" label="نام خانوادگی" />
            {/* <TextInput source="email" label="ایمیل" /> */}
            <TextInput type="number" source="mobile" label="شماره موبایل" />
            {/* <SelectInput source="gender" label="جنسیت" choices={[
                { id: 'male', name: 'مرد' },
                { id: 'female', name: 'زن' }
            ]} /> */}
            <SelectInput source="status" label="وضعیت" choices={[
                { id: 'active', name: 'فعال' },
                { id: 'inactive', name: 'غیرفعال' }
            ]} />
            {/* <ReferenceInput source="companyId" reference="Companies" label="شرکت">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
            {/* <TextInput source="username" label="نام کاربری" /> */}

            {/* <ReferenceInput label="نقش" source="role" reference="Roles">
                <SelectInput optionText="name" allowEmpty="true"/>
            </ReferenceInput> */}

            {/* <SelectInput source="role" label="نقش" choices={[
                { id: 'customer', name: 'صاحب ساختمان' },
                { id: 'service', name: 'سرویس کار' }
            ]} /> */}
        </SimpleForm>
    </Edit>
);