import React from 'react';
import { ReferenceArrayField, SelectField, SingleFieldList, DateTimeInput, Create, SimpleForm,
     ReferenceInput, FileField, TextInput, FileInput, LongTextInput,
     ReferenceField, AutocompleteInput, Edit, NumberInput } from 'react-admin';
import ReactAdminJalaliDateInput from '../CustomComponents/DatePicker/ReactAdminJalaliDateInput';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';
import RichTextInput from 'ra-input-rich-text';

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

export const DealCreate = props => (
    <Create title="ثبت قرارداد جدید" {...props}>
        <SimpleForm >
            <ReferenceInput label="نام مشتری" source="appUserId" reference="Customers">
                <AutocompleteInput optionText={choice => `${choice.firstname} ${choice.lastname}`} options={{
                    fullWidth: true,
                }}/>
            </ReferenceInput>
            <TextInput label="موضوع قرارداد" source="title" />
            {/* <LongTextInput label="متن قرارداد" source="body" /> */}
            {/* <RichTextInput style={{height: 500,}} label="متن قرارداد" source="body" toolbar={toolbarOptions}  /> */}

            {/* <FileInput source="file" label="فایل قرارداد" 
                placeholder={<p>فایل قرارداد را به اینجا بکشید یا کلیک کنید</p>} 
                accept="application/pdf" >
                <FileField source="file" title="title" />
            </FileInput> */}
            {/* <ReactAdminJalaliDateInput source="startDate" label="تاریخ شروع قرارداد"/> */}
            <CustomDateInput source="startDate" label="تاریخ شروع قرارداد"/>
            {/* <DateTimeInput label="تاریخ اتمام قرارداد" source="endDate" /> */}
            <CustomDateInput source="endDate" label="تاریخ اتمام قرارداد"/>
            <NumberInput label="مبلغ قرارداد" source="cost" />
        </SimpleForm>
    </Create>
);