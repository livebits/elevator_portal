import React, {Component}  from 'react';
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import {Link, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { Show, FunctionField, NumberField, Datagrid, ReferenceField,
    TextField, List, CheckboxGroupInput, TextInput,
    SelectInput, Filter, CREATE, CreateButton, RefreshButton, GET_LIST } from 'react-admin';
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
jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: true});

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    successText: {
        color: 'green'
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    cardBox: {
        background: 'rgb(227, 227, 227) none repeat scroll 0% 0%',
    },
    stats: {
        color: "#000000",
        display: "inline-flex",
        fontSize: "16px",
        lineHeight: "22px",
        marginBottom: "10px",
        height: "10px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            top: "4px",
            fontSize: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        }
    },
    cardCategory: {
        color: "#999999",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitle: {
        color: "#3C4858",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
});

const ListFilter = (props) => (
    <Filter {...props}>
        <SelectInput alwaysOn source="status" label="وضعیت بازدید" choices={[
            { id: 'done', name: 'انجام شده' },
            { id: 'expired', name: 'انجام نشده' },
        ]} />
    </Filter>
);

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
        <RefreshButton />
        {/* Add your custom actions */}
        <Button color="primary" size="medium" component={Link} to="/CustomerInspections/create">
            {/* <ImportExportRounded /> */}
            ثبت بازرسی آسانسور
        </Button>
    </CardActions>
);

export const CustomerInspections = props => {

    console.log(props);
    localStorage.setItem('customerId', props.match.params.id);
    
        return (
            <List {...props} actions={<Actions />} title="بازرسی ساختمان" bulkActions={false} basePath="" resource="CustomerInspections"
            hasCreate={false} hasShow={false} hasEdit={false} hasList={true} staticContext="/" filters={<ListFilter />}>
                <Datagrid>
                    <FunctionField label="نام مشتری" source="customerId" render={
                                record => (record === null || record.appUser === null || record.appUser === undefined || record.appUser.firstname === undefined) ? '' : (record.appUser.firstname + " " + record.appUser.lastname)
                            }/>
                    <FunctionField label="نوبت بازدید" source="year" render={
                                // record => jMoment(`${record.year}-${record.month}-1`, 'jMMMM jYYYY')
                                record => `${record.year}/${record.month}`
                                }/>
                    <FunctionField label="زمان بازدید" source="doneTime" render={
                                record => record.doneTime === null ? '' : jMoment(record.doneTime, 'YYYY-M-D').format('jYYYY/jM/jD')
                                }/>
                    <FunctionField label="نام سرویس کار" source="serviceId" render={
                                record => record.serviceUser === undefined ? '' : (record.serviceUser.firstname + " " + record.serviceUser.lastname)
                            }/>

                    <FunctionField label="توضیحات" source="description" render={
                                record => record.description
                            }/>
                </Datagrid>
            </List>
        );
}