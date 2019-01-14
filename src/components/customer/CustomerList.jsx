// in src/users.js
import React from 'react';
import { ArrayField, SingleFieldList, ChipField, List, SimpleList, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, EmailField, SelectInput, FunctionField,
      ReferenceInput } from 'react-admin';
import { IconButton } from '@material-ui/core';
import {Link, withRouter} from "react-router-dom";
import PaymentRounded from '@material-ui/icons/PaymentRounded';
import ImportExportRounded from '@material-ui/icons/ImportExportRounded';
import Button from '@material-ui/core/Button';
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
        <RefreshButton />
        {/* Add your custom actions */}
        <Button color="primary" size="medium" component={Link} to="/importCustomers">
            <ImportExportRounded />
            ثبت مشتریان
        </Button>
    </CardActions>
);

export const CustomerList = props => {
    
    return (
    
    <List {...props} title="مدیریت مشتریان" bulkActions={false} actions={<Actions />}>
        <Datagrid>
            <TextField label="کد" source="id" />
            <FunctionField label="نام" render={record => `${record.firstname} ${record.lastname}`} />
            <FunctionField label="وضعیت" render={record => record.status === "active" ? 'فعال' : 'غیرفعال'} />
            <TextField label="نام ساختمان" source="buildingName" />
            <TextField label="موبایل" source="mobile" />
            <EmailField label="ایمیل" source="email" />
            {/* <FunctionField label="جنسیت" render={record => record.gender === "male" ? 'مرد' : 'زن'} /> */}
            {/* <ReferenceField label="شرکت"  source="companyId" reference="Companies">
                <TextField source="name" />
            </ReferenceField> */}
            {/* <TextField label="نام کاربری" source="username" /> */}
            
            <FunctionField label="امورمالی" source="id" render={record => {
                return (record.id !== undefined ? 
                    <Button component={Link}
                                to={`/Customers/show/${record.id}`}
                                color="primary" size="medium"
                                aria-label="امور مالی">
                        <PaymentRounded/>
                        امور مالی
                    </Button>
                    : ''
                );
            }}
            />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)};