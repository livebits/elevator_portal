import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import {
    Show, FunctionField, ReferenceManyField, Datagrid, TextInput,
    ArrayInput, SimpleFormIterator, CheckboxGroupInput, NumberInput,
    SelectInput, GET_ONE, Loading, Toolbar, crudCreate
} from 'react-admin';
import { TextField as RATextField } from 'react-admin';
import { Checkbox, Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress, FormControl, InputLabel, Input } from '@material-ui/core';
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
import ReactToPrint from "react-to-print";

import jMoment from 'moment-jalaali';
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

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

// let damageData = {}

class ReportPrint extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        damage: {

        }
    };

    componentDidMount() {

        dataProvider(GET_ONE, 'DamageDetail', { id: this.props.match.params.id })
            .then(damage => {
                console.log('damage: ', JSON.stringify(damage));

                this.setState({ damage: damage.data })
                // damageData = damage.data;
            }
            );
    }

    render() {

        const { classes } = this.props;
        const record = this.state.damage;

        return (
            <Card>
                <Title title={`پرینت گزارش`} />
                <CardContent>

                    <ReactToPrint
                        trigger={() => <Button variant="contained" style={{margin: '10px 0px 10px 30px'}} color="primary">پرینت</Button>}
                        content={() => this.componentRef}
                    />
                    <ComponentToPrint data={record} ref={el => (this.componentRef = el)}/>

                </CardContent>
            </Card>
        );
    }
}

class ComponentToPrint extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let damageData = this.props.data;

        let checkList = "";
        if(damageData.id !== undefined) {
            if(damageData.reports.checkList !== null && damageData.reports.checkList !== "") {

                let checkLists = JSON.parse(damageData.reports.checkList);
                
                checkLists.forEach(check => {
                    checkList += check.title + " - "
                });
            }
        }

        return (
            damageData.id !== undefined ?
            <table style={{borderCollapse: 'collapse', border: '1px solid black', margin: '50px 20px', direction: 'rtl', width: '90%'}}>
                <tbody>
                    <tr>
                        <td style={{border: '1px solid black', width: 150, padding: 5}}>نام مشتری</td>
                        <td style={{border: '1px solid black', padding: 5}}>{`${damageData.appUser.firstname} ${damageData.appUser.lastname}`}</td>
                    </tr>
                    <tr>
                        <td style={{border: '1px solid black', padding: 5}}>نام سرویس کار</td>
                        <td style={{border: '1px solid black', padding: 5}}>{`${damageData.serviceUser.firstname} ${damageData.serviceUser.lastname}`}</td>
                    </tr>
                    <tr>
                        <td style={{border: '1px solid black', padding: 5}}>تاریخ خرابی</td>
                        <td style={{border: '1px solid black', padding: 5}}>{`${jMoment((new Date(damageData.visitDate)).getTime()).format('jYYYY/jM/jD')}`}</td>
                    </tr>
                    <tr>
                        <td style={{border: '1px solid black', padding: 5}}>شرح خرابی</td>
                        <td style={{border: '1px solid black', padding: 5}}>{`${damageData.reports.body}`}</td>
                    </tr>
                    <tr>
                        <td style={{border: '1px solid black', padding: 5}}>چک لیست</td>
                        <td style={{border: '1px solid black', padding: 5}}>
                            {
                                checkList
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
            :
            <Loading loadingPrimary="" />
        );
    }
}

ReportPrint.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
    {}
);

export default withRouter(connect(
    null, {
    })(withStyles(styles)(ReportPrint)));