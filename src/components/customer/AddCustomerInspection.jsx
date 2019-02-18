import React, {Component}  from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { Show, FunctionField, NumberField, Datagrid, ReferenceField,
    TextField, List, CheckboxGroupInput, TextInput,
    SelectInput, LongTextInput, ReferenceInput, AutocompleteInput, Create, SimpleForm } from 'react-admin';
import {TextField as RATextField} from 'react-admin';
import { Checkbox, Table, TableHead, TableRow, TableCell, CardActions, Button, LinearProgress, FormControl, InputLabel, Input } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import GridItem from "../CustomComponents/Grid/GridItem";
import GridContainer from "../CustomComponents/Grid/GridContainer.jsx";
// import Card from "../CustomComponents/Card/Card.jsx";
import CardHeader from "../CustomComponents/Card/CardHeader.jsx";
import CardIcon from "../CustomComponents/Card/CardIcon.jsx";
import CardFooter from "../CustomComponents/Card/CardFooter.jsx";
import Book from "@material-ui/icons/Book";
import { Typography, ListItemAvatar, ListItemSecondaryAction, Paper } from '@material-ui/core';

import jMoment from 'moment-jalaali';
import { CustomDateInput } from '../CustomComponents/CustomDatePicker';
jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

export const AddCustomerInspection = props => {
    
        return (
            <Create title="ثبت بازرسی آسانسور"  {...props} basePath="/Customers" resource="CustomerInspections" staticContext="">
                <SimpleForm>
                    <ReferenceInput label="نام مشتری" source="appUserId" reference="Customers">
                        <AutocompleteInput optionValue="id" optionText={choice => `${choice.firstname} ${choice.lastname}`} options={{
                            fullWidth: true,
                        }} />
                    </ReferenceInput>
                    {/* <NumberInput source="year" /> */}
                    {/* <NumberInput source="month" /> */}
                    {/* <SelectInput source="month" label="ماه" choices={[
                        { id: '1', name: 'فروردین' },
                        { id: '2', name: 'اردیبهشت' },
                        { id: '3', name: 'خرداد' },
                        { id: '4', name: 'تیر' },
                        { id: '5', name: 'مرداد' },
                        { id: '6', name: 'شهریور' },
                        { id: '7', name: 'مهر' },
                        { id: '8', name: 'آبان' },
                        { id: '9', name: 'آذر' },
                        { id: '10', name: 'دی' },
                        { id: '11', name: 'بهمن' },
                        { id: '12', name: 'اسفند' },
                    ]} /> */}
                    <CustomDateInput source="doneTime" label="تاریخ انجام بازرسی"/>
                    {/* <TextInput source="status" /> */}
                    {/* <ReferenceInput source="serviceId" reference="services"><SelectInput optionText="id" /></ReferenceInput> */}
                    <ReferenceInput label="سرویس کار" source="serviceId" reference="ServiceUsers">
                        <AutocompleteInput optionValue="id" optionText={choice => `${choice.firstname} ${choice.lastname}`} options={{
                            fullWidth: true,
                        }} />
                    </ReferenceInput>
                    <LongTextInput source="description" label="توضیحات" />
                </SimpleForm>
            </Create>
        );
}