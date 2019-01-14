// in src/users.js
import React from 'react';
import { ReferenceArrayField, SelectField, AutocompleteInput, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput } from 'react-admin';

import moment from 'moment';
import jMoment from 'moment-jalaali';
// import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import JalaliUtils from 'material-ui-pickers-jalali-utils';
import { DateInput } from 'react-admin-date-inputs';
import ReactAdminJalaliDateInput from '../CustomComponents/DatePicker/ReactAdminJalaliDateInput';

jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});
     
export const MessageCreate = props => (
    <Create title="ثبت پیام" {...props}>
        <SimpleForm> 

            <TextInput label="موضوع پیام" source="title" />
            <LongTextInput label="متن پیام" source="body" />
            <SelectInput label="ارسال به" source="userType" choices={[
                { key: '4', id: 'user', name: 'انتخاب کاربر' },
                { key: '1', id: 'all', name: 'همه' },
                { key: '2', id: 'customers', name: 'مشتریان' },
                { key: '3', id: 'serviceUsers', name: 'سرویس کاران' },
            ]} />
            <ReferenceInput label="انتخاب کاربر" source="appUserId" reference="MyAppUsers">
                <AutocompleteInput optionValue="id" optionText={choice => `${choice.firstname} ${choice.lastname}`} options={{
                    fullWidth: true,
                }} />
            </ReferenceInput>
            
            {/* <TextInput source="sendType" /> */}

        </SimpleForm>
    </Create>
);