import React, {Component}  from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { Show, FunctionField, ReferenceManyField, Datagrid, TextInput,
    ArrayInput, SimpleForm, CheckboxGroupInput, NumberInput,
    SelectInput, GET_ONE, UPDATE, CREATE, crudCreate } from 'react-admin';
import { Field } from 'redux-form';
import {TextField as RATextField} from 'react-admin';
import { Checkbox, Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress, FormControl, InputLabel, Input, Divider } from '@material-ui/core';
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
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    formControl: {
        width: 300,
        marginTop: 8,
        marginBottom: 8,
    }
});

class About extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        companyName: '', 
        phone: '', 
        address: '', 
        loading: true
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        
    };

    componentDidMount() {
        
        dataProvider(GET_ONE, 'GetCompanyInfo', {})
            .then(companyInfo => {
                
                this.setState(companyInfo.data)
                this.setState({loading: false})
            }
        );
    }

    updateCompanyInfo = () => {
        
        this.setState({loading: true})
        dataProvider(UPDATE, 'Settings', {data: this.state})
            .then(companyInfo => {
                
                this.setState(companyInfo.data)
                this.setState({loading: false})
            }
        );
    }

    render() {
        
        const { classes } = this.props;
        
        return (
            <Card>
                <Title title={`درباره ما`} />
                <CardContent>

                    <div className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="name">نام شرکت</InputLabel>
                            <Input id="name" name="companyName" value={this.state.companyName} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="phone">تلفن</InputLabel>
                            <Input type="number" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl style={{width: '100%'}} className={classes.formControl}>
                            <InputLabel htmlFor="address">آدرس</InputLabel>
                            <Input id="address" name="address" value={this.state.address} onChange={this.handleChange} />
                        </FormControl>

                        <Divider style={{marginTop: 10, marginBottom: 10}} />

                        <Button disabled={this.state.loading} style={{width: 100}} variant="contained" color="primary" onClick={this.updateCompanyInfo}>
                            ذخیره
                        </Button>

                    </div>

                </CardContent>
            </Card>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
    {  }
);

export default withRouter(connect(null, {})(withStyles(styles)(About)));