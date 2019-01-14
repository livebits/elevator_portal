import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, EmailField, NumberField, FunctionField,
      ReferenceInput } from 'react-admin';
import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';
import jMoment from 'moment-jalaali';
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

export const DealList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>} title="مدیریت قراردادها" >
        <Datagrid>
            <TextField label="کد" source="id" />
            <ReferenceField label="نام مشتری" source="appUserId" reference="Customers">
                <FunctionField source="firstname" render={record => `${record.firstname} ${record.lastname}`} />
            </ReferenceField>
            <TextField source="title" label="موضوع قرارداد" />
            {/* <TextField source="body" /> */}
            {/* <TextField source="file" /> */}
            <FunctionField label="تاریخ شروع" source="startDate" render={
                record => (record.startDate === null) ? '' : (record.startDate._d === undefined ? jMoment((new Date(record.startDate)).getTime()).format('jYYYY/jM/jD') : jMoment((new Date(record.startDate._d.toISOString())).getTime()).format('jYYYY/jMM/jDD') )
                }/>
            <FunctionField label="تاریخ پایان" source="endDate" render={
                record => (record.endDate === null) ? '' : (record.endDate._d === undefined ? jMoment((new Date(record.endDate)).getTime()).format('jYYYY/jM/jD') : jMoment((new Date(record.endDate._d.toISOString())).getTime()).format('jYYYY/jMM/jDD') )
                }/>
            <NumberField label="قیمت (ریال)" source="cost" />
            
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);