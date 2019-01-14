// in src/users.js
import React from 'react';
import { ArrayField, SingleFieldList, EditButton, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, FunctionField, ShowButton, DeleteButton, Filter, SelectInput,
      ReferenceInput } from 'react-admin';
import jMoment from 'moment-jalaali';
import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';
jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

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

export const MessageList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>} title="مدیریت پیام ها" >
        <Datagrid>
            <TextField source="id" label="کد" />
            <TextField source="title" label="عنوان پیام" />
            <TextField source="userType" label="نوع کاربر" />
            {/* <ReferenceField source="appUserId" reference="appUsers">
                <TextField source="id" />
            </ReferenceField> */}
            {/* <TextField source="sendType" /> */}
            <FunctionField label="تاریخ" source="createdAt" render={
                record => (record.createdAt === null) ? '' : (record.createdAt._d === undefined ? jMoment((new Date(record.createdAt)).getTime()).format('jYYYY/jM/jD') : jMoment((new Date(record.createdAt._d.toISOString())).getTime()).format('jYYYY/jMM/jDD') )
            }/>
            
            <ShowButton />
            <DeleteButton />
        </Datagrid>
    </List>
);