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

export const ReportList = props => (
    <List {...props} bulkActions={false} actions={<Actions/>} title="مدیریت گزارشات">
        <Datagrid>
            <TextField label="کد" source="id" />
            <ReferenceField label="کد خرابی" source="damageId" reference="Damages">
                <TextField source="id" />
            </ReferenceField>

            <FunctionField label="گزارش" source="body" render={
                record => {
                    if (record.body.length > 50)
                        return record.body.substring(0,50) + '...';
                    else
                        return record.body;
                }
            } />
            {/* <TextField label="وضعیت" source="status" /> */}
            <FunctionField label="تاریخ" source="createdAt" render={
                record => (record.createdAt === null) ? '' : (record.createdAt._d === undefined ? jMoment((new Date(record.createdAt)).getTime()).format('jYYYY/jM/jD') : jMoment((new Date(record.createdAt._d.toISOString())).getTime()).format('jYYYY/jMM/jDD') )
            }/>

            <FunctionField label="پرینت" source="id" render={record => {
                return (
                        <Button component={Link}
                                    to={`/ReportPrint/${record.damageId}`}
                                    color="primary" size="medium"
                                    aria-label="پرینت">
                            <PrintRounded />
                            پرینت
                        </Button>
                    );
                }}
            />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);