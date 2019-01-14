import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';
import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';

export const RoleList = props => (
    <List {...props} bulkActions={false} title="مدیریت نقش ها">
        <Datagrid>
            <TextField source="id" label="کد" />
            <TextField source="name" label="نام" />
            <TextField source="description" label="توضیحات" />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);