import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, EmailField, SelectInput, FunctionField,
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

export const ServiceUserList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>} title="مدیریت سرویس کاران">
        <Datagrid>
            <TextField label="کد" source="id" />
            <FunctionField label="نام" render={record => `${record.firstname} ${record.lastname}`} />
            <FunctionField label="وضعیت" render={record => record.status === "active" ? 'فعال' : 'غیرفعال'} />
            <TextField label="موبایل" source="mobile" />
            {/* <EmailField label="ایمیل" source="email" /> */}
            {/* <FunctionField label="جنسیت" render={record => record.gender === "female" ? 'زن' : 'مرد'} /> */}
            {/* <ReferenceField label="شرکت"  source="companyId" reference="Companies">
                <TextField source="name" />
            </ReferenceField> */}
            {/* <TextField label="نام کاربری" source="username" /> */}
            
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);