import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, DateField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, EmailField, NumberField, FunctionField,
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

export const FactorList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>} title="مدیریت فاکتورها">
        <Datagrid>
            <TextField label="کد" source="id" />
            <ReferenceField label="کد خرابی" source="damageId" reference="Damages">
                <TextField source="id" />
            </ReferenceField>

            <FunctionField label="وضعیت" source="status" render={record => record.status === 'paid' ? 'پرداخت شده' : 'پرداخت نشده'}/>
            <FunctionField label="روش پرداخت" source="paymentStatus" render={record => record.paymentStatus === 'online' ? 'آنلاین' : 'نقدی'}/>
            <TextField label="هزینه فاکتور" source="sumPrice" />

            <FunctionField label="تاریخ" source="createdAt" render={
                record => (record.createdAt === null) ? '' : (record.createdAt._d === undefined ? jMoment((new Date(record.createdAt)).getTime()).format('jYYYY/jM/jD') : jMoment((new Date(record.createdAt._d.toISOString())).getTime()).format('jYYYY/jMM/jDD') )
                }/>

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);