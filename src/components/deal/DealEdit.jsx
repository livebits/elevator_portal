import React from 'react';
import { ReferenceArrayField, SelectField, NumberInput, DateField, FileField, SimpleForm,
    TextInput, DateTimeInput, FileInput, DisabledInput, LongTextInput,
     FunctionField, ReferenceField, Edit, ArrayInput } from 'react-admin';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';
import RichTextInput from 'ra-input-rich-text';
import { linkToRecord } from 'ra-core/lib/util';

const Title = ({ record }) => {
    return <span>ویراش قرارداد {record ? `"${record.title}"` : ''}</span>;
};

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

export const DealEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm >
            <DisabledInput label="کد" source="id" />
            <ReferenceField label="نام مشتری" source="appUserId" reference="Customers">
                <FunctionField source="id" render={record => `${record.firstname} ${record.lastname}`} />
            </ReferenceField>
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
    </Edit>
);