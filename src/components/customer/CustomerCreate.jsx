import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, Edit, NumberInput } from 'react-admin';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';
import { Divider } from '@material-ui/core';

export const CustomerCreate = props => (
    <Create title="ثبت مشتری جدید" {...props}>
        <SimpleForm >
            <TextInput source="firstname" label="نام" />
            <TextInput source="lastname" label="نام خانوادگی" />
            {/* <TextInput source="email" label="ایمیل" type="email"/> */}
            <TextInput type="number" source="mobile" label="شماره موبایل" />
            <TextInput source="buildingName" label="نام ساختمان" />
            <LongTextInput source="address" label="آدرس" />
            <TextInput source="latitude" label="عرض جغرافیایی" />
            <TextInput source="longitude" label="طول جغرافیایی" />
            <TextInput type="number" source="debt" label="مبلغ بدهی" />
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
            {/* <TextInput source="username" label="نام کاربری" />
            <TextInput source="password" label="رمز عبور" type="password" /> */}

            {/* <SelectInput source="role" label="نقش" choices={[
                { id: 'customer', name: 'صاحب ساختمان' },
                { id: 'service', name: 'سرویس کار' }
            ]} /> */}
            <Divider fullWidth style={{marginTop: 20}} />
            <NumberInput label="مبلغ قرارداد" source="dealCost" />
            <CustomDateInput source="dealStartDate" label="تاریخ شروع قرارداد"/>
            <CustomDateInput source="dealEndDate" label="تاریخ اتمام قرارداد"/>
        </SimpleForm>
    </Create>
);