import React, {Component}  from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { Create, SimpleForm, ReferenceArrayInput, SelectArrayInput, TextInput, TextField, 
    ArrayInput, SimpleFormIterator, CheckboxGroupInput, NumberInput,
    SelectInput, GET_LIST, CREATE, Toolbar, crudCreate } from 'react-admin';
import { Checkbox, Paper, Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress, FormControl, InputLabel, Input } from '@material-ui/core';
import SaveButton from './SaveButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { setFactor, setFactorItem } from '../../actions/factor';


import {
       showNotification,
       fetchStart,
       fetchEnd,
       UPDATE
} from 'react-admin';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});

const CreateToolbar = props => (
    <Toolbar {...props}>
        <SaveButton
            label="ذخیره"
            submitOnEnter={false}
            variant="flat"
            redirect={`/Factors/${factorId}`}
        />
    </Toolbar>
);

let factorId = 0;

class FactorItemCreate extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        this.props.setFactor({id: this.props.match.params.factorId});
        factorId = this.props.match.params.factorId;
    }

    handleChange = (event) => {
        const target = event.target;
        
        const value = target.value;
        const name = target.name;

        let newFactorItem = {
            ...this.props.factorItem,
            [name]: value
        };

        this.props.setFactorItem(newFactorItem);        
    }

    render() {

        const {factorItem} = this.props;
        console.log(factorItem);
        
        const { classes } = this.props;

        const redirect = (basePath, id, data) => `/Factors/${this.props.match.params.factorId}`;

        return (
            <Card>
                <Title title="افزودن مورد جدید به فاکتور" />
                <CardContent>
                    <SimpleForm toolbar={<CreateToolbar/>} submitOnEnter={false} redirect={redirect}>
                        <TextInput onChange={this.handleChange} label="نام کالا" source="name" />
                        <TextInput type="number" onChange={this.handleChange} label="تعداد" source="quantity" />
                        <TextInput type="number" onChange={this.handleChange} label="قیمت واحد" source="unitPrice" />
                    </SimpleForm>
                </CardContent>
            </Card>
        );
    }
}

FactorItemCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
    { factorItem: state.app.factor.factorItem }
);

export default withRouter(connect(
    mapStateToProps, {
    setFactor,
    setFactorItem,
})(withStyles(styles)(FactorItemCreate)));