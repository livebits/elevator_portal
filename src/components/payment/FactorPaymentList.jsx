import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, DateField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, EmailField, NumberField, FunctionField,
      ReferenceInput } from 'react-admin';
import ApproveButton from './ApproveButton';
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
        {/* <CreateButton basePath={basePath} /> */}
        <ExportButton
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
    </CardActions>
);

export const FactorPaymentList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>} title="مدیریت پرداخت ها">
        <Datagrid>
            <TextField label="کد" source="id" />
            <ReferenceField label="مشتری" source="appUserId" reference="Customers">
                <FunctionField source="firstname" render={record => `${record.firstname} ${record.lastname}`} />
            </ReferenceField>
            <ReferenceField  label="شماره فاکتور" source="factorId" reference="Factors">
                <TextField source="id" />
            </ReferenceField>
            
            <NumberField label="مقدار پرداختی" source="price" />
            <FunctionField label="وضعیت" source="status" render={record => record.status === 'accepted' ? 'تایید شده' : 'تاییده نشده'}/>
            <FunctionField label="تاریخ پرداخت" source="date" render={
                record => record.date === null ? '' : jMoment(record.date, 'YYYY-M-D').format('jYYYY/jM/jD')
                }/>
            <TextField label="کد رهگیری" source="refCode" />

            <ApproveButton />
            <DeleteButton />
        </Datagrid>
    </List>
);