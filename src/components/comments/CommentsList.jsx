// in src/users.js
import React from 'react';
import { ArrayField, SingleFieldList, EditButton, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, FunctionField, ReferenceField, DeleteButton, Filter, SelectInput,
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

export const CommentsList = props => (
    <List {...props} bulkActions={false} title="نظرات کاربران" >
        <Datagrid>
            <TextField source="id" label="کد" />
            <ReferenceField source="appUserId" reference="AppUsers" label="نام مشتری">
                <FunctionField source="firstname" render={record => `${record.firstname} ${record.lastname}`} />
            </ReferenceField>
            <ReferenceField source="damageId" reference="Damages" label="کد خرابی">
                <TextField source="id" />
            </ReferenceField>
            <FunctionField source="rate" label="وضعیت رضایت" render={record => (record.rate !== undefined && record.rate === 1) ? 'راضی' : 'ناراضی'} />
            <TextField source="comment" label="نظر" />
        </Datagrid>
    </List>
);