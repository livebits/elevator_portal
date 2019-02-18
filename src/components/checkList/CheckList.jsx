import React from 'react';
import { SelectInput, SingleFieldList, UrlField, List, DateField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, EmailField, NumberField, FunctionField,
      ReferenceInput, Filter } from 'react-admin';
import jMoment from 'moment-jalaali';
jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

export const CheckList = props => (

    <List {...props} bulkActions={false} title="چک لیست" >
        <Datagrid>
            <TextField label="کد" source="id" />
            <TextField label="عنوان" source="title" />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);