import React from 'react';
import { SelectInput, SingleFieldList, UrlField, List, DateField, Responsive, Datagrid, TextInput,
     TextField, ReferenceField, EditButton, DeleteButton, EmailField, NumberField, FunctionField,
      ReferenceInput, Filter } from 'react-admin';
import { Button, IconButton } from '@material-ui/core';
import {Link, withRouter} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import ReportRounded from '@material-ui/icons/ReportRounded';
import ListRounded from '@material-ui/icons/ListRounded';
import jMoment from 'moment-jalaali';
jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

const DamageFilter = (props) => (
    <Filter {...props}>
        <SelectInput defaultValue="all" source="status" label="وضعیت خرابی" choices={[
            { id: 'all', name: 'همه' },
            { id: 'expired', name: 'منقضی شده' },
            { id: 'inFuture', name: 'در آینده' },
            { id: 'done', name: 'انجام شده' },
            { id: 'notAssigned', name: 'تعیین نشده' },
        ]} />
    </Filter>
);

export const EmergencyList = props => (
    <List {...props} bulkActions={false} title="امداد" >
        <Datagrid>
            <TextField label="کد" source="id" />
            <ReferenceField label="نام مشتری" source="appUserId" reference="Customers">
                <FunctionField source="firstname" render={record => `${record.firstname} ${record.lastname}`} />
            </ReferenceField>
            <ReferenceField label="سرویس کار" source="serviceId" reference="ServiceUsers">
                <FunctionField source="firstname" render={record => `${record.firstname} ${record.lastname}`} />
            </ReferenceField>
            {/* <FunctionField label="تاریخ بازدید" source="visitDate" render={
                record => record.visitDate === null ? '' : jMoment(record.visitDate, 'YYYY-M-D').format('jYYYY/jM/jD')
                }/> */}
            <FunctionField label="تاریخ بازدید" source="visitDate" render={
                record => (record.visitDate === null) ? '' : (record.visitDate._d === undefined ? jMoment((new Date(record.visitDate)).getTime()).format('jYYYY/jM/jD HH:mm:ss') : jMoment((new Date(record.visitDate._d.toISOString())).getTime()).format('jYYYY/jMM/jDD HH:mm:ss') )
                }/>
            {/* <TextField label="شرح خرابی" source="description" /> */}
            {/* <TextField label="وضعیت خرابی" source="status" /> */}
            
            {/* <FunctionField label="گزارش" source="id" render={record => {
                return (record.reports !== undefined ? 
                    <Button component={Link}
                                to={`/Reports/${record.reports.id}`}
                                color="primary" size="medium"
                                aria-label="گزارش">
                        <ReportRounded/>
                        گزارش
                    </Button>
                    : ''
                );
            }}
            /> */}

            {/* <FunctionField label="فاکتور" source="id" render={record => {
                return (
                        record.factors !== undefined ?
                        <Button component={Link}
                                    to={`/Factors/${record.factors.id}`}
                                    color="primary" size="medium"
                                    aria-label="فاکتور">
                            <ListRounded/>
                            فاکتور
                        </Button>
                        : ''
                    );
                }}
            /> */}

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);