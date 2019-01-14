import React, { Component } from 'react';
import { connect } from 'react-redux';
import { crudCreate, SaveButton, CREATE } from 'react-admin';
import dataProvider from '../dataProvider/dataProvider';
import { push } from 'react-router-redux';
import {
    showNotification,
    fetchStart,
    fetchEnd
} from 'react-admin';

// A custom action creator which modifies the values before calling the default crudCreate action creator
const saveWithNote = (data, basePath, redirectTo, props) => {
        
    const action = crudCreate('FactorItems', { ...data }, basePath, redirectTo);
    
    action.meta.refresh = true;

    return action;
};

class SaveFactorItemButton extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const { basePath, handleSubmit, redirect, saveWithNote } = this.props;
        
        let factorItem = this.props.factorItem;
            
        return handleSubmit(values => {

            factorItem.factorId = this.props.factor.id;

            saveWithNote(factorItem, basePath, redirect, this.props);
        });
    };

    render() {
        const { handleSubmitWithRedirect, saveWithNote, ...props } = this.props;
        
        return (
            <SaveButton
                handleSubmitWithRedirect={this.handleClick}
                {...props}
            />
        );
    }
}

const mapStateToProps = state => (
    { 
        factorItem: state.app.factor.factorItem,
        factor: state.app.factor.factor,
    }
);

export default connect(
    mapStateToProps,
    { 
        saveWithNote,
        // crudCreate,
        showNotification,
        fetchStart,
        fetchEnd,
        push,
    }
)(SaveFactorItemButton);