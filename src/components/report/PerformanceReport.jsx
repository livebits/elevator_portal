import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, DateField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, EmailField, NumberField, FunctionField,
      ReferenceInput } from 'react-admin';
import jMoment from 'moment-jalaali';
import {Link, withRouter} from "react-router-dom";
import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';
import { Button } from '@material-ui/core';
import PrintRounded from '@material-ui/icons/PrintRounded';
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

export const PerformanceReport = props => (
    <List {...props} bulkActions={false}  title="گزارش عملکرد">
        <Datagrid>
            
            <TextField source="id" label="کد" />
            <TextField source="firstname" label="نام" />
            <TextField source="lastname" label="نام خانوادگی" />
            <NumberField source="DamagesCount" label="تعداد خرابی ها" />
            <NumberField source="EmgDamagesCount" label="تعداد موارد امداد" />
        </Datagrid>
    </List>
);