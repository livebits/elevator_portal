import React, {Component}  from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { Create, SimpleForm, ReferenceArrayInput, SelectArrayInput, TextInput, TextField, 
    ArrayInput, SimpleFormIterator, CheckboxGroupInput, FormDataConsumer,
    SelectInput, GET_LIST, CREATE, Toolbar, crudCreate } from 'react-admin';
import { Checkbox, Paper, Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

import { setMenusIds, setMenusActionsIds, setMenus } from '../../actions/menu';
import UsersMap from './UsersMap';

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

class UsersOnMap extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        users: [],
    };

    componentDidMount() {
        
        dataProvider(GET_LIST, 'users-on-map', {})
            .then(users => {
                    this.setState({ users: users.data })
                }
            );
    }

    render() {

        const { users } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <Card>
                    <Title title="کاربران روی نقشه" />
                    <CardContent>
                        <UsersMap Users={users}/>
                    </CardContent> 
                </Card>
            </div>
        );
    }
}

UsersOnMap.propTypes = {
    classes: PropTypes.object.isRequired,
    push: PropTypes.func,
    fetchStart: PropTypes.func,
    fetchEnd: PropTypes.func,
};

export default withRouter(connect(null, {
    // setMenus
})(withStyles(styles)(UsersOnMap)));