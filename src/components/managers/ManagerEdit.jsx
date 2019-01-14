import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, ArrayInput } from 'react-admin';

const Title = ({ record }) => {
    return <span>ویراش {record ? `"${record.firstname} ${record.lastname}"` : ''}</span>;
};

export const ManagerEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm >
            <DisabledInput label="کد" source="id" />
            {/* <TextInput source="email" label="ایمیل" /> */}
            <TextInput source="firstname" label="نام" />
            <TextInput source="lastname" label="نام خانوادگی" />
            <TextInput source="mobile" label="شماره موبایل" />
            <SelectInput source="status" label="وضعیت" choices={[
                { id: 'active', name: 'فعال' },
                { id: 'inactive', name: 'غیرفعال' }
            ]} />
            <TextInput source="username" label="نام کاربری" />
            <TextInput type="password" source="password" label="رمز عبور" render={record => record.password} />
            <ReferenceInput source="companyId" reference="Companies" label="شرکت">
                <SelectInput optionText="name" />
            </ReferenceInput>

            {/* <ReferenceInput label="نقش" source="role" reference="Roles">
                <SelectInput optionText="name" allowEmpty="true"/>
            </ReferenceInput> */}
        </SimpleForm>
    </Edit>
);