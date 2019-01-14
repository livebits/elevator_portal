// in src/users.js
import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, Filter, SelectInput, FunctionField,
      ReferenceInput } from 'react-admin';
      import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';

const Actions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath={basePath} />
        <ExportButton
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
    </CardActions>
);

export const AdminList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>} title="ادمین">
        <Datagrid>
            <TextField source="id" label="کد" />
            <TextField source="firstname" label="نام" />
            <TextField source="lastname" label="نام خانوادگی" />
            <TextField source="username" label="نام کاربری" />
            <FunctionField label="وضعیت" render={record => record.status === "active" ? 'فعال' : 'غیرفعال'} />
            <TextField source="mobile" label="موبایل" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);